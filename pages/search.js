import React from 'react';
import Layout from '../Components/dashBoardLayout'
import axios from 'axios';
import serverUrl from '../config';
import { toast } from 'react-toastify'
import Link from 'next/link';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Slider from "react-slick";

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allResult: [],

    };

  }

  componentDidMount = () => {
    this.getAllresult()

  }

getAllresult = () => {
    axios.post(serverUrl.url + '/api/business/search', {
      query: this.props.url.query.path
    })
      .then((response) => {
        this.setState({ allResult: response.data.data })
        console.log(this.state.allResult)
      })
      .catch((error) => {
        //console.log(error);
      });
  }
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,

    };

    return (
      <Layout>
        <div className="container page">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-xs-12 page-sidebar">
              <aside>
                <div className="widget_search">
                  <form role="search" id="search-form">
                    <input type="search" className="form-control" autoComplete="off" name="s" placeholder="Search..." id="search-input" defaultValue />
                    <button type="submit" id="search-submit" className="search-btn"><i className="lni-search" /></button>
                  </form>
                </div>
                <div className="widget categories">
                  <h4 className="widget-title">All Categories</h4>
                  <ul className="categories-list">
                    <li>
                      <a href="#">
                        <i className="lni-dinner" /> Hotel &amp; Travels <span className="category-counter">(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-control-panel" /> Services <span className="category-counter">(8)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-github" /> Pets <span className="category-counter">(2)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-coffee-cup" /> Restaurants <span className="category-counter">(3)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-home" /> Real Estate <span className="category-counter">(4)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-pencil" /> Jobs <span className="category-counter">(5)</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-display" /> Electronics <span className="category-counter">(9)</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="widget">
                  <h4 className="widget-title">Advertisement</h4>
                  <div className="add-box">
                    <img className="img-fluid" src="assets/img/img1.jpg" alt />
                  </div>
                </div>
              </aside>
            </div>
            <div className="col-lg-9 col-md-12 col-xs-12 page-content">
              <div className="product-filter">
                <div className="short-name">
                  <span>Showing (1 - 12 products of 7371 products)</span>
                </div>
                <div className="Show-item">
                  <span>Show Items</span>
                  <form className="woocommerce-ordering" method="post">
                    <label>
                      <select name="order" className="orderby">
                        <option selected="selected" value="menu-order">49 items</option>
                        <option value="popularity">popularity</option>
                        <option value="popularity">Average ration</option>
                        <option value="popularity">newness</option>
                        <option value="popularity">price</option>
                      </select>
                    </label>
                  </form>
                </div>

              </div>
               <div className="adds-wrapper">
                <div className="tab-content">
                  <div id="list-view" className="tab-pane fade active show">
                    <div className="row">
                      {
                        this.state.allResult.map((item, i) =>
                          <div className="featured-box" >
                            <figure>
                              <span className="price-save">
                                10% Save
                          </span>
                              <div className="icon">
                                <span className="bg-green"><i className="lni-heart" /></span>
                                <span><i className="lni-bookmark" /></span>
                              </div>
                              <a href="#"><img className="img-fluid" src={item.uploadedPhotos[0]} /></a>
                            </figure>
                            <div className="feature-content">

                              <h4><a href="ads-details.html">{item.businessName}</a></h4>
                              <div className="meta-tag">
                                <span>
                                  {item.addressarea} {item.addressPincode}
                                </span>
                              </div>
                              <p className="dsc">
                                {item.businessTags.toString()}

                              </p>
                              <div className="listing-bottom">
                                <p className="contactNumber float-left" >{item.businessContactNumbers}</p>
                                <Link href={'drtrt'}><a className="btn btn-common float-right">View Details</a></Link>
                              </div>
                            </div>
                          </div>

                        )
                      }

                    </div>
                  </div>
                </div>
              </div>
              <div className="pagination-bar">
                <nav>
                  <ul className="pagination justify-content-center">
                    <li className="page-item"><a className="page-link active" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </Layout>);
  }
}