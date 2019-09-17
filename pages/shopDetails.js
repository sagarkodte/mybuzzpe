import React from 'react';
import Layout from '../Components/twoColumnLayout'
import axios from 'axios';
import Config from '../config';
import register from '../pages/register.js';
import login from '../pages/login.js'
import Link from 'next/link'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businessList: '',
            token:''

        };
    }

    componentDidMount() {
        if (localStorage.getItem('token') !== null) {
            console.log('Data Available');
            this.setState({ token: localStorage.getItem('token') }, function() {
                console.log(this.state.token)
                this.businessDetails();
            });
        }

    }

    businessDetails = () => {
        axios.post(Config.url + '/api/business/mylist', {}, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.state.token
            }
        }).then(res => {
            console.log('res business :', res);
            let businessList = res.data.data.map((value, key) => {
                return (
                    <tr key={key}>
                        <td>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="adone" />
                                <label className="custom-control-label" ></label>
                            </div>
                        </td>
                        <td>
                            <img src={value.businessLogo}></img>
                        </td>
                        <td>{value.businessName}<br />{value.addressLine1}<br />{value.addressLine2}<br />{value.addressPincode}</td>
                        <td>{value.businessContactNumbers ? value.businessContactNumbers : 'No Data'}</td>
                        <td>{value.gstNumber ? value.gstNumber : 'No Data'}</td>
                        <td>
                            {value.addressPincode}
                        </td>
                    </tr>
                );
            });
            this.setState({ businessList: businessList });
        }).catch(error => {
            return error;
        });
    }

    render() {
        return (<Layout>
            <div className="page-content">
                <div className="inner-box">
                    <div className="dashboard-box d-sm-flex align-items-center justify-content-between ">
                        <h2 className="dashbord-title">Shop Details</h2>
                        <Link href="/addBusiness"><a className="d-none d-sm-inline-block btn btn-sm btn-common shadow-sm"><i className="lni-plus" /> Add new business</a></Link>
                    </div>
                    <div className="dashboard-wrapper" id="shopDetails">
                        <table className="table table-responsive dashboardtable tablemyads">
                            <thead>
                                <tr>
                                    <th>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="checkedall" />
                                            <label className="custom-control-label" htmlFor="checkedall" />
                                        </div>
                                    </th>
                                    <th>Business Logo</th>
                                    <th>Business Details</th>
                                    <th>Contact details</th>
                                    <th>GSTIN</th>
                                    <th>Pincode</th>
                                    {/* <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Opening Time</th>
                        <th>Closing Time</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.businessList}
                                {/* <tr>
                                    <td>
                                       <div class="custom-control custom-checkbox">
                                          <input type="checkbox" class="custom-control-input" id="adone" />
                                          <label class="custom-control-label" for="adone"></label>
                                       </div>
                                    </td>
                                    <td>
                                       Dr.B.R.Ambekar Road, Next to Voltassagar, Lal Baug, Chinchpokli, Mumbai, Maharashtra 400033
                                    </td>
                                    <td>455</td>
                                    <td>Mumbai</td>
                                    <td>yes</td>
                                    <td data-title="Action">
                                       <div class="btns-actions">
                                          <a class="btn-action btn-view"  data-toggle="modal" href="#view-crud"><i class="lni-eye"></i></a>
                                          <a class="btn-action btn-edit"  data-toggle="modal" href="#edit-crud" ><i class="lni-pencil"></i></a>
                                          <a class="btn-action btn-delete" href="#"><i class="lni-trash"></i></a>
                                       </div>
                                    </td>
                                 </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>);
    }
}
