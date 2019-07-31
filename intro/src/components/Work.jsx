import React, { Component } from 'react';
import portfolio1 from '../img/portfolio1.png';
import portfolio2 from '../img/portfolio2.png';
class Work extends Component {
  state = {};
  render() {
    return (
      <div id="work" class="row">
        <div class="card card-body bg-warning text-white py-5">
          <h2>My Work</h2>
          <p class="lead">
            제가 한 프로젝트입니다. 웹 관련항목을 나열하였습니다.
          </p>
        </div>

        <div class="card card-body py-5">
          <h3>프로젝트 나열</h3>

          <div class="row no-gutters">
            <div class="col-md-3">
              <a
                href="https://docs.google.com/presentation/d/e/2PACX-1vSBcfV2r0ueRXrwZTg8FYQIPei1DxtcWG7bubbwyCNduC7_3QfI61_-Vh_x-1c6nSW8vnSdvZSJtkc8/pub?start=false&loop=false&delayms=3000"
                target="_blank"
              >
                <img src={portfolio1} alt="" class="img-fluid" />
              </a>
            </div>
            <div class="col-md-3">
              <a
                href="https://docs.google.com/presentation/d/e/2PACX-1vTGIlzIdsUQJNqZ2Tm9gDllm9rsciSQzWPG88fE6OuInhveDsXj_Uj7A7KewEHGZsfiKi_upFFezq_U/pub?start=false&loop=false&delayms=3000"
                target="_blank"
              >
                <img
                  src={portfolio2}
                  alt=""
                  class="img-fluid"
                  style={{ width: '100%', height: '100%' }}
                />
              </a>
            </div>

            <div class="col-md-3">
              <a
                href="https://unsplash.it/1200/768.jpg?image=253"
                data-toggle="lightbox"
              >
                <img
                  src="https://unsplash.it/600.jpg?image=253"
                  alt=""
                  class="img-fluid"
                />
              </a>
            </div>

            <div class="col-md-3">
              <a
                href="https://unsplash.it/1200/768.jpg?image=253"
                data-toggle="lightbox"
              >
                <img
                  src="https://unsplash.it/600.jpg?image=253"
                  alt=""
                  class="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
