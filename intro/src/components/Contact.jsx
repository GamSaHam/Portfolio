import React, { Component } from 'react';

class Contact extends Component {
  state = {};
  render() {
    return (
      <div id="contact">
        <div className="row card card-body bg-danger text-white py-5">
          <h2>Contact</h2>
        </div>

        <div className="row card card-body py-5">
          <p className="lead">Email: hamgamsa@gmail.com</p>
          <p className="lead">Phone: 010-8469-9991</p>
          <p className="lead">거주지: 서울특별시 관악구 봉천동</p>
        </div>
      </div>
    );
  }
}

export default Contact;
