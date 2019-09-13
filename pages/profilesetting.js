import React from 'react';
import Layout from '../Components/twoColumnLayout'
import axios from 'axios';
import Config from '../config';
import register from '../pages/register.js';
import login from '../pages/login.js'
import Link from 'next/link'

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={
        
    };
  }

  componentDidMount(){
 
  }

  
  render() {
    return (<Layout>
            <div className="page-content">
              <div className="inner-box">
                <div className="dashboard-box">
                  <h2 className="dashbord-title">Setting</h2>
                </div>
                <div className="dashboard-wrapper">
                  <div className="panel-group" id="accordion4" role="tablist" aria-multiselectable="true">
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingOne4">
                        <h4 className="panel-title">
                          <a role="button" data-toggle="collapse" data-parent="#accordion4" href="#collapseOne4" aria-expanded="false" aria-controls="collapseOne4" className="collapsed">
                            <i className="icon fa fa-key" />
                            Change Password
                          </a>
                        </h4>
                      </div>
                      <div id="collapseOne4" className="panel-collapse in collapse" role="tabpanel" aria-labelledby="headingOne4" style={{}}>
                        <div className="panel-body">
                          <div className="form-group mb-3">
                            <input className="form-control input-md" name="shop_name" placeholder="Current Password" type="password" />
                          </div>
                          <div className="form-group mb-3">
                            <input className="form-control input-md" name="trade_licenece" placeholder="New Password" type="text" />
                          </div>
                          <div className="form-group mb-3">
                            <input className="form-control input-md" name="valid_goverment_id" placeholder="Re Type Password" type="text" />
                          </div>
                          <button className="btn btn-common" type="button">Save</button>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingTwo4">
                        <h4 className="panel-title">
                          <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion4" href="#collapseTwo4" aria-expanded="false" aria-controls="collapseTwo4">
                            <i className="icon fa fa-lock" />  
                            Logout From all devices
                          </a>
                        </h4>
                      </div>
                      <div id="collapseTwo4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo4" style={{}}>
                        <div className="panel-body text-center">
                          <h6 className="title"><b>Are you sure you want to logout from all device and linked apps</b></h6>
                          <p>vestibulum ut arcu. Curabitur erat libero, egestas eu tincidunt ac, rutrum ac justo. Vivamus condimentum laoreet lectus, blandit posuere tortor aliquam vitae. Curabitur molestie eros. </p>
                          <button className="btn btn-common mt-2" type="button">Logout</button>
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingTwo5">
                        <h4 className="panel-title">
                          <a className="collapsed" role="button" data-toggle="collapse" data-parent="#accordion5" href="#collapseTwo5" aria-expanded="false" aria-controls="collapseTwo5">
                            <i className="icon fa fa-lock" />  
                            Google 2FA Authentication
                          </a>
                        </h4>
                      </div>
                      <div id="collapseTwo5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo4" style={{}}>
                        <div className="panel-body text-center ">
                          <h6 className="title mt-3"><b>We strongly recommend you to enable 2FA on your account !</b></h6>
                          <p>Please choose how you wish to receive 2FA code:</p>
                          <a href="/googleAuthentication" className="btn btn-common mt-3 mb-3"><i className="fab fa-google" /> Google Authentication</a> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </Layout>);
  }
}
