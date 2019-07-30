import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Footer from './components/Footer';

import './App.scss';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <Header />
        <div className="content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Resume" exact component={Resume} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
