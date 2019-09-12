import React from 'react';
// import Layout from '../../Components/dashBoardLayout'
import Layout from '../../Components/adminLayout'
import axios from 'axios';
import Config from '../../config';
import Link from 'next/link'

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={
     user:'',
     password:'',
     loginError:'',
     loginSuccess:''
    };
  }

  componentDidMount(){
 
  }

  login=()=>{
   if(this.state.user!=='' && this.state.password!==''){
   var userData={
      "user":this.state.user,
      "password":this.state.password
    }
    axios.post(Config.url+'/api/login',userData,{headers: {
      'Content-Type': 'application/json'
    }}).then(res =>{
      console.log('login :',res.data.user);
      console.log('login :',res.data.user.isValidEmail);
      //if(res.data.user.isValidEmail){
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token',res.data.token);
      this.setState({loginSuccess:'Successfully logged In'});
      setTimeout(() => {
        this.props.url.push('/')
        this.setState({loginSuccess:''});
      }, 3000);
      // }else{
      //   this.setState({loginError:'Email is not activated'});
      // }
    }).catch(error => {
      console.log('login error :',error.response.data.message);
      this.setState({loginError:error.response.data.message});
      //return error;
    });
   }else{
     this.setState({loginError:'Please enter the fields'})
   } 
  }

  handleChange=(e)=>{
    let eventName=e.target.name;
     switch(eventName){
       case 'user':
         console.log('user :',eventName,e.target.value);
         this.setState({user:e.target.value,loginError:''});
         break;
       case 'password':
          console.log('pass :',eventName,e.target.value);
         this.setState({password:e.target.value,loginError:''});
         break;   
       default :
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
                <div role="form" className="login-form" id="loginForm" noValidate="novalidate">
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-user" />
                      <input type="text" id="sender-email" className="form-control" name="user" placeholder="Username / Email Id / Mobile No." value={this.state.user} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="lni-lock" />
                      <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </div>
                  </div>
                  <div className="form-group mb-3">
                    {/* <div className="custom-control custom-checkbox">
                      <input type="checkbox" className="custom-control-input" id="checkedall" />
                      <label className="custom-control-label" htmlFor="checkedall">Keep me logged in</label>
                    </div> */}
                  <Link href="/forgotPassword"><a className="forgetpassword" >Forgot Password?</a></Link>
                  </div>
                  <div className="text-center">
                    {this.state.loginSuccess!==''?<div className="alert alert-success">
                     {this.state.loginSuccess}
                    </div>:''}
                    {this.state.loginError?<div className="alert alert-danger">
                    {this.state.loginError}
                    </div>:''}
                    <button className="btn btn-common log-btn" onClick={this.login}>Submit</button>
                    <div className="modal fade" id="myModal" role="dialog" />
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
