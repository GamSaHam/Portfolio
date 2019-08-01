import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import ResumeController from './components/ResumeController';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.scss';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <Header />
          <div className="content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/resume" exact component={ResumeController} />
              <Route path="/work" exact component={Work} />
              <Route path="/contact" exact component={Contact} />
            </Switch>
          </div>
          <Footer />
        </div>
      </React.Fragment>

      /*
       */
    );
  }
}

export default App;
