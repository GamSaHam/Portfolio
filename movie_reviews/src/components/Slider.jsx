import React, { Component } from 'react';
import './Slider.scss';
/*
<img
src="https://source.unsplash.com/random/564x564"
alt=""
className="img-fluid"
/>*/
class Slider extends Component {
  state = {};

  render() {
    return (
      <div className="container pt-5 pb-5  ">
        <h1 className="font-kor">이달의 영화랭킹</h1>
        <div className="pt-5 pb-5 slider-bg">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
            data-interval="false"
          >
            <ol className="carousel-indicators mb-0 pb-0">
              <button
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="btn btn-primary active mr-1"
              >
                예매순
              </button>
              <button
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
                className="btn btn-primary  mr-1"
              >
                현재상영작
              </button>
              <button
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
                className="btn btn-primary  mr-1"
              >
                개봉예정작
              </button>
              <button
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
                className="btn btn-primary  mr-1"
              >
                평점
              </button>
            </ol>
            <div className="carousel-inner">
              <div
                className="carousel-item active pl-5 pr-5"
                style={{ width: '100%', height: '580px' }}
              >
                <div className="row mr-4 ml-4">
                  <div className="col pr-1 pl-1">
                    <div className="card" style={{ height: '260px' }}>
                      <img
                        src="https://source.unsplash.com/random/160x220"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="card-body pt-2">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span className="font-eng"> 10/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="col pr-1 pl-1">
                    <div className="card" style={{ height: '260px' }}>
                      <img
                        src="https://source.unsplash.com/random/161x220"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="card-body pt-2">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span className="font-eng"> 10/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="col pr-1 pl-1">
                    <div className="card" style={{ height: '260px' }}>
                      <img
                        src="https://source.unsplash.com/random/162x220"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="card-body pt-2">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span className="font-eng"> 10/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="col pr-1 pl-1">
                    <div className="card" style={{ height: '260px' }}>
                      <img
                        src="https://source.unsplash.com/random/163x220"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="card-body pt-2">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span className="font-eng"> 10/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="col pr-1 pl-1">
                    <div className="card" style={{ height: '260px' }}>
                      <img
                        src="https://source.unsplash.com/random/164x220"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="card-body pt-2">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span className="font-eng"> 10/10</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row mr-4 ml-4 pt-2">
                  <div className="col pr-1 pl-1">
                    <div className="card" style={{ height: '260px' }}>
                      <img
                        src="https://source.unsplash.com/random/165x220"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="card-body pt-2">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span className="font-eng"> 10/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="col pr-1 pl-1">
                    <div className="card" style={{ height: '260px' }}>
                      <img
                        src="https://source.unsplash.com/random/166x220"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="card-body pt-2">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span className="font-eng"> 10/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="col pr-1 pl-1">
                    <div className="card" style={{ height: '260px' }}>
                      <img
                        src="https://source.unsplash.com/random/167x220"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="card-body pt-2">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span className="font-eng"> 10/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="col pr-1 pl-1">
                    <div className="card" style={{ height: '260px' }}>
                      <img
                        src="https://source.unsplash.com/random/168x220"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="card-body pt-2">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span className="font-eng"> 10/10</span>
                      </div>
                    </div>
                  </div>
                  <div className="col pr-1 pl-1">
                    <div className="card" style={{ height: '260px' }}>
                      <img
                        src="https://source.unsplash.com/random/169x220"
                        alt=""
                        className="img-fluid"
                      />
                      <div className="card-body pt-2">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <span className="font-eng"> 10/10</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="carousel-item"
                style={{ width: '100%', height: '400px' }}
              />
              <div
                className="carousel-item"
                style={{ width: '100%', height: '400px' }}
              />
            </div>

            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
