import React from 'react';
// import Layout from '../../Components/dashBoardLayout'
import Layout from '../../../Components/adminLayout'
import axios from 'axios';
import Config from '../../../config';
import Link from 'next/link';
import Router from 'next/router';

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={
     data: {
       lastname:'',
       firstname:'',
       email:'',
       mobile:'',
       password: ''
     }
    };
  }

  componentDidMount(){

  }
  addUser = () => {
    axios.post(Config.url+'/api/user/add', this.state.data, {headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(res =>{
      alert(res.data.message);
      Router.push('/admin/user/all-users');
    }).catch(error => {
      alert(error.response.data.message);
    });
  }

  handleChange=(e)=>{
    let eventName = e.target.name;
    switch(eventName){
      case 'firstname':
        this.state.data.firstname = e.target.value;
        break;
      case 'lastname':
        this.state.data.lastname = e.target.value;
        break;
      case 'email':
        this.state.data.email = e.target.value;
        break;
      case 'mobile':
        this.state.data.mobile = e.target.value;
        break;
      case 'password':
        this.state.data.password = e.target.value;
        break;
      default :
        break;
    }

  }

  render() {
    return (<Layout>
      <div className="dashboard-box"><h2 className="dashbord-title">Add new category</h2></div>
      <div className="dashboard-wrapper">
          <div className="row">
              <div className="col-md-12 col-sm-12 col-sx-12">
                  <div className="panel-group" id="accordion4" role="tablist" aria-multiselectable="true">
                      <div className="panel panel-default">
                          <div id="collapseOne4" className="panel-collapse in" role="tabpanel" aria-labelledby="headingOne4">
                              <div className="panel-body">
                                <div className="form-group mb-3">
                                    <label className="control-label">Name<span>*</span></label>
                                    <input className="form-control input-md" id="name" name="name" type="text" onChange={this.handleChange} placeholder="Category name" />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="control-label">Parent<span>*</span></label>
                                    <input className="form-control input-md" id="parent" name="parent" type="text" onChange={this.handleChange} placeholder="Parent category" />
                                </div>
                                <div className="form-group mb-3">
                                    <label className="control-label">Sort<span>*</span></label>
                                    <input className="form-control input-md " id="sort" name="sort" type="text" onChange={this.handleChange} placeholder="Sort order" />
                                </div>
                                <button className="btn btn-common" onClick={this.addUser} type="button">Submit</button>
                              </div>
                          </div>
                      </div>
                    </div>
              </div>
          </div>
      </div>
    </Layout>);
  }
}
