import React, { Component } from 'react';
import classes from './App.css';
import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Login from './containers/Login/Login';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Layout>
          <Switch>
            <Route path="/" component={Login} />
          </Switch>        
        </Layout>
      </div>
    );
  }
}

export default App;
