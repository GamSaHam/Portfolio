import React, { Component } from 'react';
import Header from './Header';
import Slider from './Slider';
import TopMovie from './TopMovie';
/*
<button
          onClick={() => {
            this.props.history.push('/reviews');
          }}
        ></button>
        */
class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Slider />
        <TopMovie />
        <div className="" style={{ height: '400px' }} />
      </React.Fragment>
    );
  }
}

export default Home;
