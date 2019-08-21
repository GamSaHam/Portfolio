import React, { Component } from 'react';
import './SideBar.scss';
import { Link } from 'react-router-dom';
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
          <Link className="logo" to="/">
            <h1 className=" img-logo">Movie Review</h1>
          </Link>
        </div>
        <div className="list-group list-group-flush">
          <Link
            className="border-top list-group-item list-group-item-action"
            to="/"
          >
            <span className="font-kor">영화홈</span>
          </Link>
          <Link
            className="border-top list-group-item list-group-item-action"
            to="/reviews"
          >
            <span className="font-kor">영화리뷰</span>
          </Link>

          <Link
            className="border-top list-group-item list-group-item-action"
            onClick={() => onCheckLogin('/write/new')}
          >
            <span className="font-kor">리뷰작성하기</span>
          </Link>
          <a
            href="#"
            className="border border-left-0 border-right-0 list-group-item list-group-item-action "
          >
            <span className="font-kor">영화미리보기</span>
          </a>
        </div>
      </div>
    );
  }
}

export default SideBar;
