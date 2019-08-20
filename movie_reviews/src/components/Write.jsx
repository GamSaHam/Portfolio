import React, { Component } from 'react';
import Joi from 'joi-browser';
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  convertFromRaw,
  convertToRaw
} from 'draft-js';
import { getReview, saveReview } from '../services/reviewService';
import { getMovies } from '../services/movieService';
import auth from '../services/authService';
import Form from '../components/common/form';
import RichEditor from './common/RichEditor';

class Write extends Form {
  state = {
    data: {
      movieId: '',
      title: '',
      rating: '',
      content: {},
      userId: '',
      userName: ''
    },
    editorState: '',
    movies: [],
    errors: {}
  };

  constructor(props) {
    super(props);
    this.state.editorState = EditorState.createEmpty();
  }

  schema = {
    _id: Joi.string(),
    movieId: Joi.string()
      .required()
      .label('Movie'),
    title: Joi.string()
      .required()
      .min(5)
      .max(50)
      .label('Title'),
    rating: Joi.number()
      .min(0)
      .max(5)
      .required()
      .label('Rating'),
    content: Joi.object(),
    userId: Joi.string(),
    userName: Joi.string()
  };

  async populateMovies() {
    const { data: movies } = await getMovies();
    this.setState({ movies });
  }

  async populateReview() {
    try {
      const reviewId = this.props.match.params.id;

      if (reviewId === 'new') return;

      const { data: review } = await getReview(reviewId);
      this.setState({ data: this.mapToViewModel(review) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace('/not-found');
    }
  }

  async componentDidMount() {
    await this.populateMovies();
    await this.populateReview();

    this.state.data.userId = auth.getCurrentUser()._id;
    this.state.data.userName = auth.getCurrentUser().name;
  }

  mapToViewModel(review) {
    return {
      _id: review._id,
      movieId: review.movie._id,
      title: review.title,
      rating: review.rating
    };
  }

  doSubmit = async () => {
    const contentState = this.state.editorState.getCurrentContent();
    this.state.data.content = JSON.stringify(convertToRaw(contentState));
    await saveReview(this.state.data);

    this.props.showPopup('저장이 완료 되었습니다.');
  };
  handleOnChange = editorState => {
    this.setState({ editorState });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container pt-5">
          <h1 className="">리뷰작성하기</h1>
          <form onSubmit={this.handleSubmit}>
            {this.renderSelect('movieId', 'Movie', this.state.movies)}
            {this.renderInput('title', 'Title')}
            {this.renderInput('rating', 'Rating')}

            <RichEditor
              editorState={this.state.editorState}
              handleOnChange={this.handleOnChange}
            />
            {this.renderButton('Save')}
          </form>
        </div>
        <div className="" style={{ height: '400px' }} />
      </React.Fragment>
    );
  }
}

export default Write;
