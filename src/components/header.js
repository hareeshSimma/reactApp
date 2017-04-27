import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';
import {Link} from 'react-router-dom';
class Header extends React.Component {
    render() {
        return(
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                       
                        <ul className="nav navbar-nav">
                            <li ><Link to="/home" >Home</Link></li>
                            <li><Link to="/aboutus">AboutUs </Link></li>
                            <li><Link to="contactus">ContactUs</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        </ul>
                    </div>
                </nav>

                )
    }
}

export default Header;