import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {LandingComponent} from './containers/landing/Landing';
import {AboutComponent} from './containers/about/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' exact component={LandingComponent}/>
        <Route path='/about' component={AboutComponent}/>
      </div>
    );
  }
}

export default App;
