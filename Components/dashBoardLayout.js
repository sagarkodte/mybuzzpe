import Link from 'next/link'
import Head from 'next/head'
import register from '../pages/register.js';
import login from '../pages/login.js'
import Router from 'next/router'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js'

export default class extends React.Component{

constructor(props){
  super(props);
  this.state={
      token:'',
      user:'',
      searchValue:''
  };
}

 componentDidMount=()=>{
    //console.log('dasdh boeadr ', localStorage.getItem("user"));
    this.setState({
        token:localStorage.getItem("token"),
        user: JSON.parse(localStorage.getItem("user")),
    });
 }

 handleLogout=(e)=>{
    if(this.state.token!==' ' && this.state.user!==' '){
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        this.state.token = '';
        this.state.user = '';
        Router.push('/');
    }
    e.preventDefault();
 }
 getSearchvalue = (event) => {
     console.log(event.target.value)
 }

  render(){
    const children = this.props.children
    //console.log('this.state.token',this.state.token);
   return( <div>
        <Head>
            <title>{"Welcome to Buzcafe"}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />

            <link rel="stylesheet" href="/static/css/main.css" />


        </Head>
        <div className="app">
           <Header/>
            { children }
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