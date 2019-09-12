import React from 'react';
// import Layout from '../../Components/dashBoardLayout'
import Layout from '../../../Components/adminLayout'
import axios from 'axios';
import Config from '../../../config';
import Link from 'next/link'

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={
     user:'',
     password:'',
     loginError:'',
     loginSuccess:'',
     getUsersList: '',
    };
  }

  componentDidMount(){
    this.getUsersList();
  }

  getUsersList=()=>{
    axios.post(Config.url+'/api/admin/user/list',{}, {headers: {
      'Content-Type': 'application/json'
    }}).then(res =>{
      console.log(res);
      let getUsersList = res.data.data.map((value,key)=>{
        return (
          <tr key={key}>
            <td>
              <div className="custom-control custom-checkbox">
                <label className="custom-control-label"></label>
              </div>
            </td>
            <td>
              {value.firstname}&nbsp;{value.lastname}
            </td>
            <td>{value.email}</td>
            <td>{value.mobile}</td>
            <td>
              <div className="btns-actions">
                <a className="btn-action btn-view" href="#"><i className="fa fa-eye" aria-hidden="true"></i></a>
                <a className="btn-action btn-edit" href="#"><i className="fa fa-pencil" aria-hidden="true"></i></a>
                <a className="btn-action btn-delete" href="#"><i className="fa fa-trash" aria-hidden="true"></i></a>
              </div>
            </td>
          </tr>
        );
      });
      this.setState({getUsersList: getUsersList});
    }).catch(error => {
      alert(error.response.data.message);
      //return error;
    });
  }

  render() {
    return (<Layout>
      <div className="dashboard-box"><h2 className="dashbord-title">View All Users</h2></div>
      <div className="dashboard-wrapper">
        <table className="table table-responsive dashboardtable tablemyads">
          <thead>
            <tr>
              <th>
                <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="checkedall" />
                <label className="custom-control-label" htmlFor="checkedall" />
              </div>
              </th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.getUsersList}
          </tbody>
        </table>
      </div>
    </Layout>);
  }
}
