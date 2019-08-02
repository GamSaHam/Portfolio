import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div class="d-flex" id="wrapper">
        <div class="border-right border-secondary bg-dark" id="sidebar-wrapper">
          <div class=" sidebar-heading">
            <h1>Movie Review</h1>{' '}
          </div>
          <div class="list-group list-group-flush">
            <a
              href="#"
              class="border-top list-group-item list-group-item-action "
            >
              영화홈
            </a>
            <a
              href="#"
              class="border-top list-group-item list-group-item-action "
            >
              영화 예매
            </a>
            <a
              href="#"
              class="border-top border-bottom list-group-item list-group-item-action "
            >
              리뷰
            </a>
            <a
              href="#"
              class="border border-left-0 border-right-0 list-group-item list-group-item-action "
            >
              영화 리뷰하기
            </a>
          </div>
        </div>

        <div id="page-content-wrapper">
          <div class="container-fluid" />
        </div>
      </div>
    );
  }
}

export default App;
