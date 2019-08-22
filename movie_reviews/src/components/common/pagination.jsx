import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pagination extends Component {
  state = {};

  createLi = () => {
    const { page, pageSize, contentSize } = this.props;

    let li = [];

    for (let i = 0; i < contentSize / pageSize; i++) {
      li.push(
        <li className={i + 1 == page ? 'page-item active' : 'page-item'}>
          <a href={'/board_reviews/' + (i + 1)} className="page-link">
            {i + 1}
          </a>
        </li>
      );
    }

    return li;
  };

  render() {
    const { page, pageSize, contentSize } = this.props;

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className={page <= 1 ? 'page-item disabled' : 'page-item'}>
            <a className="page-link" href={'/board_reviews/' + (page - 1)}>
              Previous
            </a>
          </li>
          {this.createLi()}
          <li
            className={
              page < contentSize / pageSize ? 'page-item' : 'page-item disabled'
            }
          >
            <a className="page-link" href={'/board_reviews/' + (page + 1)}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
