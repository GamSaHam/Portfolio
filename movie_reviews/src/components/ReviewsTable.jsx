import React, { Component } from 'react';
import { getRecentReviews } from '../services/reviewService';
import moment from 'moment';
class ReviewsTable extends Component {
  state = {
    column: ['번호', '영화', '제목', '작성자', '등록일'],
    reviews: []
  };

  async recentReview() {
    try {
      const { data: reviews } = await getRecentReviews();

      this.setState({ reviews });
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
          {this.state.reviews.map((currentElement, index) => (
            <React.Fragment>
              <tr>
                <td className="text-center" style={{ width: '10%' }}>
                  {index + 1}
                </td>

                <td className="text-center" style={{ width: '10%' }}>
                  {currentElement.movie.name}
                </td>
                <td className="text-center" style={{ width: '60%' }}>
                  <a href={'/review/' + currentElement._id}>
                    {currentElement.title}
                  </a>
                </td>
                <td className="text-center" style={{ width: '10%' }}>
                  {currentElement.userName}
                </td>
                <td className="text-center" style={{ width: '10%' }}>
                  {moment(currentElement.publishDate).format('YYYY-mm-D')}
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ReviewsTable;
