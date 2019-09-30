import React from 'react';
import Layout from '../Components/dashBoardLayout'
import axios from 'axios';
import Config from '../config';
import forgotPassword from '../pages/forgotPassword';
import Link from 'next/link'
import Loader from '../Components/Loader'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            loginError: '',
            loginSuccess: '',
            loader: false
        };
    }

    componentDidMount = () => {
        console.log('props :', this.props);
        let token = localStorage.getItem('token');
        console.log(token);

        if (token) {
            console.log('redirect :', this.props);
            this.props.url.push('/');
        }
    }

    login = () => {
        this.setState({ loader: true })
        if (this.state.user !== '' && this.state.password !== '') {
            var userData = {
                "user": this.state.user,
                "password": this.state.password
            }
            axios.post(Config.url + '/api/user/login', userData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {

                console.log('login :', res.data.user);
                console.log('login :', res.data.user.isValidEmail);
                //if(res.data.user.isValidEmail){
                localStorage.setItem('user', JSON.stringify(res.data.user));
                localStorage.setItem('token', res.data.token);
                this.setState({ loginSuccess: 'Successfully logged In' });

                this.props.url.push('/')
                this.setState({ loginSuccess: '' });

                // }else{
                //   this.setState({loginError:'Email is not activated'});
                // }
            }).catch(error => {
                console.log('login error :', error.response.data.message);
                this.setState({ loginError: error.response.data.message });
                //return error;
            });
        } else {
            this.setState({ loginError: 'Please enter the fields' })
        }
    }

    validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!this.state.user) {
            formIsValid = false;
            errors["user"] = "*Please enter your email or mobile no.";
        }

        if (typeof this.state.user !== "undefined") {
            //regular expression for email validation
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(this.state.user)) {
                formIsValid = false;
                errors["user"] = "*Please enter valid email.";
            }
        }

        if (typeof this.state.user !== "undefined") {
            if (!this.state.user.match(/^[0-9]{10}$/)) {
                formIsValid = false;
                errors["user"] = "*Please enter valid 10 digit mobile no.";
            }
        }

        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "*Please enter your password.";
        }

        if (typeof this.state.password !== "undefined") {
            if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                formIsValid = false;
                errors["password"] = "*Please enter .";
            }
        }

        this.setState({
            errors: errors
        });
        return formIsValid;
    }


    handleChange = (e) => {
        let eventName = e.target.name;
        switch (eventName) {
            case 'user':
                console.log('user :', eventName, e.target.value);
                this.setState({ user: e.target.value, loginError: '' });
                break;
            case 'password':
                console.log('pass :', eventName, e.target.value);
                this.setState({ password: e.target.value, loginError: '' });
                break;
            default:
                break;
        }
    }

    render() {
        return (<Layout>
            <section className="login mt-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-5 col-md-12 col-xs-12">
                            <div className="login-form login-area">
                                <h3>
                                    Login Here
                </h3>
                                {this.state.loader?<Loader />:
                                <div role="form" className="login-form" id="loginForm" noValidate="novalidate">
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-user" />
                                            <input type="text" id="sender-email" className="form-control" name="user" placeholder="Email Id / Mobile No." value={this.state.user} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-icon">
                                            <i className="lni-lock" />
                                            <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                                        </div>
                                    </div>
                                    <div className="form-group mb-3">
                                        {/* <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="checkedall" />
                      <label className="custom-control-label" htmlFor="checkedall">Keep me logged in</label>
                    </div> */}
                                        <Link href="/forgotPassword"><a className="forgetpassword" >Forgot Password?</a></Link>
                                    </div>
                                    <div className="">
                                        {this.state.loginSuccess !== '' ? <div className="alert alert-success">
                                            {this.state.loginSuccess}
                                        </div> : ''}
                                        {this.state.loginError ? <div className="alert alert-danger">
                                            {this.state.loginError}
                                        </div> : ''}
                                        <button className="btn btn-common log-btn" onClick={this.login}>Submit</button>

                                    </div>
                                </div>}

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>);
    }
}
