import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,IndexRoute,hashHistory} from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Login from './components/login';
import Home from './components/home';

import Root from './components/root';

export default class App extends React.Component {
    render() {
        return(
              <Router history={hashHistory}>
      <div>
                        <Route component={Root}/>
                        <Route exact path="/" component={Home}>
                        <IndexRoute component={Home}/>
                        <Route exact path="/login1" component={Login}/>
                        
                        </Route>
                        
                        <Route path="/login" component={Login}/>
                        <Route path="/signup" component={Header}/>
             
     
                     </div>
            </Router>


                )
    }
}
