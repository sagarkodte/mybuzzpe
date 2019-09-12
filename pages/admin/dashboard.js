import React from 'react';
// import Layout from '../../Components/dashBoardLayout'
import Layout from '../../Components/adminLayout'
import axios from 'axios';
import Config from '../../config';
import Link from 'next/link'

export default class extends React.Component{
  constructor(props){
    super(props);
    this.state={
     user:'',
     password:'',
     loginError:'',
     loginSuccess:''
    };
  }

  componentDidMount(){
 
  }

  login=()=>{
   if(this.state.user!=='' && this.state.password!==''){
   var userData={
      "user":this.state.user,
      "password":this.state.password
    }
    axios.post(Config.url+'/api/login',userData,{headers: {
      'Content-Type': 'application/json'
    }}).then(res =>{
      console.log('login :',res.data.user);
      console.log('login :',res.data.user.isValidEmail);
      //if(res.data.user.isValidEmail){
      localStorage.setItem('user', JSON.stringify(res.data.user));
      localStorage.setItem('token',res.data.token);
      this.setState({loginSuccess:'Successfully logged In'});
      setTimeout(() => {
        this.props.url.push('/')
        this.setState({loginSuccess:''});
      }, 3000);
      // }else{
      //   this.setState({loginError:'Email is not activated'});
      // }
    }).catch(error => {
      console.log('login error :',error.response.data.message);
      this.setState({loginError:error.response.data.message});
      //return error;
    });
   }else{
     this.setState({loginError:'Please enter the fields'})
   } 
  }

  handleChange=(e)=>{
    let eventName=e.target.name;
     switch(eventName){
       case 'user':
         console.log('user :',eventName,e.target.value);
         this.setState({user:e.target.value,loginError:''});
         break;
       case 'password':
          console.log('pass :',eventName,e.target.value);
         this.setState({password:e.target.value,loginError:''});
         break;   
       default :
         break;   
     }
  }

