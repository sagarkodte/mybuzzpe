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
      businessList:'',
      
    };
  }

  componentDidMount(){
   this.businessDetails();
  }

  businessDetails=()=>{
   axios.post(Config.url+'/api/business/mylist', {}, {headers: {
      'Content-Type': 'application/json',
      'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbGVzaEBncnIubGEiLCJmaXJzdG5hbWUiOiJOaWxlc2giLCJsYXN0bmFtZSI6IllhZGF2IiwiX2lkIjoiNWQxMGIxZGY4Y2I0M2EzMTQ2Yzc3OTgwIiwiaWF0IjoxNTYxMzg3NDAwLCJleHAiOjIwMjc5NDc0MDB9.IrYC4gdWDp6McEwUmhJ18CLY5vM0QNHdItAWIa9_sKA'
    }}).then(res =>{
       console.log('res business :',res);
      let  businessList =res.data.data.map((value,key)=>{
         return(  
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
               <td>{value.businessName}<br/>{value.addressLine1}<br/>{value.addressLine2}<br/>{value.addressPincode}</td>
               <td>{value.businessContactNumbers?value.businessContactNumbers:'No Data'}</td>
               <td>{value.gstNumber?value.gstNumber:'No Data'}</td>
               <td>
               {value.addressPincode} 
               </td>
            </tr>
         );
      });
     this.setState({businessList:businessList});
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
