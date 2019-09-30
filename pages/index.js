import React from 'react';
import Layout from '../Components/dashBoardLayout'
import axios from 'axios';
import serverUrl from '../config';
import { toast } from 'react-toastify'
import Link from 'next/link';
import Router from 'next/router'
import Categories from '../Components/Categories'


export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: ''
        };
            this.getSearchvalue = this.getSearchvalue.bind(this)
    }

    componentDidMount() {
        console.log('loginSuccess :', this.props.loginSuccess);
        if (this.state.loginSuccess !== 'undefined') {
            toast.success("Success Notification !", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

        getSearchvalue = (event) => {
        this.setState({ Searchvalue: event.target.value }, function() {
            console.log(this.state.Searchvalue)
        })
    }

    searchResult = () => {

        Router.push({
            pathname: '/search',
            search: '?path=' + this.state.Searchvalue,
            //state: { detail: path }
        });

        // axios.post(serverUrl.url + '/api/business/search', {
        //     query: this.state.Searchvalue
        // })
        //     .then((response) => {
        //         this.setState({ allResult: response.data.data })
        //         console.log(this.state.allResult)
        //     })
        //     .catch((error) => {
        //         //console.log(error);
        //     });
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
                                    <p>Buzzpe is an online peer 2 peer platform to find local and nearby retail services at your doorstep and Recharge, Billing &amp; Booking Services. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section id="search">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 text-center col-md-6 col-xs-12">
                                <form>
                                 <div className="row">
                                 <div className="col-lg-10 col-md-10 col-xs-12">
                                    <input onChange={this.getSearchvalue} className="form-control" type="text" placeholder="Search" />
                                 </div>
                                  <div className="col-lg-2 col-md-2 col-xs-12">
                                    <button onClick={this.searchResult} className="btn btn-success my-2 my-sm-0" type="button">Search</button>

                                  </div>
                                  </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-3 mb-5">
                    <div className="container">
                        <div className="inner-box">
                            <div className="dashboard-wrapper mobile-recharge">
                                <div>
                                    <Categories />
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
                                    <h2 className="intro-title">Buzzpe Offerings</h2>
                                    <p className="intro-desc">Over the last decade, there has been tremendous shift in financial transactions and
                                      payment ecosystem across the globe. Buzzpe is offering convenience and ease of use in peer to peer
                                      transactions. Buzzpe offers cashless recharges, money transfers and payments convenient by peer to
                                      peer transfers through Web and Mobile application. Buzzpe is known for its exceptional money transfer
                  service. Making any online money transfer easy and quick, Buzzpe comes with multiple features. </p>
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
                                <div className="services-item wow fadeInRight animated" data-wow-delay="0.2s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.2s', MozAnimationDelay: '0.2s', animationDelay: '0.2s' }}>
                                    <div className="icon">
                                        <i className="fa fa-rocket" aria-hidden="true" />
                                    </div>
                                    <div className="services-content">
                                        <h3><a href="JavaScript:Void(0);">Modern eCash transfer app</a></h3>
                                        <p>Buzzpe is a point of convenience for eCash transfers between users and merchants </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xs-12">
                                <div className="services-item wow fadeInRight animated" data-wow-delay="0.4s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.4s', MozAnimationDelay: '0.4s', animationDelay: '0.4s' }}>
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
                                <div className="services-item wow fadeInRight animated" data-wow-delay="0.6s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.6s', MozAnimationDelay: '0.6s', animationDelay: '0.6s' }}>
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
                                <div className="services-item wow fadeInRight animated" data-wow-delay="0.8s" style={{ visibility: 'visible', WebkitAnimationDelay: '0.8s', MozAnimationDelay: '0.8s', animationDelay: '0.8s' }}>
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
                                <div className="services-item wow fadeInRight animated" data-wow-delay="1s" style={{ visibility: 'visible', WebkitAnimationDelay: '1s', MozAnimationDelay: '1s', animationDelay: '1s' }}>
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
                                <div className="services-item wow fadeInRight animated" data-wow-delay="1.2s" style={{ visibility: 'visible', WebkitAnimationDelay: '1.2s', MozAnimationDelay: '1.2s', animationDelay: '1.2s' }}>
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
                                    <p>Buzzpe </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>);
    }
}

// export default Home;