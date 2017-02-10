import React, { Component } from 'react';
import Profile from './components/profile'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="seven columns">
            <div className="App-header">
              <img src={ logo } className="App-logo" alt="logo" />
            </div>
          </div>

          <div className="five columns">
            <Profile />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
