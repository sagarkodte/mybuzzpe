import React from 'react';
import Layout from '../Components/dashBoardLayout'
import axios from 'axios';
import Config from '../config';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={
     firstName:'',
     lastName:'',
     email:'',
     mobileNumber:'',
     password:'',
     confirmPassword:'',
     errors: {},
     registerSuccess:'',
     registerError:''
    };
  }

  componentDidMount=()=>{

  }

  register=()=>{
   var userData={
      "firstname":this.state.firstName,
      "lastname": this.state.lastName,
      "email": this.state.email,
      "mobile":this.state.mobileNumber,
      "password":this.state.password
      }
    if(this.validateForm()){
      axios.post(Config.url+'/api/user/add',userData,{headers: {
        'Content-Type': 'application/json'
      }}).then(res =>{
        console.log('register :',res);
        this.setState({registerSuccess:' Registration  Successful'});
        setTimeout(() => {
          this.props.url.push('/login')
          this.setState({registerSuccess:''});
        }, 3000);
      }).catch(error => {
        this.setState({registerError:error.response.data.message});
        //return error;
      });
    }
  }


  validateForm=()=>{
    let errors = {};
    let formIsValid = true;

    if (!this.state.firstName) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your firstname.";
    }

    if (typeof this.state.firstName!== "undefined") {
      if (!this.state.firstName.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!this.state.lastName) {
      formIsValid = false;
      errors["lastName"] = "*Please enter your lastName.";
    }

    if (typeof this.state.lastName!== "undefined") {
      if (!this.state.lastName.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!this.state.email) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    }

    if (typeof this.state.email !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(this.state.email)) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email.";
      }
    }

    if (!this.state.mobileNumber) {
      formIsValid = false;
      errors["mobileNumber"] = "*Please enter your mobile no.";
    }

    if (typeof this.state.mobileNumber !== "undefined") {
      if (!this.state.mobileNumber.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileNumber"] = "*Please enter valid 10 digit mobile no.";
      }
    }

    if (!this.state.password) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof this.state.password !== "undefined") {
      if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    if (!this.state.confirmPassword) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof this.state.confirmPassword!== "undefined") {
      if (!this.state.password.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    if(this.state.password!==this.state.confirmPassword){
        formIsValid=false;
        errors["confirmPassword"]="*Please enter correct cofirmation password";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }


  handleOnChange=(e)=>{
   var eventName=e.target.name;
   console.log('handle ee :',this.state.errors);
   switch(eventName){
     case 'firstName':
        console.log('handle change1 :',eventName,e.target.value);
       this.setState({firstName:e.target.value, errors:'',registerError:''});
     break;
     case 'lastName':
        console.log('handle change2 :',eventName,e.target.value);
        this.setState({lastName:e.target.value, errors:'',registerError:''});
     break;
     case 'email':
        this.setState({email:e.target.value, errors:'',registerError:''});
        console.log('handle change3 :',eventName,e.target.value);
     break;
     case 'mobileNumber':
        this.setState({mobileNumber:e.target.value, errors:'',registerError:''});
        console.log('handle change4 :',eventName,e.target.value);
     break;
     case 'password':
        this.setState({password:e.target.value, errors:'',registerError:''});
        console.log('handle change5 :',eventName,e.target.value);
       break;
     case 'confirmPassword':
       this.setState({confirmPassword:e.target.value, errors:'',registerError:''});
       break;
     default:
       break;
   }
  }

  render() {
    console.log('this.state.categories :',this.state.categories);
    return (<Layout>
      <div className="text-center mt-3">
        <a href="\" className="navbar-brand"><img src="http://3.17.162.108:8200/assets/img/logo.png"  /></a>
      </div>
      <section className="register mt-3">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="register-form login-area">
                <h3>
                  Register
                </h3>
                <div className="login-form" id="registrationForm" noValidate="novalidate">
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-user" />
                      <input type="text"  className="form-control" name="firstName" placeholder="firstName"  value={this.state.firstName} onChange={this.handleOnChange}/>
                      <p><font color="red">{this.state.errors.firstName}</font></p>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-user" />
                      <input type="text"  className="form-control" name="lastName" placeholder="lastName" value={this.state.lastName} onChange={this.handleOnChange}/>
                      <p><font color="red">{this.state.errors.lastName}</font></p>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-envelope" />
                      <input type="text"  className="form-control" name="email" placeholder="email address" value={this.state.email} onChange={this.handleOnChange}/>
                      <p><font color="red">{this.state.errors.email}</font></p>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-mobile" />
                      <input type="text" id="mobileNumber" className="form-control" name="mobileNumber" placeholder="Mobile number" value={this.state.mobileNumber} onChange={this.handleOnChange}/>
                      <p><font color="red">{this.state.errors.mobileNumber}</font></p>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-lock" />
                      <input type="password" className="form-control" name="password" placeholder="password" id="password" value={this.state.password} onChange={this.handleOnChange}/>
                      <p><font color="red">{this.state.errors.password}</font></p>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-lock" />
                      <input type="password" className="form-control" placeholder="Retype Password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleOnChange}/>
                      <p><font color="red">{this.state.errors.confirmPassword}</font></p>
                    </div>
                  </div>
                  {/*
                        <div class="form-group tg-inputwithicon">
                           <div class="input-icon">
                              <i class="lni-lock"></i>
                              <div class="tg-select form-control">
                                 <select>
                                    <option value="none">Select Categories</option>
                                    <option value="businessman">Businessman</option>
                                    <option value="user">User</option>
                                    registration
                                 </select>
                              </div>
                           </div>
                        </div>
                     */}
                  {/* <div className="form-group mb-3">
                    <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="checkedall" />
                      <label className="custom-control-label" htmlFor="checkedall">By registering, you accept our Terms &amp;
                        Conditions</label>
                    </div>
                  </div> */}
                  <div className="">
                  {this.state.registerSuccess!==''?<div className="alert alert-success">
                     {this.state.registerSuccess}
                    </div>:''}
                    {this.state.registerError?<div className="alert alert-danger">
                    {this.state.registerError}
                    </div>:''}
                    <button className="btn btn-common log-btn" type="submit" onClick={this.register}>Register</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>);
  }
}

// export default Home;