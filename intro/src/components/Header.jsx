import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import person2 from '../img/person2.jpg';

class Header extends Component {
  state = {};
  render() {
    return (
      <header id="main-header">
        <div className="row">
          <div className="col-lg-2 d-none d-lg-block p-0 m-0">
            <img src={person2} alt="" />
          </div>

          <div className="col-lg-10 p-0 m-0">
            <div className="bg-dark text-white">
              <div
                className="d-flex flex-row justify-content-between align-items-center"
                style={{ height: '150px' }}
              >
                <h1 className="display-4 pl-3">함감사(GamSa Ham)</h1>

                <div>
                  <a
                    href="https://github.com/gamsaham"
                    className="text-white pr-4"
                  >
                    <i className="fab fa-github" />
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 bg-black" style={{ height: '70px ' }}>
              풀스택 개발자를 지향하는 웹개발자입니다.
            </div>
          </div>
        </div>

        <div className="row d-flex flex-row text-white align-items-stretch text-center">
          <Link to="/" className="col port-item p-4 bg-primary">
            <i className="fas fa-home fa-2x d-block text-white" />
            <span className="d-none d-sm-block text-white">Home</span>
          </Link>

          <Link to="/resume" className="col port-item p-4 bg-success">
            <i className="fas fa-graduation-cap fa-2x d-block text-white" />
            <span className="d-none d-sm-block text-white">Resume</span>
          </Link>

          <Link to="/work" className="col port-item p-4 bg-warning">
            <i className="fas fa-folder-open fa-2x d-block text-white" />
            <span className="d-none d-sm-block text-white">Resume</span>
          </Link>

          <div
            className="col port-item p-4 bg-danger"
            data-toggle="collapse"
            data-target="#contact"
          >
            <i className="fas fa-envelope fa-2x d-block" />
            <span className="d-none d-sm-block">Contact</span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
