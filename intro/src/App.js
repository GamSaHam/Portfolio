import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Work from './components/Work';
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
            <Route path="/resume" exact component={Resume} />
            <Route path="/work" exact component={Work} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
