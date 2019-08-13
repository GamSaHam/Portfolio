import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import SideBar from './components/SideBar';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Header from './components/Header';

import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import Write from './components/Write';

import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment className="my-font">
        <div className="d-flex  m-0 p-0 " id="wrapper">
          <SideBar />

          <div className="main" style={{ width: '100%' }}>
            <div className="container-fluid bg-light">
              <Header />
              <Switch>
                <Route path="/main" component={Home} />
                <Route path="/reviews" component={Reviews} />
                <Route path="/write" component={Write} />
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

        <LoginModal />
        <RegisterModal />
      </React.Fragment>
    );
  }
}

export default App;
