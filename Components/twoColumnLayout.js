import Link from 'next/link'
import Head from 'next/head'
import register from '../pages/register.js';
import login from '../pages/login.js'
import Router from 'next/router'
import serverUrl from '../config';
import axios from 'axios';
import Header from './header.js'

export default class extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            token: '',
            user: '',
            isLogin: false,
            Searchvalue: ''
        };
        this.getSearchvalue = this.getSearchvalue.bind(this)
    }

    componentDidMount = () => {
        // console.log('dasdh boeadr ', localStorage.getItem("user"));
        // this.setState({
        //     token: localStorage.getItem("token"),
        //     user: JSON.parse(localStorage.getItem("user")),
        // });
    }

    handleLogout = (e) => {
        // Router.push('/');
        if (this.state.token !== ' ' && this.state.user !== ' ') {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            this.state.token = '';
            this.state.user = '';
            Router.push('/');
        }
        e.preventDefault();
    }
    getSearchvalue = (event) => {
        this.setState({ Searchvalue: event.target.value }, function() {
            console.log(this.state.Searchvalue)
        })
    }

    searchResult = () => {

        Router.push({
            pathname: '/category',
            search: '?path=' + this.state.Searchvalue,
            //state: { detail: path }
        });

        // axios.post(serverUrl.url + '/api/business/search', {
        //     query: this.state.Searchvalue
        // })
        //     .then((response) => {
        //         this.setState({ allResult: response.data.data })
        //         console.log(this.state.allResult)
        //     })
        //     .catch((error) => {
        //         //console.log(error);
        //     });
    }




    render() {
        const children = this.props.children
        // console.log('user dat ',this.state.user.avatar);
        // console.log('user fname :',this.state.user.firstname);
        // console.log('usedr lname :',this.state.user.lastname);
        return (<div>
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
                <Header />
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
                                                    <Link href="business-list"><a >
                                                        <i className="far fa-edit" />
                                                        <span>Businesses</span>
                                                    </a></Link>
                                                </li>
                                                <li>
                                                    <Link href="project-list"><a >
                                                        <i className="far fa-edit" />
                                                        <span>Projects</span>
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
                                                    <Link href="/"><a onClick={this.handleLogout} > <i className="fas fa-sign-out-alt" /><span>Logout</span></a></Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    <div className="widget">
                                        <h4 className="widget-title">Advertisement</h4>
                                        <div className="add-box">
                                            <img className="img-fluid" src="http://3.17.162.108:8200/assets/img/img1.jpg" />
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-sm-12 col-md-4 col-lg-9">
                                {children}
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
                                            <li><a className="facebook" href=""><i className="lni-facebook-filled" /></a></li>
                                            <li><a className="twitter" href=""><i className="lni-twitter-filled" /></a></li>
                                            <li><a className="linkedin" href=""><i className="lni-linkedin-fill" /></a></li>
                                            <li><a className="google-plus" href=""><i className="lni-google-plus" /></a></li>
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
                                                    <a className="appstore" href="" disabled="disabled"><i className="lni-apple" />  App Store (Comming Soon)</a>
                                                    <a className="playstore" href="" disabled="disabled"><i className="lni-playstore" /> Play Store (Comming Soon)</a>
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
        )
    }
}