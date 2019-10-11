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
            projectList: '',
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
        axios.post(Config.url + '/api/project/list', {}, {
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': this.state.token
            }
        }).then(res => {
            console.log('res business :', res);
            let projectList = res.data.data.map((value, key) => {
                return (
                    <tr key={key}>
                        <td>
                            {value.description}
                        </td>
                        <td>{value.budget}</td>
                        <td>{value.budgetType}</td>
                        <td>{value.note}</td>
                        <td>
                            {value.addressPincode}
                        </td>
                    </tr>
                );
            });
            this.setState({ projectList: projectList });
        }).catch(error => {
            return error;
        });
    }

    render() {
        return (<Layout>
            <div className="page-content">
                <div className="inner-box">
                    <div className="dashboard-box d-sm-flex align-items-center justify-content-between ">
                        <h2 className="dashbord-title">Project Details</h2>
                        <Link href="/addProject"><a className="d-none d-sm-inline-block btn btn-sm btn-common shadow-sm"><i className="lni-plus" /> Add new project</a></Link>
                    </div>s
                    <div className="dashboard-wrapper" id="business-list">
                        <table className="projectList_table">
                            <thead>
                                <tr>
                                    <th>Project Description</th>
                                    <th>Budget</th>
                                    <th>Budget Type</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>{this.state.projectList}
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
