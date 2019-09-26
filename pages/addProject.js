import React from 'react';
import Select from 'react-select';
import Layout from '../Components/twoColumnLayout'
import axios from 'axios';
import Config from '../config';
import Link from 'next/link';
import category from '../Services/categoryService';
import business from '../Services/businessService';
import ReactTags from 'react-tag-autocomplete';
import { toast, ToastContainer } from 'react-toastify';
import Router from 'next/router'
import Loader from '../Components/Loader';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            businessName: '',
            note: '',
            addressLine1: '',
            addressCity: '',
            addressState: '',
            addressPincode: '',
            categoryType: 'Select Category Type',
            category: 'Select Category',
            subCategory: 'Select Sub Category',
            budgetAmt: '',
            businessTags: '',
            categoryList: '',
            subCategoryList: '',
            subCategoryArray: [],
            errors: {},
            fields: {},
            success: '',
            error: '',
            // new vars
            categoryArray: [],
            selectedOption: null,
            subCategoryArray: [],
            selectedSubOption: null,
            projectCategory: [],
            tags: [],
            suggestions: [],
            budgetType: [{ value: 'Monthly', label: 'Monthly' },
            { value: 'Hourly', label: 'Hourly' }],
            SelectedbudgetType: '',
            services: '',
            file: null,
            showUploadFile: false,
            projectID: ''
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
        this.setState({ tags }, function() {
            var array = []
            this.state.tags.map((item, i) => {
                array.push(item.name)
                array.join(',')
                console.log(array)
                this.setState({ services: array })
            })
        })
    }

    handleAddition(tag) {
        const tags = [].concat(this.state.tags, tag)
        this.setState({ tags }, function() {
            var array = []
            this.state.tags.map((item, i) => {
                array.push(item.name)
                array.join(',')
                console.log(array)
                this.setState({ services: array })

            })
        })
    }

    // handleChange = (event) => {
    //     this.setState({ [event.target.name]: event.target.value });
    // }
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

    getBudgetType = (selectedOption) => {
        console.log(selectedOption.value)
        this.setState({ SelectedbudgetType: selectedOption.value })
    }

    handleSubCategoryChange = selectedOption => {
        this.setState({ selectedSubOption: selectedOption });
    }

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;



        //Name
        if (!fields["projectDescription"]) {
            formIsValid = false;
            errors["projectDescription"] = toast.error('Required Project Description');
        }

         if (!fields["budgetAmt"]) {
            formIsValid = false;
            errors["budgetAmt"] = toast.error('Required Budget Amount');
        }

        this.setState({ errors: errors });
        return formIsValid

    }

    addProject = () => {
        if (this.handleValidation()) {


            if (this.state.selectedOption && this.state.selectedSubOption) {
                let cat = this.state.selectedOption;
                let subCat = this.state.selectedSubOption;
                let projectCategory = []
                subCat.push(cat);
                subCat.forEach(function(item) {
                    projectCategory.push(item.value);
                });
                this.setState({ projectCategory: projectCategory })
            }

            business.addProject({
                'description': this.state.fields["projectDescription"],
                'category': (this.state.projectCategory).toString(),
                'services': (this.state.services).toString(),
                'budget': this.state.fields["budgetAmt"],
                'budgetType': this.state.SelectedbudgetType,
                'note': this.state.note,
            }, {
                headers: {
                    'x-access-token': this.state.token
                }
            }
            ).then(res => {
                console.log('res3', res.data);
                this.setState({ projectID: res.data._id }, function() {
                    console.log(this.state.projectID)
                    this.setState({ showUploadFile: true }, function() {
                        this.scrollToTop()
                    })
                })


            }).catch(err => {
                console.log('err3', err);
            });

        }
    }


    onSubmit = (e) => {
        e.preventDefault()
        this.uploadFile(this.state.file);
    }
    onChange = (e) => {
        this.setState({ file: e.target.files[0] })
    }

    uploadFile = (file) => {
        const formData = new FormData();
        formData.append('sampleFile', file)
        formData.append('projectId', this.state.projectID)
        axios.post(Config.url + '/api/project/uploadfile', formData, {
            headers: {
                'content-type': 'multipart/form-data',
                'x-access-token': this.state.token
            }
        }).then(res => {
            console.log(res);
            toast("Project Added Successfully.!", {
                onClose: () => Router.push({
                    pathname: '/project-list',
                    //state: { detail: path }
                })
            });
        }).catch(error => {
            // return error;
        });
    }
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
        console.log(this.state.fields)
    }

    render() {

        return (<Layout>
            <ToastContainer />
            <div className="page-content">
                <div className="inner-box">
                    <div className="dashboard-box d-sm-flex align-items-center justify-content-between ">
                        <h2 className="dashbord-title">Add new project</h2>
                        {/* <Link href="addProject"><a data-toggle="modal"  className="d-none d-sm-inline-block btn btn-sm btn-common shadow-sm"><i className="lni-plus" /> Create</a></Link> */}
                    </div>
                    <div ref={(el) => { this.uploadDiv = el; }} class="dashboard-wrapper" id="business-list"></div>
                    {this.state.showUploadFile ? '' :
                        <form name="contactform" className="contactform" onSubmit={this.addProject.bind(this)}>
                            <div className="col-md-12 col-sm-12 col-sx-12">
                                <div className="form-group mb-3">
                                    <label className="control-label">Project Description</label>
                                    <textarea className="form-control" placeholder="" name="projectDescription" value={this.state.fields["projectDescription"]} onChange={this.handleChange.bind(this, 'projectDescription')} rows={3} data-error="Write your message" required />

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
                                    <label className="control-label">Add Skills *</label>
                                    <ReactTags
                                        handleInputChange={this.getAllskills}
                                        minQueryLength={1}
                                        tags={this.state.tags}
                                        suggestions={this.state.suggestions}
                                        handleDelete={this.handleDelete.bind(this)}
                                        handleAddition={this.handleAddition.bind(this)} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="control-label">Budget</label>
                                    <input className="form-control input-md" name="budgetAmt" value={this.state.fields["budgetAmt"]} type="number" onChange={this.handleChange.bind(this, 'budgetAmt')} />

                                </div>
                                <div className="form-group mb-3">
                                    <label className="control-label">Budget Type</label>
                                    <Select onChange={this.getBudgetType} options={this.state.budgetType} />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="control-label">Note</label>
                                    <textarea className="form-control" placeholder="" name="note" value={this.state.note} onChange={this.handleChange} rows={3} data-error="Write your message" required />
                                </div>

                                {this.state.success !== '' ? <div className="alert alert-success">
                                    {this.state.success}
                                </div> : ''}
                                {this.state.error ? <div className="alert alert-danger">
                                    {this.state.error}
                                </div> : ''}
                                <button className="btn btn-common" type="button" onClick={this.addProject}>Submit</button>
                                <button className="btn btn-common" type="button" onClick={this.onCanel}>Cancel</button>
                            </div></form>}
                    {this.state.showUploadFile ? <div className="col-md-12 col-sm-12 col-sx-12"><div className="form-group mb-3">
                        <label className="control-label">Add Project Related File</label>
                        <form onSubmit={this.onSubmit}>
                            <input className="type_file" type="file" onChange={this.onChange} />
                            <button className="btn btn-common" type="submit">Upload File</button>
                        </form>
                    </div></div> : ''}
                </div>
            </div>
        </Layout>);
    }
}
