
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
                <div className="dashboard-box d-sm-flex align-items-center justify-content-between ">
                  <h2 className="dashbord-title">My Wallet</h2>
                  <div className="convert-cur pull-right d-none d-sm-inline-block ">
                    <div className="tg-select form-control">
                      {/* <select id="selectCurrency">
                              <option value="none">USD</option>
                              <option value="none">INR</option>

                           </select> */}
                      <select id="selectid">
                      </select>
                    </div>
                  </div>
                </div>
                <div className="dashboard-wrapper my-wallet">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-sx-12">
                      <div className="row text-center" id="depositAmount">
                        {/* <div class="col-lg-12">
                                 <div class="deposit-amount">0.00019856898 <small>INR</small></div>
                              </div>
                              <div class="col-lg-12">
                                 <h6 class="mt-3">Total EST</h6>
                              </div> */}
                      </div>
                      <div className="col-xs-12 mt-1">
                        <nav>
                          <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active show" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Deposit
                            </a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Withdrawal</a>
                          </div>
                        </nav>
                        <div className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                          <div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            {/* <div class="text-center deposit-wallet">
                                       <div class="qrcode mt-1"><img src="assets/img/qrcode.png" class="img-fluid"
                                             width=""></div>
                                       <div class="col-md-12 mt-3">
                                          <div class="deposit-amount">0.00019856898</div>
                                       </div>
                                    </div> */}
                            <div className="text-center deposit-wallet" id="depositWallet" />
                          </div>
                          <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <form id="withdrawalForm" noValidate="novalidate">
                              <div className="text-center deposit-wallet">
                                <div className="form-group mb-3">
                                  <input className="form-control input-md" name="mobileNOEtherAddress" placeholder="MobileNumber/EtherAddress" type="text" />
                                </div>
                                <div className="form-group mb-3">
                                  <input className="form-control input-md" name="amountWithdraw" placeholder="Amount" type="text" />
                                </div>
                                {/* <div class="form-group mb-3">
                                             <p>
                                                <label><input type="radio" name="payment_method" value="EST">EST</label>
                                                <label><input type="radio" name="payment_method" value="INR">INR</label>
                                             </p>
                                          </div> */}
                                <button className="btn btn-common" type="submit" id="transferAmount">Submit</button>
                                {/* Modal */}
                                <div className="modal fade" id="myModal" role="dialog" />
                                {/* Model Close */}
                                <div className="col-xl-12" id="successAlert" />
                              </div>
                            </form>
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
