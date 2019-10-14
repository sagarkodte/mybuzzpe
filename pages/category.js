import React from 'react';
import Layout from '../Components/dashBoardLayout'
import axios from 'axios';
import serverUrl from '../config';
import { toast } from 'react-toastify'
import Link from 'next/link';
import Categories from '../Components/Categories'
import Router from 'next/router'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import Slider from "react-slick";

export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quesList: [],
            modal: false,
            modal2: false,
            current: 0,
            allQuestions: [],
            checkboxValue: [],
            message: '',
            allResult: [],
            newA: [],
            categories: [],
            categoriesUrl: ''
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
    }


    componentDidMount = () => {
        this.setState({ categoriesUrl: this.props.url.query.path }, function() {
            this.showQuestions();
        })
        this.getAllresult();

        this.categories();
    }

    showQuestions = (path) => {
        //console.log(this.state.categoriesUrl)
        if (path) {
            this.setState({ categoriesUrl: path }, function() {
                axios.post(serverUrl.url + '/api/question/list', {
                    category: this.state.categoriesUrl,
                })
                    .then((response) => {
                        this.toggle();
                        this.setState({ allQuestions: response.data.data })
                        console.log(this.state.allQuestions);
                    })
                    .catch((error) => {
                        //console.log(error);
                    });
            })
        } else {
            axios.post(serverUrl.url + '/api/question/list', {
                category: this.state.categoriesUrl,
            })
                .then((response) => {
                    this.toggle();
                    this.setState({ allQuestions: response.data.data })
                    console.log(this.state.allQuestions);
                })
                .catch((error) => {
                    //console.log(error);
                });
        }


    }


    categories = () => {
        this.setState({ loader: true })
        axios.get(serverUrl.url + '/api/category/main').then(res => {
            var cata = res.data.data;
            ////console.log(cata)
            this.setState({ categories: cata });
            this.setState({ loader: false })
            //console.log(this.state.categories)
        }).catch(error => {
            return error;
        });
    }

    subCategories = (item) => {
        axios.post(serverUrl.url + '/api/category/children', {
            category: item.path,
        })
            .then((response) => {
                this.setState(prevState => ({
                    modal2: !prevState.modal2
                }));
                console.log(response.data.data);
                this.setState({ subCatename: response.data.data })
                console.log(this.state.subCatename);
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
    toggle2 = () => {
        this.setState(prevState => ({
            modal2: !prevState.modal2
        }));
    }



    getRadioValue(event) {
        const { checked, value } = event.target;
        if (checked) {
            let a = [];
            a.push(value);
            this.state.checkboxValue[this.state.current] = a;
        }
        console.log(this.state.current, this.state.checkboxValue);
    }
    getCheckboxValue(event) {
        const { checked, value } = event.target;
        if (checked) {
            let a = this.state.checkboxValue[this.state.current] ? this.state.checkboxValue[this.state.current] : [];
            a.push(value);
            this.state.checkboxValue[this.state.current] = a;
        } else {
            let a = this.state.checkboxValue[this.state.current];
            delete a.splice(a.indexOf(value), 1);
            this.state.checkboxValue[this.state.current] = a;
        }
        console.log(this.state.current, this.state.checkboxValue);
    }
    next() {
        if (this.state.checkboxValue[this.state.current] != undefined && this.state.checkboxValue[this.state.current].length) {
            this.slider.slickNext();
            this.setState({ current: this.state.current + 1 });
            this.setState({ message: '' });
        } else {
            this.setState({ message: 'Please select atleast one option.' });
        }
    }
    previous() {
        this.slider.slickPrev();
        this.setState({ current: this.state.current - 1 });
        this.setState({ message: '' });
    }

    finish = () => {
        let newA = [];
        this.state.checkboxValue.forEach(function(index) {
            index.forEach(function(index1) {
                newA.push(index1);
            });
        });
        this.setState({ newA });
        if (this.state.checkboxValue[this.state.current] != undefined && this.state.checkboxValue[this.state.current].length) {
            this.setState({ message: '' });
            this.getAllresult();
        } else {
            this.setState({ message: 'Please select atleast one option.' });
        }
    }

    getAllresult = () => {
        axios.post(serverUrl.url + '/api/business/search', {
            category: this.props.url.query.path,
            query: this.state.newA.toString()
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

                                        {
                                            this.state.categories.map((item, i) =>
                                                <li onClick={() => this.subCategories(item)} key={i}>

                                                    <h6>{item.name}</h6>
                                                </li>
                                            )
                                        }
                                        <Modal isOpen={this.state.modal2} toggle={this.toggle2} className={this.props.className} id="homepage_cata_modal">
                                            <ModalHeader>
                                                Select Category
                                            </ModalHeader>
                                            <ModalBody>

                                                <Catalist clk={this.showQuestions} data={this.state.subCatename} />
                                            </ModalBody>
                                            <ModalFooter>
                                                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                            </ModalFooter>
                                        </Modal>

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
                            {/* <div className="product-filter">
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
                            </div> */}
                            <div className="adds-wrapper">
                                <div className="tab-content">
                                    <div id="list-view" className="tab-pane fade active show">
                                        <div className="row">
                                            {
                                                this.state.allResult.map((item, i) =>
                                                    <div className="featured-box" >
                                                        <figure>
                                                            {/* <span className="price-save">
                                                                10% Save
                                                            </span> */}
                                                            {/* <div className="icon">
                                                                <span className="bg-green"><i className="lni-heart" /></span>
                                                                <span><i className="lni-bookmark" /></span>
                                                            </div> */}
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
                                                                <Link href={'business?path=' + item._id}><a className="btn btn-common float-right">View Details</a></Link>
                                                            </div>
                                                        </div>
                                                    </div>

                                                )
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="pagination-bar">
                                <nav>
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="#">Next</a></li>
                                    </ul>
                                </nav>
                            </div> */}
                        </div>
                    </div>
                </div>

                <Modal isOpen={this.state.modal} toggle={this.toggle} id="search_result_question_modal" className={this.props.className}>
                    <ModalBody>
                        <Slider
                            swipe={false}
                            arrows={false}
                            ref={c => (this.slider = c)}
                            {...settings}
                        >
                            {this.state.allQuestions.map((item, i) =>
                                <div key={i}>
                                    <h5>{item.question}</h5>
                                    {item.options.map((opt, i) =>
                                        <label htmlfor={opt.title} className="search_result_questions" key={i}>
                                            {item.type === 'radio' ? <span className="optRadio" ><input onChange={this.getRadioValue.bind(this)} type='radio' name="options" id={opt.title} value={opt.title} /></span> : <span><input className="checkbox" onChange={(event) => this.getCheckboxValue(event)} type='checkbox' name='options[]' id={opt.title} value={opt.title} /></span>}<h6>{opt.title}</h6>
                                        </label>
                                    )}
                                </div>
                            )}
                        </Slider>
                    </ModalBody>
                    <ModalFooter>
                        <p>{this.state.message}</p>
                        {this.state.current > 0 ? <Button color="primary" onClick={this.previous}>Previous</Button> : ''}
                        {this.state.current < this.state.allQuestions.length - 1 ? <Button color="secondary" onClick={this.next}>Next</Button> : ''}
                        {this.state.current == this.state.allQuestions.length - 1 ? <Button color="secondary" onClick={() => { this.finish(); this.toggle() }}>Finish</Button> : ''}
                    </ModalFooter>
                </Modal>

            </Layout>);
    }
}

function Catalist(props) {
    console.log(props)
    const data = props.data;
    const clk = props.clk;
    if (data) {
        const listItems = data.map((singlecat, index) =>
            <li onClick={() => clk(singlecat.path)} key={index}>{singlecat.name}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    } else {
        return (
            <ul>hello</ul>
        );
    }
}