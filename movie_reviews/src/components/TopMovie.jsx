import React, { Component } from 'react';

import './TopMovie.scss';
import TopMovieCard from './TopMovieCard';

class TopMovie extends Component {
  state = {
    collapseIndex: 1
  };

  handleCollapse = obj => {
    this.setState({ collapseIndex: obj.clickIndex });
  };

  render() {
    return (
      <div className="container">
        <h1 className="font-kor">Top 영화</h1>

        <div className="row">
          <div className="accordion col-8 " id="accordionExample">
            <TopMovieCard
              onClick={this.handleCollapse}
              collapseIndex={this.state.collapseIndex}
              clickIndex={1}
              imgSrc={'https://source.unsplash.com/random/101x120'}
              titleText={'영화1'}
              isOpen={true}
            />
            <TopMovieCard
              onClick={this.handleCollapse}
              collapseIndex={this.state.collapseIndex}
              clickIndex={2}
              imgSrc={'https://source.unsplash.com/random/102x120'}
              titleText={'영화2'}
            />
            <TopMovieCard
              onClick={this.handleCollapse}
              collapseIndex={this.state.collapseIndex}
              clickIndex={3}
              imgSrc={'https://source.unsplash.com/random/103x120'}
              titleText={'영화3'}
            />
            <TopMovieCard
              onClick={this.handleCollapse}
              collapseIndex={this.state.collapseIndex}
              clickIndex={4}
              imgSrc={'https://source.unsplash.com/random/104x120'}
              titleText={'영화4'}
            />
          </div>
          <div className="col-4 d-flex flex-column bd-highlight mb-3">
            <h2>스포트 라이트</h2>
            <img
              src="https://source.unsplash.com/random/180x220"
              alt=""
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TopMovie;
