import React from 'react';
import Layout from '../Components/twoColumnLayout'
import axios from 'axios';
import Config from '../config';
import Link from 'next/link'

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
      subCategory:'Select Sub Category',
      categoryList:'',
      subCategoryList:'',
      errors: {},
      success: '',
      error: ''
    };
  }

  componentDidMount = () => {
    if (localStorage.getItem('token') !== null) {
      console.log('Data Available');
      this.setState({ token: localStorage.getItem('token') },function(){
          console.log(this.state.token)
      });

    }

  }

  addBusiness = () => {
    console.log('Business Details');
    var businessDetails = {
      "businessName": this.state.businessName,
      "businessDescription": this.state.businessDescription,
      "addressArea":'govt',
      "addressLine1": this.state.addressLine1,
      "addressCity": this.state.addressCity,
      "addressState": this.state.addressState,
      "addressPincode": this.state.addressPincode,
      "businessCategory": '/i,/r',
      "businessContactNumbers":'9664067927',
      "businessTags":'php,fdfd'


    }
    console.log('businessDetails :', businessDetails);
    if (this.validateForm()) {

      axios.post(Config.url + '/api/Business/add', businessDetails, {
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': this.state.token
        }
      }).then(res => {
        console.log('res business :', res);
        this.setState({
          success: 'Business Details Successfully Added',
          businessName: '',
          businessDescription: '',
          addressLine1: '',
          addressCity: '',
          addressState: '',
          addressPincode: '',
          businessCategory: ''
        });
        setTimeout(() => {
          this.props.url.push('/shopDetails')
          this.setState({ success: '' });
        }, 3000);
      }).catch(error => {
        console.log('errr :', error);
        // if (error.response.data) {
        //   this.setState({ error: error.response.data.message });
        // }
        //return error;
      });
    }
  }

  category = (categoryType) => {
    console.log('category Api');
    let categoryApi = '/api/category/' + categoryType;
    console.log('api category :', Config.url + categoryApi);
    axios.get(Config.url + categoryApi, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log('res of cat :', res);
      let categoryList=res.data.data.map((value,key)=>{
         return <option key={key} value={value.category}>{value.name}</option>;
      })
      this.setState({categoryList});
    }).catch(error => {
      return error
    })
  }

  subCategory=(subCategory)=>{
    var category={
      category:subCategory
    }
    console.log('cat gory ',category);
    axios.post(Config.url +'/api/category/children',category, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log('res of cat :', res);
      let subCategoryList=res.data.data.map((value,key)=>{
         return <option key={key} value={value.category}>{value.name}</option>
      })
      this.setState({subCategoryList});
    }).catch(error => {
      return error
    })
  }

  handleOnChange = (e) => {
    var eventName = e.target.name;
    var options = e.target.options;
    console.log('options :',options);
    switch (eventName) {
      case 'businessName':
        console.log('handle change1 :', eventName, e.target.value);
        this.setState({ businessName: e.target.value, errors: '' });
        break;
      case 'addressLine1':
        console.log('handle change2 :', eventName, e.target.value);
        this.setState({ addressLine1: e.target.value, errors: '' });
        break;
      case 'addressCity':
        this.setState({ addressCity: e.target.value, errors: '' });
        console.log('handle change3 :', eventName, e.target.value);
        break;
      case 'addressState':
        this.setState({ addressState: e.target.value, errors: '' });
        console.log('handle change4 :', eventName, e.target.value);
        break;
      case 'addressPincode':
        this.setState({ addressPincode: e.target.value, errors: '' });
        console.log('handle change5 :', eventName, e.target.value);
        break;
      // case 'businessCategory':
      //   this.setState({businessCategory:e.target.value, errors:''});
      //   break;
      case 'businessDescription':
        console.log('handle change5 :', eventName, e.target.value);
        this.setState({ businessDescription: e.target.value, errors: '' });
        break;
      case 'categoryType':
        console.log('handle change5 :', eventName, e.target.value);
        this.setState({ categoryType: e.target.value });
        this.category(e.target.value);
        break;
      case 'category':
        console.log('handle change5 :', eventName, e.target.value);
        this.subCategory(e.target.value);
        this.setState({category: e.target.value});
      case 'subCategory':
        this.setState({subCategory:e.target.value});
        break;
      default:
        break;
    }
  }

  onCanel = () => {
    this.props.url.push('/shopDetails')
  }

  validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (!this.state.businessName) {
      formIsValid = false;
      errors["businessName"] = "*Please enter your businessName.";
    }

    if (typeof this.state.businessName !== "undefined") {
      if (!this.state.businessName.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["businessName"] = "*Please enter alphabet characters only.";
      }
    }

    if (!this.state.addressLine1) {
      formIsValid = false;
      errors["addressLine1"] = "*Please enter your address line 1.";
    }

    // if (typeof this.state.addressLine1!== "undefined") {
    //   if (!this.state.lastName.match(/^[#.0-9a-zA-Z\s,-]+$/)) {
    //     formIsValid = false;
    //     errors["addressLine1"] = "*Please enter alphabet characters only.";
    //   }
    // }

    if (!this.state.addressCity) {
      formIsValid = false;
      errors["addressCity"] = "*Please enter your city.";
    }

    if (typeof this.state.addressCity !== "undefined") {
      if (!this.state.addressCity.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["addressCity"] = "*Please enter alphabet characters only.";
      }
    }

    if (!this.state.addressState) {
      formIsValid = false;
      errors["addressState"] = "*Please enter your state.";
    }

    if (typeof this.state.addressState !== "undefined") {
      if (!this.state.addressState.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["addressState"] = "*Please enter alphabet characters only.";
      }
    }

    if (!this.state.addressPincode) {
      formIsValid = false;
      errors["addressPincode"] = "*Please enter your pincode.";
    }

    if (typeof this.state.addressPincode !== "undefined") {
      if (!this.state.addressPincode.match(/^\d{6}$/)) {
        formIsValid = false;
        errors["addressPincode"] = "*Please enter valid 6 digit pincode.";
      }
    }

    // if (!this.state.businessCategory) {
    //   formIsValid = false;
    //   errors["businessCategory"] = "*Please enter category.";
    // }

    if (!this.state.businessDescription) {
      formIsValid = false;
      errors["businessDescription"] = "*Please enter business description.";
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    console.log('render this :', this.state.businessName);
    return (<Layout>
      <div className="page-content">
        <div className="inner-box">
          <div className="dashboard-box d-sm-flex align-items-center justify-content-between ">
            <h2 className="dashbord-title">Add new business</h2>
            {/* <Link href="addBusiness"><a data-toggle="modal"  className="d-none d-sm-inline-block btn btn-sm btn-common shadow-sm"><i className="lni-plus" /> Create</a></Link> */}
          </div>
          <div className="dashboard-wrapper" id="shopDetails"></div>
          <div className="col-md-12 col-sm-12 col-sx-12">
            <div className="form-group mb-3">
              <label className="control-label">Business Name*</label>
              <input className="form-control input-md" name="businessName" value={this.state.businessName} type="text" onChange={this.handleOnChange} />
              <p><font color="red">{this.state.errors.businessName}</font></p>
            </div>
            <div className="form-group mb-3">
              <label className="control-label">Address Line 1 *</label>
              <input className="form-control input-md" name="addressLine1" value={this.state.addressLine1} type="text" onChange={this.handleOnChange} />
              <p><font color="red">{this.state.errors.addressLine1}</font></p>
            </div>
            <div className="form-group mb-3">
              <label className="control-label">Address City *</label>
              <input className="form-control input-md" name="addressCity" value={this.state.addressCity} type="text" onChange={this.handleOnChange} />
              <p><font color="red">{this.state.errors.addressCity}</font></p>
            </div>
            <div className="form-group mb-3">
              <label className="control-label">Address State*</label>
              <input className="form-control input-md" name="addressState" value={this.state.addressState} type="text" onChange={this.handleOnChange} />
              <p><font color="red">{this.state.errors.addressState}</font></p>
            </div>
            <div className="form-group mb-3">
              <label className="control-label">Pincode *</label>
              <input className="form-control input-md" name="addressPincode" value={this.state.addressPincode} type="text" onChange={this.handleOnChange} />
              <p><font color="red">{this.state.errors.addressPincode}</font></p>
            </div>
            <div className="form-group mb-3">
              <label className="control-label">Select Category Type:</label>
              <select name="categoryType" value={this.state.categoryType} onChange={this.handleOnChange}>
                <option value="select category type">Select Category Type</option>
                <option value="service">Service</option>
                <option value="classified">Classified</option>
              </select>
            </div>
            <div className="form-group mb-3">
              <label className="control-label">Select Category:</label>
              <select name="category" value={this.state.category} onChange={this.handleOnChange}>
                <option value="select category">Select Category</option>
                 {this.state.categoryList}
              </select>
            </div>
            <div className="form-group mb-3">
              <label className="control-label">Select Sub Category:</label>
              <select multiple={true} name="subCategory" value={this.state.subCategory} onChange={this.handleOnChange}>
                <option value="select category">Select Sub Category</option>
                 {this.state.subCategoryList}
              </select>
            </div>
            <div className="form-group mb-3">
              <label className="control-label">Business Description</label>
              <textarea className="form-control" placeholder="" name="businessDescription" value={this.state.businessDescription} onChange={this.handleOnChange} rows={3} data-error="Write your message" required />
              <p><font color="red">{this.state.errors.businessDescription}</font></p>
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
