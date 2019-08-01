import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

import certification1 from '../img/certification1.jpg';
import certification2 from '../img/certification2.jpg';
import certification3 from '../img/certification3.jpg';

const images = [certification1, certification2, certification3];

class LightboxExample extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.isOpen);

    return (
      <div>
        {this.props.isOpen && (
          <Lightbox
            mainSrc={images[this.props.photoIndex]}
            onCloseRequest={() => {
              this.props.onClose();
            }}
          />
        )}
      </div>
    );
  }
}

export default LightboxExample;
