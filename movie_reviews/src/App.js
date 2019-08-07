import React, { Component } from 'react';
import movie1 from './img/movie_image.jpg';
import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <div className="d-flex  m-0 p-0" id="wrapper">
        <div
          className="border-right border-secondary bg-light"
          id="sidebar-wrapper"
        >
          <div className="sidebar-heading">
            <a href="#" className="logo">
              <h1 className="font-logo">Movie Review</h1>
            </a>
          </div>
          <div className="list-group list-group-flush">
            <a
              href="#"
              className="border-top list-group-item list-group-item-action"
            >
              <span className="font-kor">영화홈</span>
            </a>
            <a
              href="#"
              className="border-top list-group-item list-group-item-action "
            >
              <span className="font-kor">영화랭킹</span>
            </a>
            <a
              href="#"
              className="border-top border-bottom list-group-item list-group-item-action "
            >
              <span className="font-kor">영화리뷰</span>
            </a>
            <a
              href="#"
              className="border border-left-0 border-right-0 list-group-item list-group-item-action "
            >
              <span className="font-kor">영화예매</span>
            </a>
          </div>
        </div>
        <div id="page-content-wrapper">
          <div className="container-fluid bg-light ">
            <div className="border-bottom">
              <div className="d-flex justify-content-end ml-5 mr-5">
                <div className="ml-2 p-1">
                  <button type="button" className="btn btn-light">
                    Login
                  </button>
                </div>
                <div className="ml-2 p-1">
                  <a href="#" className="btn">
                    <i className="fas fa-align-justify" />
                  </a>
                </div>
                <div className="ml-5 p-1">
                  <form className="form-inline my-2 my-lg-0">
                    <input
                      className="form-control mr-sm-2 font-kor"
                      type="search"
                      placeholder="검색"
                      aria-label="검색"
                    />
                    <button
                      className="btn btn-outline-primary my-2 my-sm-0 font-kor"
                      type="submit"
                    >
                      검색
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="row bg-secondary ml-5 mr-5">
              {/*
              <div class="col-4 card ml-1 mr-1">
                <img
                  src={movie1}
                  alt="Card image cap"
                  style={{ width: '200px', height: '220px' }}
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                </div>
              </div>*/}
            </div>
            <div class="container bg-dark">
              <div class="container bg-primary p-5">
                <h4>Content Title</h4>
                <div class="row">
                  <div class="col-md-3">
                    <div class="card m-2">
                      <img
                        src="https://source.unsplash.com/random/564x564"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card m-2">
                      <img
                        src="https://source.unsplash.com/random/563x563"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card m-2">
                      <img
                        src="https://source.unsplash.com/random/562x562"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card m-2">
                      <img
                        src="https://source.unsplash.com/random/561x561"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                      </div>
                    </div>
                  </div>
                  <div class="w-100" />
                </div>
                <div class="row">
                  <div class="col-md-3">
                    <div class="card m-2">
                      <img
                        src="https://source.unsplash.com/random/564x564"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card m-2">
                      <img
                        src="https://source.unsplash.com/random/563x563"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card m-2">
                      <img
                        src="https://source.unsplash.com/random/562x562"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="card m-2">
                      <img
                        src="https://source.unsplash.com/random/561x561"
                        alt=""
                        class="img-fluid"
                      />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                      </div>
                    </div>
                  </div>
                  <div class="w-100" />
                </div>
              </div>

              <div className="p-5 bg-secondary" style={{ height: '400px' }}>
                content2
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
