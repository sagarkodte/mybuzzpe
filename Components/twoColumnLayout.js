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
            <link rel="stylesheet" href="/static/css/main.css" />
            <link rel="stylesheet" href="/static/css/owl.carousel.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <script src="/static/js/jquery.slicknav.js"></script>
            <script src="/static/js/wow.js"></script>
            <script src="/static/js/owl.carousel.min.js"></script>
            <script src="/static/js/main.js"></script>

        </Head>
        <div className="app">
            <header>
                {/* <h1><Link href={{ pathname: '/' }}><a>gallery</a></Link></h1> */}

                <nav className="navbar navbar-expand-lg ">
                    <div className="container">
                        <a className="navbar-brand" href="javascript:void(0)"><img src="http://3.17.162.108:8200/assets/img/logo.png"/></a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                        <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navb">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)"> Home </a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link" href="javascript:void(0)">ABOUT US</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link disabled" href="javascript:void(0)">CONTACT</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-success my-2 my-sm-0" type="button">Search</button>
                            </form>
                            {this.state.token?<div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle btn btn-outline-dark profile-drop" href="JavaScript:Void(0);" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={this.state.user.avatar}  className="profile-cir" /> Sanket Parab <b className="caret"><i className="lni-arrow-down" /></b>
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="dashboard">My Account </a>
                                    <a className="dropdown-item" href="profile">Profile </a>
                                    <a className="dropdown-item" href="profilesetting">Setting</a>
                                    <div className="dropdown-divider" />
                                    <Link href="/"><a className="dropdown-item" onClick={this.handleLogout} >Logout</a></Link>
                                </div>
                            </div>:''}
                            {this.state.token?'':<div className="header-top-right float-right">
                               <Link href="/login"><a  className="header-top-button"><i className="lni-lock" /> Log In</a></Link> |
                               <Link href="/register"><a  className="header-top-button"><i className="lni-pencil" /> Register</a></Link>
                            </div>}
                        </div>
                    </div>
                </nav>
            </header>
            <div className="page">
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
                                    <ul>
                                        <li>
                                        <Link href="dashboard"><a className="active" >
                                            <i className="fas fa-tachometer-alt" />
                                            <span>Dashboard</span>
                                        </a></Link>
                                        </li>
                                        <li>
                                        <Link href="profile"><a >
                                            <i className="far fa-user-circle" />
                                            <span>Profile </span>
                                        </a></Link>
                                        </li>
                                        <li>
                                        <Link href="kyc"><a >
                                            <i className="far fa-file-alt" />
                                            <span>KYC </span>
                                        </a></Link>
                                        </li>
                                        <li>
                                        <Link href="profilesetting"><a >
                                            <i className="fas fa-cog" />
                                            <span>Account Setting</span>
                                        </a></Link>
                                        </li>
                                        <li>
                                        <Link href="shopDetails"><a >
                                            <i className="far fa-edit" />
                                            <span>Shop Details</span>
                                        </a></Link>
                                        </li>
                                        <li>
                                        <Link href="coupon"><a >
                                            <i className="fas fa-tags" />
                                            <span>Coupan</span>
                                        </a></Link>
                                        </li>
                                        <li>
                                        <Link href="transactionHistory"><a >
                                            <i className="fas fa-history" />
                                            <span>Transaction History</span>
                                        </a></Link>
                                        </li>
                                        <li>
                                        <Link href="wallet"><a  >
                                            <i className="fas fa-wallet" />
                                            <span>Wallet</span>
                                        </a></Link>
                                        </li>
                                        <li>
                                         <Link href="/"><a  onClick={this.handleLogout} > <i className="fas fa-sign-out-alt" /><span>Logout</span></a></Link>
                                        </li>
                                    </ul>
                                    </nav>
                                </div>
                                <div className="widget">
                                    <h4 className="widget-title">Advertisement</h4>
                                    <div className="add-box">
                                    <img className="img-fluid" src="http://3.17.162.108:8200/assets/img/img1.jpg"  />
                                    </div>
                                </div>
                                </aside>
                        </div>
                        <div className="col-sm-12 col-md-4 col-lg-9">
                            { children }
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <section className="footer-Content">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-4 col-md-4 col-xs-6 col-mb-12">
                        <div className="widget">
                        <div className="footer-logo"><img src="http://3.17.162.108:8200/assets/img/logo.png" /></div>
                        <div className="textwidget">
                            <p>BuzCafe offers convenience to the entire process of transferring electronic cash.</p>
                        </div>
                        <ul className="mt-3 footer-social">
                            <li><a className="facebook" href="JavaScript:Void(0);"><i className="lni-facebook-filled" /></a></li>
                            <li><a className="twitter" href="JavaScript:Void(0);"><i className="lni-twitter-filled" /></a></li>
                            <li><a className="linkedin" href="JavaScript:Void(0);"><i className="lni-linkedin-fill" /></a></li>
                            <li><a className="google-plus" href="JavaScript:Void(0);"><i className="lni-google-plus" /></a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6 col-mb-12">
                        <div className="widget">
                        <h3 className="block-title">Quick Link</h3>
                        <ul className="menu">
                            <li><a href="/services">- Services</a></li>
                            <li><a href="/about">- About Us</a></li>
                            <li><a href="/blog">- Blog</a></li>
                            <li><a href="/faq">- FAQ's</a></li>
                            <li><a href="/testimonials">- Testimonials</a></li>
                            <li><a href="/termsncondition">- Terms &amp; Condition</a></li>
                            <li><a href="/privacypolicy">- Privacy Policy</a></li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-xs-6 col-mb-12">
                        <div className="widget">
                        <h3 className="block-title">Contact Info</h3>
                        <ul className="contact-footer">
                            <li>
                            <a href="mailto:support@buzcafe.com"><strong><i className="lni-envelope" /></strong><span>support@buzcafe.com</span>
                            </a>
                            </li>
                            <li>
                            <div className="store">
                                <a className="appstore" href="javascript:void(0)" disabled="disabled"><i className="lni-apple" />  App Store (Comming Soon)</a>
                                <a className="playstore" href="javascript:void(0)" disabled="disabled"><i className="lni-playstore" /> Play Store (Comming Soon)</a>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
                <div id="copyright">
                <div className="container">
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