  render() {
    return (<Layout>
        
  <section className="login mt-4">
       <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-3 page-sidebar">
            <aside>
              <div className="sidebar-box">
                <div className="user">
                  <figure>
                    <a href="#"><img src="assets/img/author/img1.jpg" alt /></a>
                  </figure>
                  <div className="usercontent">
                    <h3>Hello William!</h3>
                    <h4>Administrator</h4>
                  </div>
                </div>
                <nav className="navdashboard">
                     <div className="sidebar left ">
                    <ul className="list-sidebar bg-defoult">        
                        <li> 
                            <a href="#" data-toggle="collapse" data-target="#dashboard" className="collapsed"> <i className="fa fa-th-large" /> <span className="nav-label"> Users </span> <span className="fa fa-chevron-down pull-right" /> </a>
                            <ul className="sub-menu collapse" id="dashboard">
                                <li className="active"><a href="#"> <i class="fa fa-dot-circle-o" aria-hidden="true"></i>Add User</a></li>
                                <li><a href="#"><i class="fa fa-dot-circle-o" aria-hidden="true"></i> All Users</a></li>                                                                       
                            </ul>
                        </li>                      
                       
                        <li> <a href="#" data-toggle="collapse" data-target="#e-commerce" className="collapsed"><i className="fa fa-shopping-cart" /> <span className="nav-label">Category</span><span className="fa fa-chevron-left pull-right" /></a>
                            <ul className="sub-menu collapse" id="e-commerce">
                                <li className="active"><a href="#"> <i class="fa fa-dot-circle-o" aria-hidden="true"></i>Add Category</a></li>
                                <li><a href="#"><i class="fa fa-dot-circle-o" aria-hidden="true"></i> All Category</a></li>                                
                            </ul>
                         </li>
                        
                        </ul>
                    </div>
                </nav>
              </div>
            </aside>
          </div>
          <div className="col-sm-12 col-md-8 col-lg-9 ">
            <div className="page-content">
              <div className="inner-box">
                <div className="dashboard-box d-sm-flex align-items-center justify-content-between ">
                  <h2 className="dashbord-title">Dashboard</h2>
                  <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Generate Report</a>
                </div>
                <div className="dashboard-wrapper">
                  <div className="container-fluid">
                    {/* Content Row */}
                    <div className="row">
                      {/* Earnings (Monthly) Card Example */}
                      <div className="col-xl-4 col-md-6 mb-4">
                        <div className="card border-left-primary shadow h-100 py-2">
                          <div className="card-body">
                            <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">People Nearby</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">4,00,00</div>
                              </div>
                              <div className="col-auto">
                                <i className="fas fa-user fa-2x text-gray-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Earnings (Monthly) Card Example */}
                      <div className="col-xl-4 col-md-6 mb-4">
                        <div className="card border-left-success shadow h-100 py-2">
                          <div className="card-body">
                            <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">Footfall</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                              </div>
                              <div className="col-auto">
                                <i className="fas fa-dollar-sign fa-2x text-gray-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Earnings (Monthly) Card Example */}
                      <div className="col-xl-4 col-md-6 mb-4">
                        <div className="card border-left-info shadow h-100 py-2">
                          <div className="card-body">
                            <div className="row no-gutters align-items-center">
                              <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Precent Transactions</div>
                                <div className="row no-gutters align-items-center">
                                  <div className="col-auto">
                                    <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                  </div>
                                  <div className="col">
                                    <div className="progress progress-sm mr-2">
                                      <div className="progress-bar bg-info" role="progressbar" style={{width: '50%'}} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-auto">
                                <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Content Row */}
                    <div className="row">
                      {/* Area Chart */}
                      <div className="col-xl-8 col-lg-7">
                        <div className="card shadow mb-4">
                          {/* Card Header - Dropdown */}
                          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Earnings Overview</h6>
                            <div className="dropdown no-arrow">
                              <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Dropdown Header:</div>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Something else here</a>
                              </div>
                            </div>
                          </div>
                          {/* Card Body */}
                          <div className="card-body">
                            <div className="chart-area"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                              <canvas id="myAreaChart" style={{display: 'block', width: '458px', height: '320px'}} width={458} height={320} className="chartjs-render-monitor" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Pie Chart */}
                      <div className="col-xl-4 col-lg-5">
                        <div className="card shadow mb-4">
                          {/* Card Header - Dropdown */}
                          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                            <div className="dropdown no-arrow">
                              <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400" />
                              </a>
                              <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink">
                                <div className="dropdown-header">Dropdown Header:</div>
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href="#">Something else here</a>
                              </div>
                            </div>
                          </div>
                          {/* Card Body */}
                          <div className="card-body">
                            <div className="chart-pie pt-4 pb-2"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                              <canvas id="myPieChart" width={193} height={245} className="chartjs-render-monitor" style={{display: 'block', width: '193px', height: '245px'}} />
                            </div>
                            <div className="mt-4 text-center small">
                              <span className="mr-2">
                                <i className="fas fa-circle text-primary" /> Direct
                              </span>
                              <span className="mr-2">
                                <i className="fas fa-circle text-success" /> Social
                              </span>
                              <span className="mr-2">
                                <i className="fas fa-circle text-info" /> Referral
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Content Row */}
                    <div className="row">
                      {/* Content Column */}
                      <div className="col-lg-6 mb-4">
                        {/* Project Card Example -
								  <div class="card shadow mb-4">
									<div class="card-header py-3">
									  <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
									</div>
									<div class="card-body">
									  <h4 class="small font-weight-bold">Server Migration <span class="float-right">20%</span></h4>
									  <div class="progress mb-4">
										<div class="progress-bar bg-danger" role="progressbar" style="width: 20%" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
									  <h4 class="small font-weight-bold">Sales Tracking <span class="float-right">40%</span></h4>
									  <div class="progress mb-4">
										<div class="progress-bar bg-warning" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
									  <h4 class="small font-weight-bold">Customer Database <span class="float-right">60%</span></h4>
									  <div class="progress mb-4">
										<div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
									  <h4 class="small font-weight-bold">Payout Details <span class="float-right">80%</span></h4>
									  <div class="progress mb-4">
										<div class="progress-bar bg-info" role="progressbar" style="width: 80%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
									  <h4 class="small font-weight-bold">Account Setup <span class="float-right">Complete!</span></h4>
									  <div class="progress">
										<div class="progress-bar bg-success" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
									  </div>
									</div>
								  </div>

								 
								  <div class="row">
									<div class="col-lg-6 mb-4">
									  <div class="card bg-primary text-white shadow">
										<div class="card-body">
										  Primary
										  <div class="text-white-50 small">#4e73df</div>
										</div>
									  </div>
									</div>
									<div class="col-lg-6 mb-4">
									  <div class="card bg-success text-white shadow">
										<div class="card-body">
										  Success
										  <div class="text-white-50 small">#1cc88a</div>
										</div>
									  </div>
									</div>
									<div class="col-lg-6 mb-4">
									  <div class="card bg-info text-white shadow">
										<div class="card-body">
										  Info
										  <div class="text-white-50 small">#36b9cc</div>
										</div>
									  </div>
									</div>
									<div class="col-lg-6 mb-4">
									  <div class="card bg-warning text-white shadow">
										<div class="card-body">
										  Warning
										  <div class="text-white-50 small">#f6c23e</div>
										</div>
									  </div>
									</div>
									<div class="col-lg-6 mb-4">
									  <div class="card bg-danger text-white shadow">
										<div class="card-body">
										  Danger
										  <div class="text-white-50 small">#e74a3b</div>
										</div>
									  </div>
									</div>
									<div class="col-lg-6 mb-4">
									  <div class="card bg-secondary text-white shadow">
										<div class="card-body">
										  Secondary
										  <div class="text-white-50 small">#858796</div>
										</div>
									  </div>
									</div>
								  </div>

								</div>

								<div class="col-lg-6 mb-4">

						
								  <div class="card shadow mb-4">
									<div class="card-header py-3">
									  <h6 class="m-0 font-weight-bold text-primary">Illustrations</h6>
									</div>
									<div class="card-body">
									  <div class="text-center">
										<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" style="width: 25rem;" src="assets/img/undraw_posting_photo.svg" alt="">
									  </div>
									  <p>Add some quality, svg illustrations to your project courtesy of <a target="_blank" rel="nofollow" href="https://undraw.co/">unDraw</a>, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
									  <a target="_blank" rel="nofollow" href="https://undraw.co/">Browse Illustrations on unDraw →</a>
									</div>
								  </div>

							
								  <div class="card shadow mb-4">
									<div class="card-header py-3">
									  <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
									</div>
									<div class="card-body">
									  <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
									  <p class="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
									</div>
									</div>
								*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </Layout>);
  }
}
