import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import {LandingComponent} from './containers/landing/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path='/' component={LandingComponent}/>
      </div>
    );
  }
}

export default App;
