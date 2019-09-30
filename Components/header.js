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

    render() {
        return (
            <React.Fragment>
                <header>
                    {/* <h1><Link href={{ pathname: '/' }}><a>gallery</a></Link></h1> */}

                    <nav className="navbar navbar-expand-lg ">
                        <div className="container">
                             <Link href="/"><a className="navbar-brand"><img src="static/img/logo.png" /></a></Link>
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

                                {this.state.token ? <div className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle btn btn-outline-dark profile-drop" href=";" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img ref={img => this.img = img} onError={
                                            () => this.img.src = 'static/img/user.png'
                                        } src={this.state.user.avatar} className="profile-cir" /> {this.state.user.firstname} {this.state.user.lastname} <b className="caret"><i className="lni-arrow-down" /></b>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                        <Link href="profile"><a className="dropdown-item" >My Account </a></Link>
                                        {/* <Link href="profile"><a className="dropdown-item" >Profile </a></Link> */}
                                        {/* <Link href="profilesetting"><a className="dropdown-item" >Setting</a></Link> */}
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