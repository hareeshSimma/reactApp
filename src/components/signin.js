import React from 'react';
import '../App.css';
import $ from 'jquery'; 
import {Route,DefaultRoute, RouteHandler} from 'react-router';
class Signin extends React.Component  {
     arr;
 constructor(props) {
    super(props);
   
    this.state = {
      username: '',
      password: ''
     
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
    this.setState({userDeatils:""})
    console.log('component state', JSON.stringify(this.state));
//    this.setState({userDeatils:'hareesh'});
    if (!this.showFormErrors()) {
      console.log('form is invalid: do not submit');
    } else {
      var data = this.state;
      console.log(data);
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/users/authenticate',
        data: data
      }) .done((data) => {
        console.log("login Success....");
        console.log(data);
       this.props.history.push('/home');
       this.arr.push(data);
        // this.getdata();
       this.setState({userDeatils:this.arr});
         console.log(this.state.userDeatils);
     
      })
      .fail(function(jqXhr) {
        console.log('failed to login');
this.props.history.push('/login');
      });
      
      console.log('form is valid: submit');
    }
  }
  
  getdata(){
    console.log("hai");
    console.log(this.arr);
    this.setState({userDeatils:this.arr});
    console.log(this.state.userDeatils);
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
    
        
    if (!validity.valid) {
      if (validity.valueMissing) {
        error.textContent = `${label} is a required field`; 
      } else if (validity.typeMismatch) {
        error.textContent = `${label} should be a valid email address`; 
      } else if (isPassword && validity.patternMismatch) {
      error.textContent = `${label} should be longer than 4 chars`; }
      
      return false;
    }
    
    error.textContent = '';
    return true;
  }

  render() {
    return (
      <div className="col-md-6 col-md-offset-3">
      <form noValidate>
        <div className="form-group">
          <label id="usernameLabel">Username</label>
          <input className="form-control"
            type="email"
            name="username"
            ref="username"
            value={ this.state.username } 
            onChange={ this.handleChange }
            required />
          <div className="error" id="usernameError" />
        </div>
        <div className="form-group">
          <label id="passwordLabel">Password</label>
          <input className="form-control"
            type="password" 
            name="password"
            ref="password"
            value={ this.state.password } 
            onChange={ this.handleChange }
            pattern=".{5,}"
            required />
          <div className="error" id="passwordError" />
        </div>
        
        <button className="btn btn-primary"
          onClick={ this.handleSubmit }>submit</button>
      </form>
      </div>
    );
  }
}


export default Signin;

