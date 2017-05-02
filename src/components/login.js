import React, { Component } from 'react';
import $ from "jquery";
import '../App.css';

export default class Login extends React.Component {
        arr;
         constructor() {
    super();
   
    this.state = {
      username: '',
      password: '',
      passwordConfirm: '',
      userDeatils:[]
    };
    this.arr = [];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.getdata = this.getdata.bind(this);
  }
    handleChange(e) {
    e.target.classList.add('active');
    
    this.setState({
      [e.target.name]: e.target.value
    });
    
    this.showInputError(e.target.name);
  }
    handleSubmit(e) {    
    e.preventDefault();
   
    console.log(this.state);
    
    if (!this.showFormErrors()) {
      console.log('form is invalid: do not submit');
    } else {
      var data = this.state;
      console.log(data);
//    $.ajax({
//        type: 'POST',
//        url: 'http://localhost:3030/login',
//        data: data
//      })
//      .done((data) => {
//        console.log("Success");
//        console.log(data);
//       
//       this.arr.push(data);
//        // this.getdata();
//       this.setState({userDeatils:this.arr});
//         console.log(this.state.userDeatils);
//        
//        //window.location='/home';
//        // self.clearForm()
//      })
//      .fail(function(jqXhr) {
//        console.log('failed to register');
//      });
      
      console.log('form is valid: submit');
    }
  }
    showFormErrors() {
    const inputs = document.querySelectorAll('input');
    let isFormValid = true;
    
    inputs.forEach(input => {
      input.classList.add('active');
      
      const isInputValid = this.showInputError(input.name);
      
      if (!isInputValid) {
        isFormValid = false;
      }
    });
    
    return isFormValid;
  } 
    showInputError(refName) {
    const validity = this.refs[refName].validity;
    const label = document.getElementById(`${refName}Label`).textContent;
    const error = document.getElementById(`${refName}Error`);
    const isPassword = refName.indexOf('password') !== -1;
    // const isPasswordConfirm = refName === 'passwordConfirm';
    
    // if (isPasswordConfirm) {
    //   if (this.refs.password.value !== this.refs.passwordConfirm.value) {
    //     this.refs.passwordConfirm.setCustomValidity('Passwords do not match');
    //   } else {
    //     this.refs.passwordConfirm.setCustomValidity('');
    //   }
    // }
        
    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`; 
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`; 
      } else if (isPassword && validity.patternMismatch) {
      error.textContent = `${label} should be longer than 4 chars`; }
      // } else if (isPasswordConfirm && validity.customError) {
      //   error.textContent = 'Passwords do not match';
      // }
      return false;
    }
    
    error.textContent = '';
    return true;
  }
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
                                <input type="text" className="form-control"  placeholder="Username@email.com"
                                 name="username" ref="username" value={ this.state.username } 
                                 onChange={ this.handleChange} required=""  />
                                 <div className="error" id="usernameError" />
                            </div>
                            <div className="input-group">
                                <span className="input-group-addon" id="sizing-addon1">
                                    <i className="fa fa-lock"></i>
                                </span>
                                <input type="password" className="form-control" name="password" placeholder="Username@email.com"
                                  ref="password" value={ this.state.password } 
                                 onChange={ this.handleChange} required=""  />
                                 <div className="error" id="passwordError" />
                            </div>
                            <button className="btn btn-lg btn-primary btn-block"  name="Submit" value="Entrar" type="Submit" onClick={this.handleSubmit}>SignIn</button> 
                            <span> New User Please &nbsp; <a href="#">SignUp</a>  	</span>		
                
                        </form>			
                    </div>    
                
                </div>
                )
    }
}