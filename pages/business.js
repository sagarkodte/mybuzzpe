import React from 'react';
import Layout from '../Components/dashBoardLayout'
import axios from 'axios';
import Config from '../config';
import { toast } from 'react-toastify'
import Link from 'next/link';

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businessDetails: '',
            services:''
        };
    }

    componentDidMount = () => {
        this.businessDetails();
        console.log('loginSuccess :', this.props.url.query.path);
    }

    businessDetails = () => {
        if (this.props.url.query.path !== '') {
            var data = {
                "businessId": this.props.url.query.path,
                "comment": "Hello test",
                "rating": 3
            }
            axios.post(Config.url + '/api/business/singlelist', data, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {

                console.log('categories of 2 :', res.data.data);

                this.setState({ businessDetails: res.data.data },function(){
                    this.setState({services:this.state.businessDetails.businessTags.toString()})
                });


            }).catch(error => {
                // return error;

            });
        }
    }

    render() {
        console.log('this.state.businessDetails :', this.state.businessDetails);
        return (<Layout>
            <div className="container">
                <div className="product-info row">
                    <div className="col-lg-8 col-md-12 col-xs-12">
                        <div className="details-box">
                            <div className="ads-details-info row">
                                <div className="col-lg-2 col-md-2 col-xs-12">
                                    <img src={this.state.businessDetails.businessLogo} />
                                </div>
                                <div className="col-lg-10 col-md-10 col-xs-12">
                                    <h2>{this.state.businessDetails.businessName}</h2>
                                    <p>
                                        {this.state.businessDetails.businessDescription}
                                    </p>
                                    <p>{this.state.businessDetails.addressArea}, {this.state.businessDetails.addressLine1} {this.state.businessDetails.addressLine2}, {this.state.businessDetails.addressCity}, {this.state.businessDetails.addressState}, {this.state.businessDetails.addressPincode}</p>
                                    <p>{this.state.businessDetails.businessContactNumbers}</p>
                                    <p>{this.state.services}</p>
                                </div>
                            </div>
                            <div className="tag-bottom">
                                <div className="float-right">
                                    <div className="share">
                                        <div className="social-link">
                                            <a className="facebook" data-toggle="tooltip" data-placement="top" title="facebook" href="#"><i className="lni-facebook-filled" /></a>
                                            <a className="twitter" data-toggle="tooltip" data-placement="top" title="twitter" href="#"><i className="lni-twitter-filled" /></a>
                                            <a className="linkedin" data-toggle="tooltip" data-placement="top" title="linkedin" href="#"><i className="lni-linkedin-fill" /></a>
                                            <a className="google" data-toggle="tooltip" data-placement="top" title="google plus" href="#"><i className="lni-google-plus" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-12 mt-5">
                        <aside className="details-sidebar">
                            <div className="widget">
                                <div className="agent-inner">
                                    <button className="btn btn-common fullwidth ">Send Enquiry</button>
                                    <hr></hr>
                                    {/* <p style={{ color: '#333', fontSize: '15px' }}><b>Hours of Operation</b> (View All)</p> */}
                                    <p style={{ color: '#333', fontSize: '15px' }}><b>Hours of Operation</b></p>
                                    <p>Today 9.00am - 11.30pm</p>
                                    <p>{this.state.businessDetails.workingMonday ? 'Monday' + ' ' + this.state.businessDetails.workingMonday.from + '' + ' am ' + ' - ' + this.state.businessDetails.workingMonday.to + '' + ' pm ' : 'Closed'}</p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p></p>
                                    <p>Status : Open</p>
                                    <div className="mt-2">
                                        <p style={{ color: '#333', fontSize: '15px' }}><b>Also Listed in</b></p>
                                        <p>Chemist</p>
                                        <p>Ayurvedic Medicine Shops</p>
                                        <p>Chemist Home Delivery</p>
                                    </div>
                                    <div className="mt-2">
                                        <p style={{ color: '#333', fontSize: '15px' }}><b>Modes of Payment</b></p>
                                        <p>Cash</p>
                                        <p>Credit Card</p>
                                    </div>
                                    <div className="mt-2">
                                        <p style={{ color: '#333', fontSize: '15px' }}><b>Year Established</b></p>
                                        <p>2019</p>
                                    </div>

                                </div>
                            </div>
                            <div className="widget">
                                <h4 className="widget-title">More Ads From Seller</h4>
                                <div className="container" style={{ marginTop: '10px' }}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="thumbnail">
                                                <a href="https://www.w3schools.com/w3images/lights.jpg">
                                                    <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Lights" style={{ width: '100%' }} />

                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="thumbnail">
                                                <a href="https://www.w3schools.com/w3images/lights.jpg">
                                                    <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Nature" style={{ width: '100%' }} />

                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="thumbnail">
                                                <a href="/w3images/fjords.jpg">
                                                    <img src="https://www.w3schools.com/w3images/lights.jpg" alt="Fjords" style={{ width: '100%' }} />

                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </Layout>);
    }
}