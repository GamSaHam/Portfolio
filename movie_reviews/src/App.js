import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Reviews from './components/Reviews';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="d-flex  m-0 p-0" id="wrapper">
          <SideBar />

          <div className="main" style={{ width: '100%' }}>
            <div className="container-fluid bg-light">
              <Switch>
                <Route path="/main" component={Home} />{' '}
                <Route path="/reviews" component={Reviews} />
                <Redirect from="/" exact to="/main" />
              </Switch>
            </div>
            <footer id="main-footer" className="bg-dark text-white">
              <div className="container">
                <div className="row text-center">
                  <div className="col-md-6 ml-auto">
                    <p className="lead">
                      Copyright &copy; <span id="year" />
                    </p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
