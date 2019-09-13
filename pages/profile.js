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
                  <h2 className="dashbord-title">My Profile</h2>
                </div>
                <div className="dashboard-wrapper">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-sx-12">
                      <div className="panel-group" id="accordion4" role="tablist" aria-multiselectable="true">
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingOne4">
                            <h4 className="panel-title">
                              <a role="button" data-toggle="collapse" data-parent="#accordion4" href="#collapseOne4" aria-expanded="false" aria-controls="collapseOne4">
                                <i className="icon fa fa-user" />
                                Personal Information
                              </a>
                            </h4>
                          </div>
                          <div id="collapseOne4" className="panel-collapse in" role="tabpanel" aria-labelledby="headingOne4">
                            <div className="panel-body">
                              <form className="login-form" id="registrationForm" noValidate="novalidate">
                                <div className="form-group mb-3">
                                  <label className="control-label">Account No<span>*</span></label>
                                  <input className="form-control input-md" id="accountNo" name="accountNo" type="text" placeholder="accountNo" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">DOB<span>*</span></label>
                                  <input className="form-control input-md " id="DOB" name="DOB" type="text" placeholder="Date Of birth" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Gender<span>*</span></label><br />
                                  <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio1" defaultValue="Male" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" id="inlineRadio2" defaultValue="Female" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">Female</label>
                                  </div>
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Name On Account<span>*</span></label>
                                  <input className="form-control input-md" id="NameOnAccount" name="NameOnAccount" type="text" placeholder="Name of Account" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Aadhar Card<span>*</span></label>
                                  <input className="form-control input-md" id="adharname" name="adharname" type="text" placeholder="Aadhar Name" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">PAN Card<span>*</span></label>
                                  <input className="form-control input-md" id="pancard" name="pancard" type="text" placeholder="PAN Account" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">IFSC<span>*</span></label>
                                  <input className="form-control input-md" id="ifsc" name="ifsc" type="text" placeholder="IFSC" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Address<span>*</span></label>
                                  <input className="form-control input-md" id="address" name="address" type="text" placeholder="Address" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Martial Status</label>
                                  <input className="form-control input-md" id="martial" name="martial" type="text" placeholder="Martial Status" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Profession</label>
                                  <input className="form-control input-md" id="Profession" name="Profession" type="text" placeholder="Profession" />
                                </div>
                                <button className="btn btn-common" type="submit">Submit</button>
                              </form>
                            </div>
                          </div>
                        </div>
                        <div className="panel panel-default">
                          <div className="panel-heading" role="tab" id="headingOne5">
                            <h4 className="panel-title">
                              <a role="button" data-parent="#accordion5" href="#collapseOne5" aria-expanded="true" aria-controls="collapseOne5" data-toggle="collapse" className>
                                <i className="icon fa fa-user" />
                                Upgrade to Bussines</a>
                            </h4>
                          </div>
                          <div id="collapseOne5" className="panel-collapse collapse show" role="tabpanel" aria-labelledby="headingOne5" style={{}}>
                            <div className="panel-body">
                              <form id="upgradeBusinessForm" noValidate="novalidate">
                                <div className="form-group mb-3">
                                  <label className="control-label">Business Name<span>*</span></label>
                                  <input className="form-control input-md" id="businessName" name="businessName" type="text" placeholder="Business Name" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Registered Owner Name<span>*</span></label>
                                  <input className="form-control input-md " id="ownerName" name="ownerName" type="text" placeholder="Registered Owner Name" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Currencies Accepted<span>*</span></label><br />
                                  {/* <div class="form-check form-check-inline">
   
                                                         <input class="form-check-input" type="radio" name="currency" id="inlineRadio1" value="INR">
                                                         <label class="form-check-label" for="inlineRadio1">INR</label>
                                                      </div>
                                                      <div class="form-check form-check-inline">
                                                         <input class="form-check-input" type="radio" name="currency" id="inlineRadio2" value="USD">
                                                         <label class="form-check-label" for="inlineRadio2">USD</label>
                                                      </div> */}
                                  {/* <input class="form-control input-md " id="currency" name="currency" type="text" placeholder="Currencies Accepted">    */}
                                  <label><input type="checkbox" defaultValue="INR" name="currency" />INR</label>
                                  <label><input type="checkbox" defaultValue="USD" name="currency" />USD</label>
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Gst In<span>*</span></label>
                                  <input className="form-control input-md" id="gstIn" name="gstIn" type="text" placeholder="Gst In" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Payment Accepted<span>*</span></label>
                                  <input className="form-control input-md" id="paymentAccepted" name="paymentAccepted" type="text" placeholder="Payment Accepted" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Address Line 1<span>*</span></label>
                                  <input className="form-control input-md" id="addressLine1" name="addressLine1" type="text" placeholder="Address Line 1" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Address Line 2<span>*</span></label>
                                  <input className="form-control input-md" id="addressLine2" name="addressLine2" type="text" placeholder="Address Line 2" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">City<span>*</span></label>
                                  <input className="form-control input-md" id="city" name="city" type="text" placeholder="City" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">State<span>*</span></label>
                                  <input className="form-control input-md" id="state" name="state" type="text" placeholder="State" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Country</label>
                                  <input className="form-control input-md" id="country" name="country" type="text" placeholder="Country" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Opening Time</label>
                                  <input className="form-control input-md" id="openingtime" name="openingtime" type="text" placeholder="YYYY-MM-DD HH:MM:SS" />
                                </div>
                                <div className="form-group mb-3">
                                  <label className="control-label">Closing Time</label>
                                  <input className="form-control input-md" id="closingTime" name="closingTime" type="text" placeholder="YYYY-MM-DD HH:MM:SS" />
                                </div>
                                <button className="btn btn-common" type="submit">Submit</button>
                              </form>
                            </div>
                          </div>
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
