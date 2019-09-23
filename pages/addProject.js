import React from 'react';
import Select from 'react-select';
import Layout from '../Components/twoColumnLayout'
import axios from 'axios';
import Config from '../config';
import Link from 'next/link';
import category from '../Services/categoryService';
import business from '../Services/businessService';
import ReactTags from 'react-tag-autocomplete'

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            businessName: '',
            businessDescription: '',
            addressLine1: '',
            addressCity: '',
            addressState: '',
            addressPincode: '',
            categoryType: 'Select Category Type',
            category: 'Select Category',
            subCategory: 'Select Sub Category',
            businessContactNumbers: '',
            businessTags: '',
            categoryList: '',
            subCategoryList: '',
            subCategoryArray: [],
            errors: {},
            success: '',
            error: '',
            // new vars
            categoryArray: [],
            selectedOption: null,
            subCategoryArray: [],
            selectedSubOption: null,
            businessCategory: [],
            tags: [],
            suggestions: []

            // tags: [
            //     { id: 1, name: "Apples" },
            //     { id: 2, name: "Pears" }
            // ],
            // suggestions: [
            //     { id: 3, name: "Bananas" },
            //     { id: 4, name: "Mangos" },
            //     { id: 5, name: "Lemons" },
            //     { id: 6, name: "Apricots" }
            // ]
        };
    }

    componentDidMount = () => {
        if (localStorage.getItem('token') !== null) {
            console.log('Data Available');
            this.setState({ token: localStorage.getItem('token') }, function() {
                console.log(this.state.token)
            });
        }
        category.getMainCategories().then(res => {
            let a = [];
            res.data.forEach(function(item) {
                a.push({ value: item.path, label: item.name });
            });
            this.setState({ categoryArray: a }, function() {
                console.log(this.state.categoryArray);
            });
        }).catch(error => {
            console.log('error 8', error)
        });
    }
    handleDelete(i) {
        const tags = this.state.tags.slice(0)
        tags.splice(i, 1)
        this.setState({ tags })
    }

    handleAddition(tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags },function(){
             console.log(this.state.tags)
        })


    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    getAllskills = (query) => {
        console.log(query)
        axios.get(Config.url + '/api/business/getallskills?p=' + query).then(res => {
            var cata = res.data.data;

            const arr = cata;

            const newResponse = arr.map((name, id) => ({ id, name }));
            console.log(newResponse);
            this.setState({ suggestions: newResponse })
            //this.setState({ categories: cata });
            //console.log(this.state.categories)
        }).catch(error => {
            return error;
        });
    }
    handleCategoryChange = selectedOption => {
        this.setState({ selectedOption }, function() {
            category.getSubCategories(this.state.selectedOption.value).then(res => {
                let a = [];
                res.data.forEach(function(item) {
                    a.push({ value: item.path, label: item.name });
                });
                this.setState({ subCategoryArray: a }, function() {
                    console.log(this.state.subCategoryArray);
                });
            }).catch(error => {
                console.log('error 8', error)
            });
        });
    }
    handleSubCategoryChange = selectedOption => {
        this.setState({ selectedSubOption: selectedOption });
    }
    addBusiness = () => {
        let cat = this.state.selectedOption;
        let subCat = this.state.selectedSubOption;
        let businessCategory = []
        subCat.push(cat);
        subCat.forEach(function(item) {
            businessCategory.push(item.value);
        });
        this.setState({ businessCategory: businessCategory }, function() {
            business.addBusiness({
                'businessName': this.state.businessName,
                'businessDescription': this.state.businessDescription,
                'addressLine1': this.state.addressLine1,
                'addressCity': this.state.addressCity,
                'addressState': this.state.addressState,
                'addressPincode': this.state.addressPincode,
                'businessContactNumbers': this.state.businessContactNumbers,
                'addressArea': this.state.addressArea,
                'businessCategory': this.state.businessCategory,
                'businessTags': this.state.businessTags
            }, {
                headers: {
                    'x-access-token': this.state.token
                }
            }
            ).then(res => {
                console.log('res3', res);
            }).catch(err => {
                console.log('err3', err);
            });
        });
    }
    render() {

        return (<Layout>
            <div className="page-content">
                <div className="inner-box">
                    <div className="dashboard-box d-sm-flex align-items-center justify-content-between ">
                        <h2 className="dashbord-title">Add new project</h2>
                        {/* <Link href="addBusiness"><a data-toggle="modal"  className="d-none d-sm-inline-block btn btn-sm btn-common shadow-sm"><i className="lni-plus" /> Create</a></Link> */}
                    </div>
                    <div className="dashboard-wrapper" id="shopDetails"></div>
                    <div className="col-md-12 col-sm-12 col-sx-12">
                        <div className="form-group mb-3">
                            <label className="control-label">What is your project about?*</label>
                            <input className="form-control input-md" name="businessName" value={this.state.businessName} type="text" onChange={this.handleChange} />
                            <p><font color="red">{this.state.errors.businessName}</font></p>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Address Line 1 *</label>
                            <ReactTags
                                handleInputChange={this.getAllskills}
                                minQueryLength={1}
                                tags={this.state.tags}
                                suggestions={this.state.suggestions}
                                handleDelete={this.handleDelete.bind(this)}
                                handleAddition={this.handleAddition.bind(this)} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Address Area *</label>
                            <input className="form-control input-md" name="addressarea" value={this.state.addressarea} type="text" onChange={this.handleChange} />
                            <p><font color="red">{this.state.errors.addressarea}</font></p>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Address City *</label>
                            <input className="form-control input-md" name="addressCity" value={this.state.addressCity} type="text" onChange={this.handleChange} />
                            <p><font color="red">{this.state.errors.addressCity}</font></p>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Address State*</label>
                            <input className="form-control input-md" name="addressState" value={this.state.addressState} type="text" onChange={this.handleChange} />
                            <p><font color="red">{this.state.errors.addressState}</font></p>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Pincode *</label>
                            <input className="form-control input-md" name="addressPincode" value={this.state.addressPincode} type="text" onChange={this.handleChange} />
                            <p><font color="red">{this.state.errors.addressPincode}</font></p>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Contact Number *</label>
                            <input className="form-control input-md" name="businessContactNumbers" value={this.state.businessContactNumbers} type="text" onChange={this.handleChange} />
                            <p><font color="red">{this.state.errors.businessContactNumbers}</font></p>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Select Category:</label>
                            <Select onChange={this.handleCategoryChange} options={this.state.categoryArray} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Select Sub Category:</label>
                            <Select value={this.state.selectedSubOption} isMulti onChange={(...args) => this.handleSubCategoryChange(...args)} options={this.state.subCategoryArray} />
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Business Tags*</label>
                            <input className="form-control input-md" name="businessTags" value={this.state.businessTags} type="text" onChange={this.handleChange} />
                            <p><font color="red">{this.state.errors.businessTags}</font></p>
                        </div>


                        {/* <div className="form-group mb-3">
                        <label className="control-label">Shop Photograph</label>
                        <label className="tg-fileuploadlabel" htmlFor="tg-photogallery">
                        <span>Drop files anywhere to upload</span>
                        <span>Or</span>
                        <span className="btn btn-common">Select Files</span>
                        <span>Maximum upload file size: 500 KB</span>
                        <input id="tg-photogallery" className="tg-fileinput" type="file" name="file" />
                        </label>
                    </div> */}
                        {this.state.success !== '' ? <div className="alert alert-success">
                            {this.state.success}
                        </div> : ''}
                        {this.state.error ? <div className="alert alert-danger">
                            {this.state.error}
                        </div> : ''}
                        <button className="btn btn-common" type="button" onClick={this.addBusiness}>Submit</button>
                        <button className="btn btn-common" type="button" onClick={this.onCanel}>Cancel</button>
                    </div>
                </div>
            </div>
        </Layout>);
    }
}
