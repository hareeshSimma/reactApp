import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';

export default class Login extends React.Component {
    render() {
        return(
                <div>
                    <div className="wrapper">
                        <form  name="Login_Form" className="form-signin"> 
                            <div className="row text-center bol"><i className="fa fa-circle"></i></div>
                            <h3 className="form-signin-heading text-center">
                
                            </h3>
                
                            <div className="input-group">
                                <span className="input-group-addon" id="sizing-addon1">
                                    <i className="fa fa-user"></i>
                                </span>
                                <input type="text" className="form-control" name="Username" placeholder="Username" required=""  />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" id="sizing-addon1">
                                    <i className="fa fa-lock"></i>
                                </span>
                                <input type="password" className="form-control" name="Password" placeholder="Password" required=""/>         	  
                            </div>
                            <button className="btn btn-lg btn-primary btn-block"  name="Submit" value="Entrar" type="Submit">SignIn</button> 
                            <span> New User Please &nbsp; <a href="#">SignUp</a>  	</span>		
                
                        </form>			
                    </div>    
                
                </div>
                )
    }
}