import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex" id="wrapper">
        <div
          className="border-right border-secondary bg-dark"
          id="sidebar-wrapper"
        >
          <div className=" sidebar-heading">
            <a href="#" className=" list-group-item list-group-item-action">
              <h1 className="font-logo">Movie Review</h1>
            </a>
          </div>
          <div className="list-group list-group-flush">
            <a
              href="#"
              className="border-top list-group-item list-group-item-action"
            >
              <span className="font-kor">영화홈</span>
            </a>
            <a
              href="#"
              className="border-top list-group-item list-group-item-action "
            >
              <span className="font-kor">영화랭킹</span>
            </a>
            <a
              href="#"
              className="border-top border-bottom list-group-item list-group-item-action "
            >
              <span className="font-kor">영화리뷰</span>
            </a>
            <a
              href="#"
              className="border border-left-0 border-right-0 list-group-item list-group-item-action "
            >
              <span className="font-kor">영화예매</span>
            </a>
          </div>
        </div>
        <div id="page-content-wrapper">
          <div className="container-fluid" />
        </div>
      </div>
    );
  }
}

export default App;
