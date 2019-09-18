import React, { Component } from 'react'
import Link from 'next/link'
import Router from 'next/router'
class Header extends Component {
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
        console.log('dasdh boeadr ', localStorage.getItem("user"));
        this.setState({
            token: localStorage.getItem("token"),
            user: JSON.parse(localStorage.getItem("user")),
        });
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
            pathname: '/search',
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
        return (
            <React.Fragment>
                <header>
                    {/* <h1><Link href={{ pathname: '/' }}><a>gallery</a></Link></h1> */}

                    <nav className="navbar navbar-expand-lg ">
                        <div className="container">
                            <a className="navbar-brand" href=""><img src="http://3.17.162.108:8200/assets/img/logo.png" /></a>
                            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navb">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <Link href="/"><a className="nav-link"> Home </a></Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link href="/"><a className="nav-link" >ABOUT US</a></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link href="/"><a className="nav-link" >CONTACT</a></Link>
                                    </li>
                                </ul>
                                <form className="form-inline my-2 my-lg-0">
                                    <input onChange={this.getSearchvalue} className="form-control mr-sm-2" type="text" placeholder="Search" />
                                    <button onClick={this.searchResult} className="btn btn-success my-2 my-sm-0" type="button">Search</button>
                                </form>
                                {this.state.token ? <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle btn btn-outline-dark profile-drop" href=";" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src={this.state.user.avatar} className="profile-cir" /> {this.state.user.firstname} {this.state.user.lastname} <b className="caret"><i className="lni-arrow-down" /></b>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <Link href="dashboard"><a className="dropdown-item" >My Account </a></Link>
                                        <Link href="profile"><a className="dropdown-item" >Profile </a></Link>
                                        <Link href="profilesetting"><a className="dropdown-item" >Setting</a></Link>
                                        <div className="dropdown-divider" />
                                        <Link href="/"><a className="dropdown-item" onClick={this.handleLogout} >Logout</a></Link>
                                    </div>
                                </div> : ''}
                                {this.state.token ? '' : <div className="header-top-right float-right">
                                    <Link href="/login"><a className="header-top-button"><i className="lni-lock" /> Log In</a></Link> |
                               <Link href="/register"><a className="header-top-button"><i className="lni-pencil" /> Register</a></Link>
                                </div>}
                            </div>
                        </div>
                    </nav>
                </header>
            </React.Fragment>
        )
    }
}
export default Header