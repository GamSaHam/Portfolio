import React, { Component } from 'react';

class ReviewsTable extends Component {
  state = {
    column: ['번호', '제목', '작성자', '등록일'],
    content: [
      [
        1,
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusantium omnis aut amet quia laudantium.',
        '유저1',
        '2019-08-09:12:56'
      ],
      [
        2,
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusantium omnis aut amet quia laudantium.',
        '유저2',
        '2019-08-09:12:56'
      ],
      [
        3,
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusantium omnis aut amet quia laudantium.',
        '유저2',
        '2019-08-09:12:56'
      ],
      [
        4,
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusantium omnis aut amet quia laudantium.',
        '유저2',
        '2019-08-09:12:56'
      ],
      [
        5,
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusantium omnis aut amet quia laudantium.',
        '유저2',
        '2019-08-09:12:56'
      ],
      [
        6,
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, accusantium omnis aut amet quia laudantium.',
        '유저2',
        '2019-08-09:12:56'
      ]
    ]
  };

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
          {this.state.content.map(obj => (
            <tr>
              {obj.map(row => (
                <td>{row}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ReviewsTable;
