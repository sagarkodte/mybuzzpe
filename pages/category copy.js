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
      quesList: [],
      modal: false,
      que: { question: '', options: [] },
      optList: [],
      opt: { options: '' },
      current: 0,
      checked: '',
      isSelected: false,
      allQuestions: [],
      showNext: false,
      currentQuestion: 0,
      showFinish: false,
      showPrev: false,
      checkboxValue1: [],
      lastValue: '',
      radioValue: ''

    };
    // this.toggle = this.toggle.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount = () => {
    axios.post(serverUrl.url + '/api/question/list', {
      category: this.props.url.query.path,
    })
      .then((response) => {
        this.toggle();
        this.setState({ allQuestions: response.data.data })
        console.log(response.data.data);
        // response.data.data.forEach(function (item, index) {
        //   item.options.forEach(function (item1, index1) {
        //     item1.selected = 0;
        //   });
        // });
        // console.log('News', response.data.data);
        // this.setState({ quesList: response.data.data }, function () {
        //   this.setState({ que: this.state.quesList[this.state.current] });
        // });


      })
      .catch((error) => {
        //console.log(error);
      });

  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  nextQue = () => {
    this.setState({ current: this.state.current + 1 }, function () {
      console.log('Ye5 ', this.state.current);
      this.setState({ que: this.state.quesList[this.state.current] })
    });

    if (this.state.isSelected) {
      console.log(3)
    }

  }

  getRadioValue(event) {
    // if(this.state.lastValue) {
    //   this.state.checkboxValue1.splice(this.state.checkboxValue1.indexOf(this.state.lastValue), 1);
    // }
    // this.state.lastValue = event.target.value;
    // this.setState({ checkboxValue: event.target.value })
    
    // var b = []
    this.state.checkboxValue1[this.state.current] = [event.target.value];
    // console.log(7,b);
    console.log(this.state.current);
    if (event.target.checked && event.target.value) {
      this.setState({ showNext: true })
      this.setState({ showPrev: true })
      if (this.state.allQuestions.length - 1 === this.state.currentQuestion) {
        this.setState({ showNext: false })
        this.setState({ showFinish: true })
      }
    }
  }
  getCheckboxValue(event) {
    const { checked, value } = event.target;
    this.setState({ isSelected: true })
    console.log('89', checked)
    if (checked) {
      //this.setState({ checked: value }, function () {
      // console.log(this.state.checked)
      // this.setState({checkboxValue:value})
      // if(checked && value){
      //   this.setState({showNext:true})
      //   this.setState({showPrev:true})
        
      // }
      //})
      let a = this.state.checkboxValue1[this.state.current];
      if(a == undefined) a = [];
      a.push(value);
      this.state.checkboxValue1[this.state.current] = a;
      if(this.state.allQuestions.length-1 === this.state.currentQuestion){
        this.setState({showNext:false})
        this.setState({showFinish:true})
      }
    } else {
      let a = this.state.checkboxValue1;
      delete a.splice(a.indexOf(value), 1);
      this.setState({checkboxValue1: a});
    }
  }
  next() {
    if (this.state.checkboxValue1) {
      this.setState({ showNext: true })
      this.slider.slickNext();
      console.log(this.state.checkboxValue1)
      this.setState({current: this.state.current + 1});
    }
  }
  previous() {
    this.slider.slickPrev();
    this.setState({ showFinish: false });
    this.setState({current: this.state.current - 1});

  }
  finish = ()=> {
    let newA = [];
    this.state.checkboxValue1.forEach(function(index){
      index.forEach(function(index1) {
        newA.push(index1);
      });
    });
    console.log(newA);
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
                      {this.state.categoriesList}

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

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
            <Slider
              arrows={false}
              ref={c => (this.slider = c)}
              {...settings}
              afterChange={(event) => this.setState({ currentQuestion: event })}
            >
              {this.state.allQuestions.map((item, i) =>
                <div key={i }>
                  <h5>{item.question}</h5>
                  {item.options.map((opt, i) =>
                    <div key={i}>
                      {item.type === 'radio' ? <span className="optRadio" ><input onChange={this.getRadioValue.bind(this)} type='radio' name="options" value={opt.title} /></span> : <span><input className="checkbox" onChange={(event) => this.getCheckboxValue(event)} type='checkbox' name='options[]' value={opt.title} /></span>}{opt.title}
                    </div>
                  )}

                </div>

              )}
            </Slider>

            {this.state.que.question}
            {this.state.que.options.map((item, i) =>
              <div>{this.state.que.type === 'radio' ? <div className="optRadio" onChange={this.getRadioValue.bind(this)[i]}><input type='radio' name="options" value={item.title} /></div> : <div><input className="checkbox" onChange={(event) => this.getCheckboxValue(event)[i]} type='checkbox' name='options[]' value={item.title} /></div>}{item.title}</div>
            )}
          </ModalBody>
          <ModalFooter>
            {this.state.showPrev ? <Button color="primary" onClick={this.previous}>Previous</Button> : ''}
            {this.state.showNext ? <Button color="secondary" onClick={this.next}>Next</Button> : ''}
            {this.state.showFinish ? <Button color="secondary" onClick={this.finish}>Finish</Button> : ''}
          </ModalFooter>
        </Modal>

      </Layout>);
  }
}