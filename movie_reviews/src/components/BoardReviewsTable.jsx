import React, { Component } from 'react';
import { getReviews } from '../services/reviewService';
import moment from 'moment';
import Pagination from './common/pagination';
import { Link } from 'react-router-dom';

class BoardReviewsTable extends Component {
  state = {
    column: ['번호', '영화', '제목', '작성자', '등록일', '조회수'],
    reviews: [],
    currentReviews: [],
    page: 1,
    pageSize: 10
  };

  componentWillMount() {
    if (this.props.page != 'new') {
      this.state.page = parseInt(this.props.page);
    }
  }

  pagingReviews = () => {
    const { page, pageSize, reviews } = this.state;

    var currentReviews = [];

    let cnt = 0;
    for (
      let i = (page - 1) * pageSize;
      i < page * pageSize && i < reviews.length && cnt < 10;
      i++
    ) {
      currentReviews.push(reviews[i]);
      cnt++;
    }

    this.setState({ currentReviews });
  };

  async recentReview() {
    try {
      const { data: reviews } = await getReviews();

      this.setState({ reviews });
      this.pagingReviews();
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log('error handling');
      }
      //this.props.history.replace('/not-found');
    }
  }

  async componentDidMount() {
    await this.recentReview();
  }

  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr className="font-kor">
              {this.state.column.map(value => (
                <th scope="col" className="text-center">
                  {value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {this.state.currentReviews.map((currentElement, index) => (
              <React.Fragment>
                <tr>
                  <td className="text-center" style={{ width: '10%' }}>
                    {index + 1}
                  </td>

                  <td className="text-center" style={{ width: '10%' }}>
                    {currentElement.movie.name}
                  </td>
                  <td className="text-center" style={{ width: '50%' }}>
                    <Link to={'/review/' + currentElement._id}>
                      {currentElement.title}
                    </Link>
                  </td>
                  <td className="text-center" style={{ width: '10%' }}>
                    {currentElement.userName}
                  </td>
                  <td className="text-center" style={{ width: '10%' }}>
                    {moment(currentElement.publishDate).format('YYYY-MM-D')}
                  </td>
                  <td className="text-center" style={{ width: '10%' }}>
                    {currentElement.views}
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>

        <div className="mt-1 d-flex justify-content-center">
          <Pagination
            page={this.state.page}
            pageSize={this.state.pageSize}
            contentSize={this.state.reviews.length}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default BoardReviewsTable;
