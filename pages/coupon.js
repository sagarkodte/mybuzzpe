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
                  <h2 className="dashbord-title">Coupon </h2>
                  <div className="convert-cur pull-right">
                    <div className="post-btn">
                      <a className="btn btn-common" data-toggle="modal" href="#create-crud"><i className="lni-plus" /> Create</a>
                    </div>
                  </div>
                </div>
                <div className="dashboard-wrapper">
                  <table className="table table-responsive dashboardtable tablemyads">
                    <thead>
                      <tr>
                        <th>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="checkedall" />
                            <label className="custom-control-label" htmlFor="checkedall" />
                          </div>
                        </th>
                        <th>Coupon Code</th>
                        <th>Discount</th>
                        <th>Percentage</th>
                        <th>No.of coupon</th>
                        <th>Total redemption</th>
                        <th>Status </th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="adone" />
                            <label className="custom-control-label" htmlFor="adone" />
                          </div>
                        </td>
                        <td>
                          BUZ 41323
                        </td>
                        <td>456</td>
                        <td>15%</td>
                        <td>5</td>
                        <td>59</td>
                        <td>NO</td>
                        <td data-title="Action">
                          <div className="btns-actions">
                            <a className="btn-action btn-view" data-toggle="modal" href="#view-crud"><i className="lni-eye" /></a>
                            <a className="btn-action btn-edit" data-toggle="modal" href="#edit-crud"><i className="lni-pencil" /></a>
                            <a className="btn-action btn-delete" href="#"><i className="lni-trash" /></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="adone" />
                            <label className="custom-control-label" htmlFor="adone" />
                          </div>
                        </td>
                        <td>
                          BUZ 41323
                        </td>
                        <td>456</td>
                        <td>15%</td>
                        <td>5</td>
                        <td>59</td>
                        <td>NO</td>
                        <td data-title="Action">
                          <div className="btns-actions">
                            <a className="btn-action btn-view" data-toggle="modal" href="#view-crud"><i className="lni-eye" /></a>
                            <a className="btn-action btn-edit" data-toggle="modal" href="#edit-crud"><i className="lni-pencil" /></a>
                            <a className="btn-action btn-delete" href="#"><i className="lni-trash" /></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="adone" />
                            <label className="custom-control-label" htmlFor="adone" />
                          </div>
                        </td>
                        <td>
                          BUZ 41323
                        </td>
                        <td>456</td>
                        <td>15%</td>
                        <td>5</td>
                        <td>59</td>
                        <td>NO</td>
                        <td data-title="Action">
                          <div className="btns-actions">
                            <a className="btn-action btn-view" data-toggle="modal" href="#view-crud"><i className="lni-eye" /></a>
                            <a className="btn-action btn-edit" data-toggle="modal" href="#edit-crud"><i className="lni-pencil" /></a>
                            <a className="btn-action btn-delete" href="#"><i className="lni-trash" /></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="adone" />
                            <label className="custom-control-label" htmlFor="adone" />
                          </div>
                        </td>
                        <td>
                          BUZ 41323
                        </td>
                        <td>456</td>
                        <td>15%</td>
                        <td>5</td>
                        <td>59</td>
                        <td>NO</td>
                        <td data-title="Action">
                          <div className="btns-actions">
                            <a className="btn-action btn-view" data-toggle="modal" href="#view-crud"><i className="lni-eye" /></a>
                            <a className="btn-action btn-edit" data-toggle="modal" href="#edit-crud"><i className="lni-pencil" /></a>
                            <a className="btn-action btn-delete" href="#"><i className="lni-trash" /></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="adone" />
                            <label className="custom-control-label" htmlFor="adone" />
                          </div>
                        </td>
                        <td>
                          BUZ 41323
                        </td>
                        <td>456</td>
                        <td>15%</td>
                        <td>5</td>
                        <td>59</td>
                        <td>NO</td>
                        <td data-title="Action">
                          <div className="btns-actions">
                            <a className="btn-action btn-view" data-toggle="modal" href="#view-crud"><i className="lni-eye" /></a>
                            <a className="btn-action btn-edit" data-toggle="modal" href="#edit-crud"><i className="lni-pencil" /></a>
                            <a className="btn-action btn-delete" href="#"><i className="lni-trash" /></a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="adone" />
                            <label className="custom-control-label" htmlFor="adone" />
                          </div>
                        </td>
                        <td>
                          BUZ 41323
                        </td>
                        <td>456</td>
                        <td>15%</td>
                        <td>5</td>
                        <td>59</td>
                        <td>NO</td>
                        <td data-title="Action">
                          <div className="btns-actions">
                            <a className="btn-action btn-view" data-toggle="modal" href="#view-crud"><i className="lni-eye" /></a>
                            <a className="btn-action btn-edit" data-toggle="modal" href="#edit-crud"><i className="lni-pencil" /></a>
                            <a className="btn-action btn-delete" href="#"><i className="lni-trash" /></a>
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
