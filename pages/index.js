import React from 'react';
import Layout from '../Components/dashBoardLayout'
import axios from 'axios';
import serverUrl from '../config';
import { toast } from 'react-toastify'
import Link from 'next/link';
import Categories from '../Components/Categories'


export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state={
     categories:''
    };
  }

  componentDidMount(){
    console.log('loginSuccess :',this.props.loginSuccess);
    if(this.state.loginSuccess!=='undefined'){
        toast.success("Success Notification !", {
          position: toast.POSITION.TOP_RIGHT
        });
    }
  }

  render() {
   // console.log('this.state.categories :',this.state.categories);
   
    return (
    
    <Layout>  
      <div id="hero-area">
        <div className="overlay" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-9 col-xs-12 text-center">
              <div className="contents">
                <h1 className="head-title">Welcome to The Global  <span className="year buzc">Marketplace</span></h1>
                <p>BuzCafe is an online peer 2 peer platform to find local and nearby retail services at your doorstep and Recharge, Billing &amp; Booking Services. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="categories">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="categories-wrapper categories-wrapper02">
                <div className="inner-box02">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="contact-tab" data-toggle="tab" href="#recharge" role="tab" aria-controls="contact" aria-selected="false"> <i className="fa fa-mobile" /> Recharge</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="contact-tab" data-toggle="tab" href="#Utility" role="tab" aria-controls="contact" aria-selected="false"> <i className="fa fa-lightbulb" /> Utility
                        Bill</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="home-tab" data-toggle="tab" href="#flight" role="tab" aria-controls="home" aria-selected="true"> <i className="fa fa-plane" /> Flights</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="profile-tab" data-toggle="tab" href="#hotel" role="tab" aria-controls="profile" aria-selected="false"> <i className="fa fa-hotel" /> Hotels</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="contact-tab" data-toggle="tab" href="#buses" role="tab" aria-controls="contact" aria-selected="false"> <i className="fa fa-bus" /> Buses</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="recharge" role="tabpanel" aria-labelledby="home-tab">
                      <div className="dashboard-wrapper mobile-recharge margbott0 ">
                        <div className="dashboard-wrapper mobile-recharge margbott0">
                          <div className="form-group mb-3">
                            <div className="tg-selectgroup">
                              <div className="main-rbuton">
                                <input type="radio" id="mobile" name="radio-group" defaultChecked />
                                <label htmlFor="mobile">Mobile</label>
                                <input type="radio" id="dth" name="radio-group" />
                                <label htmlFor="dth">DTH</label>
                                <input type="radio" id="dcard" name="radio-group" />
                                <label htmlFor="dcard">Data Card</label>
                                <input type="radio" id="pmobile" name="radio-group" />
                                <label htmlFor="pmobile">Postpaid Mobile</label>
                              </div>
                            </div>
                          </div>
                          <form>
                            <div className="form-row align-items-center">
                              <div className="form-group col-sm-3 my-1">
                                <input type="number" className="form-control input-md" placeholder="Mobile No" />
                              </div>
                              <div className="form-group col-sm-3 my-1">
                                <select className="form-control">
                                  <option value={1}>One</option>
                                  <option value={2}>Two</option>
                                  <option value={3}>Three</option>
                                </select>
                              </div>
                              <div className="form-group col-sm-3 my-1">
                                <input type="number" className="form-control" placeholder="Amount" />
                              </div>
                              <div className="form-group col-sm-3  my-1">
                                <button type="submit" className="btn btn-common">Recharge Now</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="Utility" role="tabpanel" aria-labelledby="contact-tab">
                      <div className="dashboard-wrapper mobile-recharge margbott0 ">
                        <div className="form-group mb-3">
                          <div className="tg-selectgroup">
                            <div className="main-rbuton">
                              <input type="radio" id="Electricity" name="radio-group" defaultChecked />
                              <label htmlFor="Electricity">Electricity </label>
                              <input type="radio" id="Gas" name="radio-group" />
                              <label htmlFor="Gas">Gas</label>
                              <input type="radio" id="Water" name="radio-group" />
                              <label htmlFor="Water">Water</label>
                            </div>
                          </div>
                        </div>
                        <form>
                          <ul className="bills clearfix">
                            <li><a href="#" className="active"><i className="fa fa-check" /> Electricity Boards</a>
                            </li>
                            <li><a href="#"> <i className="fa fa-check" /> Apartments</a></li>
                          </ul>
                          <div className="form-row align-items-center">
                            <div className="form-group col-sm-3 my-1">
                              <select className="form-control">
                                
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                            <div className="form-group col-sm-3 my-1">
                              <select className="form-control">
                                
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                            <div className="form-group col-sm-2 my-1">
                              <input type="number" className="form-control input-md" placeholder="Consumer Number" />
                            </div>
                            <div className="form-group col-sm-2 my-1">
                              <select className="form-control">
                                
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                            <div className="form-group col-sm-2  my-1">
                              <button type="submit" className="btn btn-common">Recharge Now</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="flight" role="tabpanel" aria-labelledby="profile-tab">
                      <div className="dashboard-wrapper mobile-recharge margbott0 ">
                        <div className="form-group mb-3">
                          <div className="tg-selectgroup">
                            <div className="main-rbuton">
                              <input type="radio" id="domestic" name="radio-group" defaultChecked />
                              <label htmlFor="domestic">Domestic</label>
                              <input type="radio" id="international" name="radio-group" />
                              <label htmlFor="international">International</label>
                              <input type="radio" id="Way" name="radio-group" />
                              <label htmlFor="Way">One Way</label>
                              <input type="radio" id="rtrip" name="radio-group" />
                              <label htmlFor="rtrip">Round Trip</label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <form>
                        <div className="form-row align-items-center">
                          <div className="form-group col-sm-2 my-1">
                            <input type="number" className="form-control input-md" placeholder="From" />
                          </div>
                          <div className="form-group col-sm-2 my-1">
                            <input type="number" className="form-control input-md" placeholder="To" />
                          </div>
                          <div className="form-group col-sm-2 my-1">
                            <input type="number" className="form-control" id="datepicker" placeholder="28-05-2019" />
                          </div>
                          <div className="form-group col-sm-2 my-1">
                            <input type="number" className="form-control" id="datepicker02" placeholder="Return date" />
                          </div>
                          <div className="form-group col-sm-2 my-1">
                            <input type="number" className="form-control economy" placeholder="1 Traveller, Economy" />
                            <div className="ecnomy-open">
                              <div className="form-group">
                                <select className="form-control">
                                  
                                  <option value={1}>Premium Economy</option>
                                  <option value={2}>Business</option>
                                  <option value={3}>First Class</option>
                                </select>
                              </div>
                              <div className="form-group flot01">
                                <label>Adults</label>
                                <select className="form-control">
                                  
                                  <option value={1}>2</option>
                                  <option value={2}>3</option>
                                  <option value={3}>4</option>
                                </select>
                              </div>
                              <div className="form-group flot01">
                                <label>Children</label>
                                <select className="form-control">
                                  
                                  <option value={1}>2</option>
                                  <option value={2}>3</option>
                                  <option value={3}>4</option>
                                </select>
                              </div>
                              <div className="form-group flot01">
                                <label>Infants</label>
                                <select className="form-control">
                                  
                                  <option value={1}>2</option>
                                  <option value={2}>3</option>
                                  <option value={3}>4</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-group col-sm-2  my-1">
                            <button type="submit" className="btn btn-common">Recharge Now</button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="tab-pane fade" id="hotel" role="tabpanel" aria-labelledby="contact-tab">
                      <div className="dashboard-wrapper mobile-recharge margbott0">
                        <div className="form-group mb-3">
                          <div className="tg-selectgroup">
                            <div className="main-rbuton">
                              <input type="radio" id="hdomestic" name="radio-group" defaultChecked />
                              <label htmlFor="hdomestic">Domestic</label>
                              <input type="radio" id="hinternational" name="radio-group" />
                              <label htmlFor="hinternational">International</label>
                            </div>
                          </div>
                        </div>
                        <form>
                          <div className="form-row align-items-center">
                            <div className="form-group col-sm-2 my-1">
                              <input type="text" className="form-control input-md" placeholder="Enter City" />
                            </div>
                            <div className="form-group col-sm-2 my-1">
                              <select className="form-control">
                                
                                <option value={1}>One</option>
                                <option value={2}>Two</option>
                                <option value={3}>Three</option>
                              </select>
                            </div>
                            <div className="form-group col-sm-2 my-1">
                              <input type="text" className="form-control" id="busdate" placeholder="29-05-2019" />
                            </div>
                            <div className="form-group col-sm-2 my-1">
                              <input type="text" className="form-control" id="busdate02" placeholder="Check Out" />
                            </div>
                            <div className="form-group col-sm-2 my-1">
                              <input type="text" className="form-control economy" id="hotlb" placeholder="2 People in 1 Room" />
                              <div className="ecnomy-open">
                                <div className="form-group">
                                  <select className="form-control">
                                    
                                    <option value={1}>2</option>
                                    <option value={2}>3</option>
                                    <option value={3}>4</option>
                                  </select>
                                </div>
                                <div className="form-group flot01">
                                  <label>Adults</label>
                                  <select className="form-control">
                                    
                                    <option value={1}>2</option>
                                    <option value={2}>3</option>
                                    <option value={3}>4</option>
                                  </select>
                                </div>
                                <div className="form-group flot01">
                                  <label>Children</label>
                                  <select className="form-control">
                                    
                                    <option value={1}>2</option>
                                    <option value={2}>3</option>
                                    <option value={3}>4</option>
                                  </select>
                                </div>
                                <div className="form-group flot01">
                                  <label>Infants</label>
                                  <select className="form-control">
                                    
                                    <option value={1}>2</option>
                                    <option value={2}>3</option>
                                    <option value={3}>4</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form-group col-sm-2 my-1">
                              <button type="submit" className="btn btn-common">Recharge Now</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="buses" role="tabpanel" aria-labelledby="contact-tab">
                      <div className="dashboard-wrapper mobile-recharge margbott0">
                        <div className="form-group mb-3">
                          <div className="tg-selectgroup">
                            <div className="main-rbuton">
                              <input type="radio" id="oneway" name="radio-group" defaultChecked />
                              <label htmlFor="oneway">One Way</label>
                              <input type="radio" id="rtrip01" name="radio-group" />
                              <label htmlFor="rtrip01">Round Trip</label>
                            </div>
                          </div>
                        </div>
                        <form>
                          <div className="form-row align-items-center">
                            <div className="form-group col-sm-3 my-1">
                              <input type="text" className="form-control input-md" placeholder="From" />
                            </div>
                            <div className="form-group col-sm-3 my-1">
                              <input type="text" className="form-control input-md" placeholder="To" />
                            </div>
                            <div className="form-group col-sm-2 my-1">
                              <input type="text" className="form-control" id="busdate" placeholder="29-05-2019" />
                            </div>
                            <div className="form-group col-sm-2 my-1">
                              <input type="text" className="form-control" id="busdate02" placeholder="Return Date" />
                            </div>
                            <div className="form-group col-sm-2  my-1">
                              <button type="submit" className="btn btn-common">Recharge Now</button>
                            </div>
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
      </section>
      
      <section className="mt-3 mb-5">
        <div className="container">
          <div className="inner-box">
            <div className="dashboard-wrapper mobile-recharge">
              <h2 className="intro-title mb-2">Book on Buzcafe</h2>
                <div>
                  <Categories/>
                </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="about" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-xs-12">
              <div className="about-wrapper">
                <h2 className="intro-title">BuzCafe Offerings</h2>
                <p className="intro-desc">Over the last decade, there has been tremendous shift in financial transactions and
                  payment ecosystem across the globe. BuzCafe is offering convenience and ease of use in peer to peer
                  transactions. BuzCafe offers cashless recharges, money transfers and payments convenient by peer to
                  peer transfers through Web and Mobile application. BuzCafe is known for its exceptional money transfer
                  service. Making any online money transfer easy and quick, BuzCafe comes with multiple features. </p>
                <a href="/about" className="btn btn-common btn-lg">Read More</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xs-12">
              <img className="img-fluid" src="http://3.17.162.108:8200/assets/img/welcome.png" />
            </div>
          </div>
        </div>
      </section>
      <section className="works section-padding bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-title">How It Works?</h3>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="works-item">
                <img src="http://3.17.162.108:8200/assets/img/about/how-step-first.png" className="img-fluid" />
                <p>Explore</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="works-item">
                <img src="http://3.17.162.108:8200/assets/img/about/how-step-second.png" className="img-fluid" />
                <p>Buy </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="works-item">
                <img src="http://3.17.162.108:8200/assets/img/about/how-step-third.png" className="img-fluid" />
                <p> Enjoy</p>
              </div>
            </div>
            <hr className="works-line" />
          </div>
        </div>
      </section>
      <section className="services section-padding ">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="section-title">Key Features</h3>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight animated" data-wow-delay="0.2s" style={{visibility: 'visible', WebkitAnimationDelay: '0.2s', MozAnimationDelay: '0.2s', animationDelay: '0.2s'}}>
                <div className="icon">
                  <i className="fa fa-rocket" aria-hidden="true" />
                </div>
                <div className="services-content">
                  <h3><a href="JavaScript:Void(0);">Modern eCash transfer app</a></h3>
                  <p>Buzcafe is a point of convenience for eCash transfers between users and merchants </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight animated" data-wow-delay="0.4s" style={{visibility: 'visible', WebkitAnimationDelay: '0.4s', MozAnimationDelay: '0.4s', animationDelay: '0.4s'}}>
                <div className="icon">
                  <i className="fa fa-wallet" aria-hidden="true" />
                </div>
                <div className="services-content">
                  <h3><a href="JavaScript:Void(0);">eCash Transfer online</a></h3>
                  <p>Users can transfer eCash through app and save time and efforts</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight animated" data-wow-delay="0.6s" style={{visibility: 'visible', WebkitAnimationDelay: '0.6s', MozAnimationDelay: '0.6s', animationDelay: '0.6s'}}>
                <div className="icon">
                  <i className="fa fa-qrcode" aria-hidden="true" />
                </div>
                <div className="services-content">
                  <h3><a href="JavaScript:Void(0);"> Scan and Pay</a></h3>
                  <p>User can scan and pay to other users and merchants</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight animated" data-wow-delay="0.8s" style={{visibility: 'visible', WebkitAnimationDelay: '0.8s', MozAnimationDelay: '0.8s', animationDelay: '0.8s'}}>
                <div className="icon">
                  <i className="fa fa-file" aria-hidden="true" />
                </div>
                <div className="services-content">
                  <h3><a href="JavaScript:Void(0);">Track and manage expenses</a></h3>
                  <p>Users can have record of there daily and monthly expenses over app</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight animated" data-wow-delay="1s" style={{visibility: 'visible', WebkitAnimationDelay: '1s', MozAnimationDelay: '1s', animationDelay: '1s'}}>
                <div className="icon">
                  <i className="fa fa-mobile" aria-hidden="true" />
                </div>
                <div className="services-content">
                  <h3><a href="JavaScript:Void(0);">Pay postpaid bills</a></h3>
                  <p>Users have convenience to pay bills like phone, electrcity bills etc.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xs-12">
              <div className="services-item wow fadeInRight animated" data-wow-delay="1.2s" style={{visibility: 'visible', WebkitAnimationDelay: '1.2s', MozAnimationDelay: '1.2s', animationDelay: '1.2s'}}>
                <div className="icon">
                  <i className="fa fa-credit-card" aria-hidden="true" />
                </div>
                <div className="services-content">
                  <h3><a href="JavaScript:Void(0);">Pay through UPI applications</a></h3>
                  <p>The users can use integrated UPI applications to make payments </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="counter-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 work-counter-widget">
              <div className="counter">
                <div className="icon"><i className="lni-users" /></div>
                <h2 className="counterUp">500</h2>
                <p>Users</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 work-counter-widget">
              <div className="counter">
                <div className="icon"><i className="lni-briefcase" /></div>
                <h2 className="counterUp">200</h2>
                <p>Business Listing</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 work-counter-widget">
              <div className="counter">
                <div className="icon"><i className="lni-gift" /></div>
                <h2 className="counterUp">50</h2>
                <p>Offers</p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 work-counter-widget">
              <div className="counter">
                <div className="icon"><i className="lni-map" /></div>
                <h2 className="counterUp">320</h2>
                <p>Buzcafe </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </Layout>);
  }
}

// export default Home;