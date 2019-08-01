import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer id="main-footer" className="p-5 bg-dark text-white row">
        <div className="row">
          <div className="col-md-6">
            <a
              href="https://drive.google.com/file/d/1EDMnXcA97IKeQCyhV9F0fBHn6pE0oyEk/view?usp=sharing"
              target="_blank"
              className="btn btn-outline-light"
            >
              <i className="fas fa-cloud" /> Download Resume
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
