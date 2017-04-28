import React, { Component } from 'react';
import '../App.css';
import Header from './header';
import Footer from './footer';
export default class Root extends React.Component {
    render() {
        return(
                <div>
                    <Header/>
                        
                    <Footer/>
                </div>


                )
    }
}