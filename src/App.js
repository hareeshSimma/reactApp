import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,IndexRoute,browserHistory,Link} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Home from './components/home';
import Contact from './components/contactus';
import Signup from './components/signup';
import About from './components/aboutus';
import Signin from './components/signin';


import Root from './components/root';

export default class App extends React.Component {
    render() {
        return(
              <Router history={browserHistory}>
      <div>
                        <Route component={Root}/>
                        <Route exact path="/" component={Home}/>
                        
                        <Route exact path="/home" component={Home}>
                       
                        </Route>
                        
                        <Route path="/login" component={Signin}/>
                        <Route path="/signup" component={Signup}/>
                        
                       <Route path="/aboutus" component={About}/>
                        <Route path="/contactus" component={Contact}/>

                     </div>
            </Router>

                )
    }
}
