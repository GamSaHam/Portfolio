import React, { Component } from 'react';
import Header from './Header';

class Reviews extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container pt-5">
          <h1 className="font-kor">Top5 영화 리뷰</h1>
          <div
            className="d-flex justify-content-center border-bottom"
            style={{ height: '200px' }}
          >
            <div
              className="ml-2 bg-secondary align-self-center"
              style={{ height: '160px', width: '140px' }}
            />

            <div
              className="ml-2 bg-secondary align-self-center"
              style={{ height: '160px', width: '140px' }}
            />

            <div
              className="ml-2 bg-secondary align-self-center"
              style={{ height: '160px', width: '140px' }}
            />

            <div
              className="ml-2 bg-secondary align-self-center"
              style={{ height: '160px', width: '140px' }}
            />

            <div
              className="ml-2 bg-secondary align-self-center"
              style={{ height: '160px', width: '140px' }}
            />
          </div>

          <div className="d-flex justify-content-end border-bottom mt-5">
            <h4 className="font-kor">최신리뷰</h4>
          </div>
          <div></
        </div>
        <div className="bg-warning" style={{ height: '400px' }} />
      </React.Fragment>
    );
  }
}

export default Reviews;
