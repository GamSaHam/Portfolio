import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import _ from 'lodash';

import SideBar from './components/SideBar';
import Home from './components/Home';
import Reviews from './components/Reviews';
import Header from './components/Header';

import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import Write from './components/Write';

import auth from './services/authService';
import ConfirmModal from './components/ConfirmModal';

import './App.scss';
import PopupModal from './components/PopupModal';

class App extends Component {
  componentDidMount() {
    this.setState({ user: auth.getCurrentUser() });
  }

  state = {
    isShow: false,
    user: {},
    popupShow: false,
    confirmModalShow: false,
    confirmModalCallback: {},
    popupMessage: '',
    location: ''
  };

  showLoginModal = isShow => {
    this.setState({ isShow });
  };

  handleLogout = () => {
    this.setState({ confirmModalShow: true });
    this.setState({ confirmModalCallback: this.logoutCallback });
  };

  handleLogin = () => {
    this.setState({ user: auth.getCurrentUser() });

    if (this.state.location !== '') {
      window.location.href = this.state.location;
      this.setState({ location: '' });
    }
  };

  logoutCallback = ret => {
    this.setState({ confirmModalShow: false });

    if (ret == 1) {
      auth.logout();
      this.setState({ user: {} });
    }
  };

  handleLoginCheck = path => {
    if (!_.isEmpty(this.state.user)) {
      console.log(path);
      window.location.href = path;
    } else {
      this.setState({ popupMessage: '로그인이 필요한 서비스입니다.' });
      this.setState({ popupShow: true });

      this.setState({ location: '/write' });
    }
  };

  render() {
    return (
      <div className="my-font">
        <div className="d-flex  m-0 p-0 " id="wrapper">
          <SideBar onCheckLogin={this.handleLoginCheck} />

          <div className="main" style={{ width: '100%' }}>
            <div className="container-fluid bg-light">
              <Header
                user={this.state.user}
                onShowModal={this.showLoginModal}
                onLogout={this.handleLogout}
              />
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

        <PopupModal
          isShow={this.state.popupShow}
          msg={this.state.popupMessage}
          handleClose={ret => {
            if (ret == 1) {
              this.setState({ popupShow: false });
              this.setState({ isShow: true });
            } else {
              this.setState({ popupShow: false });
            }
          }}
        />
        <ConfirmModal
          isShow={this.state.confirmModalShow}
          onResponse={this.state.confirmModalCallback}
        />
        <LoginModal
          onShowModal={this.showLoginModal}
          isShow={this.state.isShow}
          onLogin={this.handleLogin}
        />
        <RegisterModal />
      </div>
    );
  }
}

export default App;
