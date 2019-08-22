import React, { Component } from 'react';

import { getBestMovies } from '../services/movieService';
import './Slider.scss';
/*
<img
src="https://source.unsplash.com/random/564x564"
alt=""
className="img-fluid"
/>*/
class Slider extends Component {
  state = {
    movies: []
  };

  // 영화 등록시 이름 , 이미지 경로
  async componentDidMount() {
    await this.mondlyBestReviews();
  }

  async mondlyBestReviews() {
    try {
      const { data: movies } = await getBestMovies();

      console.log(movies);
      this.setState({ movies });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        // this.props.history.replace('/not-found');
      }
    }
  }

  renderStar = total => {
    let star = [];

    for (let i = 5; i > 0; i--) {
      let val = i - total;

      if (total == 0) {
        star.push(<i className="far fa-star text-warning" />);
        continue;
      }

      if (val >= 1) {
        star.push(<i className="fa fa-star text-warning" />);
      } else if (val <= 0) {
        star.push(<i className="far fa-star text-warning" />);
      } else {
        star.push(<i className="fas fa-star-half-alt text-warning" />);
      }
    }

    return star;
  };

  renderCarouselItem = () => {
    let card = [];

    for (let i = 0; i < 5; i++) {
      let movie = this.state.movies[i];

      if (movie) {
        if (movie.total == null) {
          movie.total = 0;
        } else {
          movie.total = movie.total.toFixed(1);
        }
        card.push(
          <div className="col pr-1 pl-1">
            <div className="card bg-dark" style={{ height: '260px' }}>
              <img
                src={'/img/' + movie.image_path}
                alt=""
                className="img-fluid "
                style={{ height: '220px' }}
              />
              <div className="card-body pt-1">
                {this.renderStar(movie.total)}

                <span className="ml-2 text-warning">{movie.total}/5</span>
              </div>
            </div>
          </div>
        );
      } else {
        card.push(
          <div className="col pr-1 pl-1">
            <div className="card bg-dark" style={{ height: '260px' }}>
              <div
                alt=""
                className="img-fluid border-none"
                style={{ height: '220px' }}
              />
              <div className="card-body pt-1" />
            </div>
          </div>
        );
      }
    }

    let card2 = [];

    for (let i = 5; i < 10; i++) {
      let movie = this.state.movies[i];

      if (movie) {
        card2.push(
          <div className="col pr-1 pl-1">
            <div className="card bg-dark" style={{ height: '260px' }}>
              <img
                src={'/img/' + movie.image_path}
                alt=""
                className="img-fluid"
                style={{ height: '220px' }}
              />
              <div className="card-body pt-1">
                <i className="fa fa-star text-warning" />
                <i className="fa fa-star text-warning" />
                <i className="fa fa-star text-warning" />
                <i className="fa fa-star text-warning" />
                <i className="fa fa-star text-warning" />
                <span className="text-warning"> 10/10</span>
              </div>
            </div>
          </div>
        );
      } else {
        card2.push(
          <div className="col pr-1 pl-1">
            <div className="card bg-dark" style={{ height: '260px' }}>
              <div alt="" className="img-fluid" style={{ height: '220px' }} />
              <div className="card-body pt-1" />
            </div>
          </div>
        );
      }
    }

    return (
      <React.Fragment>
        <div className="row mr-4 ml-4">{card}</div>

        <div className="row mr-4 ml-4 pt-2">{card2}</div>
      </React.Fragment>
    );
  };

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
                평점
              </button>
              <button
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
                className="btn btn-primary  mr-1"
              >
                조회수
              </button>
              <button
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
                className="btn btn-primary  mr-1"
              >
                현재 상영작
              </button>
            </ol>
            <div className="carousel-inner">
              <div
                className="carousel-item active pl-5 pr-5"
                style={{ width: '100%', height: '580px' }}
              >
                {this.renderCarouselItem()}
              </div>

              <div
                className="carousel-item"
                style={{ width: '100%', height: '400px' }}
              >
                Item2
              </div>
              <div
                className="carousel-item"
                style={{ width: '100%', height: '400px' }}
              >
                Item3
              </div>
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
