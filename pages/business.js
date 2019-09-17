import React from 'react';
import Layout from '../Components/dashBoardLayout'
import axios from 'axios';
import Config from '../config';
import { toast } from 'react-toastify'
import Link from 'next/link';

export default class Index extends React.Component{
  constructor(props){
    super(props);
    this.state={
      businessDetails:''
    };
  }

  componentDidMount=()=>{
    this.businessDetails();
    console.log('loginSuccess :',this.props.url.query.path);
  }

  businessDetails=()=>{
    if(this.props.url.query.path!==''){
    var data={
        "businessId": this.props.url.query.path,
        "comment": "Hello test",
        "rating": 3
    }
    axios.post(Config.url+'/api/business/singlelist',data,{headers: {
        'Content-Type': 'application/json'
      }}).then(res =>{
      console.log('categories of 2 :',res.data.data);

      var businessId ={
        "businessId": "5d11ec2a9e0d020d6f3a95af"
      }

      // var product=[],service=[];
      let product='',service='';
      axios.post(Config.url+'/api/catalog/list-short',businessId,{headers: {
        'Content-Type': 'application/json'
      }}).then(res =>{
        console.log('api is called');
       console.log('businessId :',res.data.productData);
       console.log('businessId :',res.data.serviceData);
      //  product.push(res.data.productData);
      //  service.push(res.data.serviceData);
      product=res.data.productData.map((value,key)=>{
        console.log('description s :',value.description);
        //productDesc.push(value.description);
        return {
          description:value.description
        }
      });
      service=res.data.serviceData.map((value,key)=>{
        console.log('description s :',value.description);
        //serviceDesc.push(value.description);
        return{
          description:value.description
        }
      });
      }).catch(error => {
        // return error;
        //this.setState({businessDetails:'Data not found'});
      });

      console.log('pro desc :',product);

     let  businessDetails =
          <div className="product-info row">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="product-img">
                <img className="img-fluid" src="http://blog.brac.net/wp-content/uploads/2016/09/common-banner-1200x480.jpg" />
              </div>
            </div>
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div className="details-box">
                <div className="ads-details-info">
                  <h2>{res.data.data.businessName}</h2>
                  <div className="details-meta">
                    <span><a href="#"><i className="lni-alarm-clock" /> Product </a></span>
                    <span><a href="#"><i className="lni-map-marker" /> Services</a></span>
                    <span><a href="#"><i className="lni-eye" /> 299 View</a></span>
                  </div>
                  <p className="mb-4">
                    {res.data.data.businessDescription}
                  </p>
                  <h4 className="title-small mb-3">Specification:</h4>
                  <ul className="list-specification">
                    <li><i className="lni-check-mark-circle" /> 256GB PCIe flash storage</li>
                    <li><i className="lni-check-mark-circle" /> 2.7 GHz dual-core Intel Core i5</li>
                    <li><i className="lni-check-mark-circle" /> Turbo Boost up to 3.1GHz</li>
                    <li><i className="lni-check-mark-circle" /> Intel Iris Graphics 6100</li>
                    <li><i className="lni-check-mark-circle" /> 8GB memory</li>
                    <li><i className="lni-check-mark-circle" /> 10 hour battery life</li>
                    <li><i className="lni-check-mark-circle" /> 13.3" Retina Display</li>
                    <li><i className="lni-check-mark-circle" /> 1 Year international warranty</li>
                  </ul>
                  <p className="mb-4">
                    Up for sale we have a vintage Raleigh Sport Men’s Bicycle. This bike does have some general wear and surface corrosion on some of the parts but is overall in good shape. It has been checked out and does work. Brakes and gears work. Seat is fully intact. Frame and fenders are in nice shape with minimal wear. A few minor dents in the fenders but most of the paint is intact.
                 </p>
                </div>

                <div className="row">
                  <div className="col-md-12 text-center ">
                    <nav className="nav-justified ">
                      <div className="nav nav-tabs " id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="pop1-tab" data-toggle="tab" href="#pop1" role="tab" aria-controls="pop1" aria-selected="true">Product</a>
                        <a className="nav-item nav-link" id="pop2-tab" data-toggle="tab" href="#pop2" role="tab" aria-controls="pop2" aria-selected="false">Services</a>

                      </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                      <div className="tab-pane fade show active" id="pop1" role="tabpanel" aria-labelledby="pop1-tab">
                        <div className="pt-3" />
                        {/* <p>1. There's another way to do this for layouts that doesn't have to put the navbar inside the container, and which doesn't require any CSS or Bootstrap overrides.
                    Simply place a div with the Bootstrap container class around the navbar. This will center the links inside the navbar:</p> */}
                        <p>{productDesc}</p>
                      </div>
                      <div className="tab-pane fade" id="pop2" role="tabpanel" aria-labelledby="pop2-tab">
                        <div className="pt-3" />
                        {/* <p>2. There's another way to do this for layouts that doesn't have to put the navbar inside the container, and which doesn't require any CSS or Bootstrap overrides.
                          Simply place a div with the Bootstrap container class around the navbar. This will center the links inside the navbar:</p> */}
                  <p>{serviceDesc}</p>
                  </div>

                    </div>
                  </div>
                </div>

                <div className="tag-bottom">
                  <div className="float-left">
                    <ul className="advertisement">
                      <li>
                        <p><strong><i className="lni-folder" /> Categories:</strong> <a href="#">Electronics</a></p>
                      </li>
                      <li>
                        <p><strong><i className="lni-archive" /> Condition:</strong> New</p>
                      </li>
                      <li>
                        <p><strong><i className="lni-package" /> Brand:</strong> <a href="#">Apple</a></p>
                      </li>
                    </ul>
                  </div>
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
                  <h4 className="widget-title">Ad Posted By</h4>
                  <div className="agent-inner">
                    <div className="agent-title">
                      <div className="agent-photo">
                        <a href="#"><img src="assets/img/productinfo/agent.jpg" /></a>
                      </div>
                      <div className="agent-details">
                        <h3><a href="#">Tahmina Anny</a></h3>
                        <span><i className="lni-phone-handset" />(123) 123-456</span>
                      </div>
                    </div>
                    <p>{res.data.data.addressLine1}{res.data.data.addressLine2}<br/>{res.data.data.addressCity},{res.data.data.addressState},{res.data.data.addressPincode}</p>

                    <button className="btn btn-common fullwidth mt-4">Send Enquiry</button>
                    <hr></hr>
                    {/* <p style={{ color: '#333', fontSize: '15px' }}><b>Hours of Operation</b> (View All)</p> */}
                    <p style={{ color: '#333', fontSize: '15px' }}><b>Hours of Operation</b></p>
                    <p>Today 9.00am - 11.30pm</p>
                    <p>{res.data.data.workingMonday?'Monday'+' '+res.data.data.workingMonday.from+''+' am '+' - '+res.data.data.workingMonday.to+''+' pm ':'Closed'}</p>
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

      this.setState({businessDetails:businessDetails});

    }).catch(error => {
      // return error;
      this.setState({businessDetails:'Data not found'});
    });
    }
  }

  render() {
    console.log('this.state.businessDetails :',this.state.businessDetails);
    return (<Layout>
        <div className="container">
          {this.state.businessDetails}
        </div>
    </Layout>);
  }
}