import React, { Component } from 'react';

class NewsLetter extends Component {
    state = {}
    render() {
        return (  
        <section id="newsletter" className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <input type="text" className="form-control form-control-lg mb-resp" placeholder="Enter Name"></input>
    
            </div>
            <div className="col-md-4">
              <input type="text" className="form-control form-control-lg mb-resp" placeholder="Enter Email"></input>
            </div>
            <div className="col-md-4">
              <button className="btn btn-primary btn-lg btn-block">
                <i className="fas fa-envelope-open-o"></i>Subscribe
    
              </button>
            </div>
          </div>
        </div>
      </section>);
    }
}

export default NewsLetter;

