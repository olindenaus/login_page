import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './containers/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
          <img src={logo} className="App-logo" alt="logo" />
          <Form />
      </div>
    );
  }
}

export default App;
