import Link from 'next/link'
import Head from 'next/head'
import register from '../pages/register.js';
import login from '../pages/login.js'
import Router from 'next/router'

export default class extends React.Component{

constructor(props){
  super(props);
  this.state={
      token:'',
      user:'',
      isLogin:false
  };
}

 componentDidMount=()=>{
    console.log('dasdh boeadr ', localStorage.getItem("user"));
    this.setState({
        token:localStorage.getItem("token"),
        user: JSON.parse(localStorage.getItem("user")),
    });
 }

 handleLogout=(e)=>{
    // Router.push('/');
    if(this.state.token!==' ' && this.state.user!==' '){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.state.token = '';
        this.state.user = '';
        Router.push('/');
    }
    e.preventDefault();
 }

  render(){
    const children = this.props.children
   // console.log('user dat ',this.state.user.avatar);
    // console.log('user fname :',this.state.user.firstname);
    // console.log('usedr lname :',this.state.user.lastname);
   return( <div>
        <Head>
            <title>{"Welcomne to Buzcafe"}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />

            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link rel="stylesheet" href="/static/css/main.css" />
            <link rel="stylesheet" href="/static/css/admin.css" />
            <link rel="stylesheet" href="/static/css/owl.carousel.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <script src="/static/js/jquery.slicknav.js"></script>
            <script src="/static/js/wow.js"></script>
            <script src="/static/js/owl.carousel.min.js"></script>
            <script src="/static/js/main.js"></script>
            <script src="/static/js/admin.js"></script>

        </Head>
        <div className="app">
            <header>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <a className="navbar-brand" href="javascript:void(0)"><img src="http://3.17.162.108:8200/assets/img/logo.png"/></a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                        <span className="navbar-toggler-icon" />
                        </button>

                    </div>
                </nav>
            </header>
            <section className="login mt-4">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-3 page-sidebar">
                    <aside>
                      <div className="sidebar-box">
                        <div className="user">
                          <figure>
                            <a href="#"><img src="assets/img/author/img1.jpg" /></a>
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
                                        <li><Link href="/admin/user/add"><a><i className="fa fa-dot-circle-o" aria-hidden="true"></i>Add User</a></Link></li>
                                        <li><Link href="/admin/user/all-users"><a><i className="fa fa-dot-circle-o" aria-hidden="true"></i>All Users</a></Link></li>
                                    </ul>
                                </li>
                                <li> <a href="#" data-toggle="collapse" data-target="#e-commerce" className="collapsed"><i className="fa fa-shopping-cart" /> <span className="nav-label">Category</span><span className="fa fa-chevron-left pull-right" /></a>
                                    <ul className="sub-menu collapse" id="e-commerce">
                                        <li><Link href="/admin/category/add"><a><i className="fa fa-dot-circle-o" aria-hidden="true"></i>Add Category</a></Link></li>
                                        <li><Link href="/admin/category/list"><a><i className="fa fa-dot-circle-o" aria-hidden="true"></i> All Category</a></Link></li>
                                    </ul>
                                 </li>

                                </ul>
                            </div>
                        </nav>
                      </div>
                    </aside>
                  </div>
                  <div className="col-sm-12 col-md-8 col-lg-9">
                    <div className="page-content">
                      <div className="inner-box">
                        { children }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <footer className="footer">
                <div id="copyright">
                <div className="container" >
                    <div className="row">
                    <div className="col-md-12">
                        <div className="site-info text-center">
                        <p>Designed and Developed by <a href="https://buzcafe.com/" rel="nofollow">Buzcafe</a></p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </footer>
        </div>
    </div>
)}
}
