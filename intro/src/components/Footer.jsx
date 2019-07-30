import React, { Component } from 'react';

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer id="main-footer" class="p-5 bg-dark text-white row">
        <div class="row">
          <div class="col-md-6">
            <a href="#" class="btn btn-outline-light">
              <i class="fas fa-cloud" /> Download Resume
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
