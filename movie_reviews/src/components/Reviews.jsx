import React, { Component } from 'react';
import Header from './Header';
import ReviewsTable from './ReviewsTable';
import BestReviewsTable from './BestReviewsTable';

class Reviews extends Component {
  state = {
    reiews: [],
    genres: [],
    currentPage: 1,
    pageSize: 4,
    searchQuery: '',
    selectedGenre: null,
    sortColumn: { path: 'title', order: 'asc' }
  };
  handleDelete = async review => {
    const originalReviews = this.state.reviews;
    const reviews = originalReviews.filter(m => m._id !== review._id);
    this.setState({ reviews });
  };

  handleLike = review => {
    const reviews = [...this.state.reviews];
    const index = reviews.indexOf(review);
    reviews[index] = { ...reviews[index] };
    reviews[index].liked = !reviews[index].liked;
    this.setState({ reviews });
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
      reviews
    } = this.state;

    return (
      <React.Fragment>
        <div className="container pt-5">
          <h1 className="font-kor">Top5 영화 리뷰</h1>
          <div className="d-flex justify-content-end">
            <button className="btn btn-outline-primary">게시판 목록</button>
          </div>
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
            <BestReviewsTable />
          </div>
        </div>
        <div className="" style={{ height: '400px' }} />
      </React.Fragment>
    );
  }
}

export default Reviews;
