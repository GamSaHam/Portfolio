import React, { Component } from 'react';
import Header from './Header';
import ReviewsTable from './ReviewsTable';

class Reviews extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: '',
    selectedGenre: null,
    sortColumn: { path: 'title', order: 'asc' }
  };
  handleDelete = async movie => {
    const originalMovies = this.state.movies;
    const movies = originalMovies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const {
      pageSize,
      currentPage,
      sortColumn,
      searchQuery,
      movies
    } = this.state;

    return (
      <React.Fragment>
        <div className="container pt-5">
          <h1 className="font-kor">Top5 영화 리뷰</h1>
          <div
            className="d-flex justify-content-center border-bottom"
            style={{ height: '200px' }}
          >
            <div
              className="ml-2 bg-secondary align-self-center"
              style={{ height: '160px', width: '140px' }}
            />

            <div
              className="ml-2 bg-secondary align-self-center"
              style={{ height: '160px', width: '140px' }}
            />

            <div
              className="ml-2 bg-secondary align-self-center"
              style={{ height: '160px', width: '140px' }}
            />

            <div
              className="ml-2 bg-secondary align-self-center"
              style={{ height: '160px', width: '140px' }}
            />

            <div
              className="ml-2 bg-secondary align-self-center"
              style={{ height: '160px', width: '140px' }}
            />
          </div>

          <div className="d-flex justify-content-end  mt-5">
            <h4 className="font-kor border-bottom">최신리뷰</h4>
          </div>
          <div className="pt-3 border-bottom">
            <ReviewsTable />
          </div>

          <div className="d-flex justify-content-end  mt-5">
            <h4 className="font-kor border-bottom">베스트글</h4>
          </div>
          <div className="pt-3 border-bottom">
            <ReviewsTable />
          </div>
        </div>
        <div className="" style={{ height: '400px' }} />
      </React.Fragment>
    );
  }
}

export default Reviews;
