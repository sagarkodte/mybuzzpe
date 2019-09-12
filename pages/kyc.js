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
                    <h2 className="dashbord-title">KYC Form</h2>
                  </div>
                  <div className="dashboard-wrapper">
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-sx-12">
                        <div className="form-group mb-3">
                          <label className="control-label">Shop Name*</label>
                          <input className="form-control input-md" name="shop_name" type="text" />
                        </div>
                        <div className="form-group mb-3">
                          <label className="control-label">Trade licenece*</label>
                          <input className="form-control input-md" name="trade_licenece" type="text" />
                        </div>
                        <div className="form-group mb-3">
                          <label className="control-label">Valid Goverment Id *</label>
                          <input className="form-control input-md" name="valid_goverment_id" type="text" />
                        </div>
                        <div className="form-group mb-3">
                          <label className="control-label">Shop Description</label>
                          <textarea className="form-control" placeholder rows={3} data-error="Write your message" required defaultValue={""} />
                        </div>
                        <div className="form-group mb-3">
                          <label className="control-label">Shop Photograph</label>
                          <label className="tg-fileuploadlabel" htmlFor="tg-photogallery">
                            <span>Drop files anywhere to upload</span>
                            <span>Or</span>
                            <span className="btn btn-common">Select Files</span>
                            <span>Maximum upload file size: 500 KB</span>
                            <input id="tg-photogallery" className="tg-fileinput" type="file" name="file" />
                          </label>
                        </div>
                        <button className="btn btn-common" type="button">Submit</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </Layout>);
  }
}
