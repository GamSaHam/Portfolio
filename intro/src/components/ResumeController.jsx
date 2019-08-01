import React, { Component } from 'react';
import LightboxExample from './LightboxExample';
import Resume from './Resume';

class ResumeController extends Component {
  state = {
    isOpen: false,
    photoIndex: 1
  };

  handleLightBoxOpen = photoIndex => {
    this.setState({ isOpen: true, photoIndex: photoIndex });
  };

  handleLightBoxClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <div>
        <LightboxExample
          onClose={this.handleLightBoxClose}
          isOpen={this.state.isOpen}
          photoIndex={this.state.photoIndex}
        />
        <Resume onClick={this.handleLightBoxOpen} />
      </div>
    );
  }
}

export default ResumeController;
