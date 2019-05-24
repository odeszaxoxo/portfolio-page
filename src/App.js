import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import {LandingComponent} from './containers/landing/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/' exact component={LandingComponent}/>
        </Switch>
      </div>
    );
  }
}

export default App;
