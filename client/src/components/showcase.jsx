import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import React, { Component } from 'react';
import book from "../img/book.png"



class ShowCase extends Component {
  state = {}
  render() {
    return (
      <div id="showcase" class="py-5">
        <div class="primary-overlay text-white">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 text-center">
                <h1 class="display-2 mt-5 pt-5">
                  Do What You Dream Of...
                </h1>
                <p class="lead">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti, veritatis!</p>
                <a href="#" class="btn btn-outline-secondary btn-lg text-white">
                  <FontAwesomeIcon icon={faArrowRight} /> Read More
                </a>
              </div>
              <div class="col-lg-6">
                <img src={book} alt="" class="img-fluid d-none d-lg-block"></img>

              </div>
            </div>
          </div>
        </div>
      </div>);
  }
}

export default ShowCase;