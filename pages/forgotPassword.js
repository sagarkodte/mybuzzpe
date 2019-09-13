import React from 'react';
import Layout from '../Components/dashBoardLayout'
import axios from 'axios';
import Config from '../config';
import register from '../pages/register.js';
import login from '../pages/login.js'
import Link from 'next/link'

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={
        errors: {},
        emailMobile:'',
        success:'',
        error:''
    };
  }

  componentDidMount=()=>{
 
  }

  forgotPassword=()=>{
    if(this.state.emailMobile!==''){
     var userData = {
          user:this.state.emailMobile
      }
     if(this.validateForm()){
    axios.post(Config.url+'/api/user/reset-password',userData,{headers: {
        'Content-Type': 'application/json'
      }}).then(res =>{
        console.log('link send  :',res);
        this.setState({success:'Reset link sent to your registered email or mobile no'});
        setTimeout(() => {
          this.props.url.push('/login')
          this.setState({success:''});
        }, 4000);
      }).catch(error => {
        this.setState({error:error.response.data.message});
        //return error;
      });
     } 
    }  
  }

  validateForm=()=>{
    let errors = {};
    let formIsValid = true;
  if(isNaN(this.state.emailMobile)){
    if (!this.state.emailMobile) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    }

    if (typeof this.state.emailMobile !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(this.state.email)) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email.";
      }
    }
}else{
    if (!this.state.emailMobile) {
      formIsValid = false;
      errors["mobileNumber"] = "*Please enter your mobile no.";
    }

    if (typeof this.state.emailMobile !== "undefined") {
      if (!this.state.emailMobile.match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileNumber"] = "*Please enter valid 10 digit mobile no.";
      }
    }
}
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  handleChange=(e)=>{
    let eventName=e.target.name;
     switch(eventName){
       case 'emailMobile':
         console.log('emailMobile :',eventName,e.target.value);
         this.setState({emailMobile:e.target.value,error:'',errors:''});
         break; 
       default :
         break;   
     }
  }

  render() {
    return (<Layout>
       <section className="mt-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-12 col-xs-12">
              <div className="forgot login-area">
                <h3>
                  Forgot Password
                </h3>
                <div role="form" className="login-form">
                  <div className="form-group">
                    <div className="input-icon">
                      <i className="icon lni-user" />
                      <input type="text" id="sender-email" className="form-control" name="emailMobile" placeholder="Email/Mobile" value={this.state.emailMobile} onChange={this.handleChange}/>
                      <p><font color="red">{this.state.errors.email?this.state.errors.email:this.state.errors.mobileNumber}</font></p>
                    </div>
                  </div>
                  <div className="text-center">
                  {this.state.success!==''?<div className="alert alert-success">
                     {this.state.success}
                    </div>:''}
                    {this.state.error?<div className="alert alert-danger">
                    {this.state.error}
                    </div>:''}
                    <button className="btn btn-common log-btn" onClick={this.forgotPassword}>Send </button>
                  </div>
                  <div className="form-group mt-4">
                    <ul className="form-links">
                      <li className="float-left"><Link href="/register"><a >Don't have an account?</a></Link></li>
                      <li className="float-right"><Link href="/login"><a >Back to Login</a></Link></li>
                    </ul>
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
