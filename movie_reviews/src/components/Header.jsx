import React, { Component } from 'react';
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="border-bottom" style={{ width: '100%' }}>
        <div className="d-flex justify-content-end ml-5 mr-5">
          <div className="ml-2 p-1">
            <button type="button" className="btn btn-light">
              Login
            </button>
          </div>
          <div className="ml-2 p-1">
            <a href="#" className="btn">
              <i className="fas fa-align-justify" />
            </a>
          </div>
          <div className="ml-5 p-1">
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2 font-kor"
                type="search"
                placeholder="검색"
                aria-label="검색"
              />
              <button
                className="btn btn-outline-primary my-2 my-sm-0 font-kor"
                type="submit"
              >
                검색
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
