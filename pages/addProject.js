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
            projectID: '',
            uploadError: ''
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
    getBudgetType = (selectedOption) => {
        console.log(selectedOption.value)
        this.setState({ SelectedbudgetType: selectedOption.value })

    }
    handleSubCategoryChange = selectedOption => {
        this.setState({ selectedSubOption: selectedOption });
    }

    handleValidation = () => {
        let errors = {};
        console.log(this.state.selectedOption);
        if (!this.state.projectDescription) errors.projectDescription = 'This field is required';
        if (!this.state.projectCategory) errors.projectCategory = 'This field is required';
        if (!this.state.services) errors.services = 'This field is required';
        if (!this.state.budgetAmt) errors.budgetAmt = 'This field is required';
        if (!this.state.SelectedbudgetType) errors.SelectedbudgetType = 'This field is required';
        if (!this.state.note) errors.note = 'This field is required';
        if (!this.state.selectedOption) errors.selectedOption = 'This field is required';
        if (!this.state.selectedSubOption) errors.selectedSubOption = 'This field is required';
        if (Object.entries(errors).length > 0) {
            this.setState({ errors });
            return false;
        } else {
            return true;
        }
    }

    addProject = () => {
        if (this.handleValidation()) {

            let cat = this.state.selectedOption;
            let subCat = this.state.selectedSubOption;
            let projectCategory = []
            subCat.push(cat);
            subCat.forEach(function(item) {
                projectCategory.push(item.value);
            });

            this.setState({ projectCategory: projectCategory }, function() {
                business.addProject({
                    'description': this.state.projectDescription,
                    'category': (this.state.projectCategory).toString(),
                    'services': (this.state.services).toString(),
                    'budget': this.state.budgetAmt,
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
            });
        }
    }
    onSubmit = (e) => {
        e.preventDefault()
        if (this.state.file) {
            this.uploadFile(this.state.file);
        } else {
            this.setState({ uploadError: 'File is required.' })
        }
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

        }).catch(error => {
            // return error;
            console.log(error);
            console.log(error.message);
        });
    }
    scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    render() {

        return (<Layout>
            <div className="page-content">
                <div className="inner-box">
                    <div className="dashboard-box d-sm-flex align-items-center justify-content-between ">
                        <h2 className="dashbord-title">Add new project</h2>
                        {/* <Link href="addProject"><a data-toggle="modal"  className="d-none d-sm-inline-block btn btn-sm btn-common shadow-sm"><i className="lni-plus" /> Create</a></Link> */}
                    </div>
                    <div ref={(el) => { this.uploadDiv = el; }} className="dashboard-wrapper" id="business-list"></div>
                    {this.state.showUploadFile ? '' : <div className="col-md-12 col-sm-12 col-sx-12">
                        <div className="form-group mb-3">
                            <label className="control-label">Project Description</label>
                            <textarea className="form-control" placeholder="" name="projectDescription" value={this.state.projectDescription} onChange={this.handleChange} rows={3} data-error="Write your message" required />
                            <p style={{ color: 'red' }}>{this.state.errors.projectDescription}</p>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Select Category:</label>
                            <Select onChange={this.handleCategoryChange} options={this.state.categoryArray} />
                            <p style={{ color: 'red' }}>{this.state.errors.selectedOption}</p>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Select Sub Category:</label>
                            <Select value={this.state.selectedSubOption} isMulti onChange={(...args) => this.handleSubCategoryChange(...args)} options={this.state.subCategoryArray} />
                            <p style={{ color: 'red' }}>{this.state.errors.selectedSubOption}</p>
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
                            <p style={{ color: 'red' }}>{this.state.errors.services}</p>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Budget</label>
                            <input className="form-control input-md" name="budgetAmt" value={this.state.budgetAmt} type="number" onChange={this.handleChange} />
                            <p style={{ color: 'red' }}>{this.state.errors.budgetAmt}</p>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Budget Type</label>
                            <Select onChange={this.getBudgetType} options={this.state.budgetType} />
                            <p style={{ color: 'red' }}>{this.state.errors.SelectedbudgetType}</p>
                        </div>
                        <div className="form-group mb-3">
                            <label className="control-label">Note</label>
                            <textarea className="form-control" placeholder="" name="note" value={this.state.note} onChange={this.handleChange} rows={3} data-error="Write your message" required />
                            <p style={{ color: 'red' }}>{this.state.errors.note}</p>
                        </div>

                        {this.state.success !== '' ? <div className="alert alert-success">
                            {this.state.success}
                        </div> : ''}
                        {this.state.error ? <div className="alert alert-danger">
                            {this.state.error}
                        </div> : ''}
                        <button className="btn btn-common" type="button" onClick={this.addProject}>Submit</button>
                        <button className="btn btn-common" type="button" onClick={this.onCanel}>Cancel</button>
                    </div>}
                    {this.state.showUploadFile ? <div className="col-md-12 col-sm-12 col-sx-12"><div className="form-group mb-3">
                        <label className="control-label">Add Project Related File</label>
                        <form onSubmit={this.onSubmit}>
                            <input className="type_file" type="file" onChange={this.onChange} />
                            <button className="btn btn-common" type="submit">Upload File</button>
                        </form>
                        <p style={{ color: 'red' }}>{this.state.uploadError}</p>
                    </div></div> : ''}
                </div>
            </div>
        </Layout>);
    }
}