import React, { Component } from 'react';
import _ from 'lodash';

import { getReview } from '../services/reviewService';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

class Review extends Component {
  state = {
    review: [],
    editorState: '',
    isFinished: false
  };

  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    await this.populateReview();
  }

  async populateReview() {
    try {
      const reviewId = this.props.match.params.id;

      const { data: review } = await getReview(reviewId);

      // 불러오기 로직
      const content = review.content;
      if (content) {
        this.state.editorState = EditorState.createWithContent(
          convertFromRaw(JSON.parse(content))
        );
      }
      this.state.isFinished = true;
      this.setState({ review });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace('/not-found');
    }
  }

  render() {
    if (this.state.isFinished == false) {
      return <h1>Waiting...</h1>;
    }

    return (
      <React.Fragment>
        <div className="container pt-5">
          <h1 className="font-kor">영화 리뷰</h1>
          <hr />
          <div className="App">
            <Editor editorState={this.state.editorState} readOnly={true} />
          </div>
        </div>
        <div className="" style={{ height: '400px' }} />
      </React.Fragment>
    );
  }
}

export default Review;
