import React, { Component } from 'react';
import './SideBar.scss';

class SideBar extends Component {
  state = {};

  render() {
    const { onCheckLogin } = this.props;

    return (
      <div
        className="border-right border-secondary bg-light"
        id="sidebar-wrapper"
      >
        <div className="sidebar-heading">
          <a href="/" className="logo">
            <h1 className=" img-logo">Movie Review</h1>
          </a>
        </div>
        <div className="list-group list-group-flush">
          <a
            href="/"
            className="border-top list-group-item list-group-item-action"
          >
            <span className="font-kor">영화홈</span>
          </a>
          <a
            href="/reviews"
            className="border-top list-group-item list-group-item-action"
          >
            <span className="font-kor">영화리뷰</span>
          </a>
          <a
            href="#"
            className="border-top border-bottom list-group-item list-group-item-action "
            onClick={() => onCheckLogin('/write')}
          >
            <span className="font-kor">리뷰작성하기</span>
          </a>
          <a
            href="#"
            className="border border-left-0 border-right-0 list-group-item list-group-item-action "
          >
            <span className="font-kor">영화예매</span>
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
