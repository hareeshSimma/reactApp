import React, { Component } from 'react';
//import logo from './logo.svg';
import '../App.css';

export default class Contact extends React.Component {
        constructor(props) {
    super(props);

    this.state = {};
    this.click=this.click.bind(this);
  }
       click(){
           this.props.history.push('/home');
       } 
    render() {
        return(
                <div>
                <h1>Hello contactus</h1>
                <button  onClick={ this.click}> button</button>
                </div>
                )
    }
}