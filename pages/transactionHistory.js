
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
                  <h2 className="dashbord-title">Transaction history </h2>
                  <a href="#" className="d-none d-sm-inline-block btn btn-sm  btn-common shadow-sm"><i className="lni-book" /> Export</a>
                </div>
                <div className="dashboard-wrapper" id="transactionHistory">
                  <table className="table table-responsive dashboardtable tablemyads">
                    <thead>
                      <tr>
                        <th>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="checkedall" />
                            <label className="custom-control-label" htmlFor="checkedall" />
                          </div>
                        </th>
                        <th>TransactionId</th>
                        <th>CreatedAt</th>
                        <th>Balance</th>
                        <th>Fund Transfer Amount</th>
                        <th>New Balance </th>
                        <th>OrderId</th>
                        <th>Stutus</th>
                        <th>Type</th>
                        <th>UpdatedAt</th>
                        <th width="10%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                          <div className="custom-control custom-checkbox">
                              <input type="checkbox" class="custom-control-input" id="adone" />
                              <label className="custom-control-label" for="adone"></label>
                          </div>
                        </td>
                        <td>transactionId</td>
                        <td>createdAt</td>
                        <td>balance</td>
                        <td>amount</td>
                        <td>newBalance</td>
                        <td>orderId</td>
                        <td>status</td>
                        <td>type</td>
                        <td>updatedAt</td>
                        <td data-title="Action">
                          <div className="btns-actions">
                              <a className="btn-action btn-delete" href="#"><i class="lni-trash"></i></a>
                          </div>
                        </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
    </Layout>);
  }
}
