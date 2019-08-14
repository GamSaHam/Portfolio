import React, { Component } from 'react';

import Joi from 'joi-browser';
import Form from './common/form';
import auth from '../services/authService';
import Modal from 'react-bootstrap/Modal';

class LoginModal extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
    show: false
  };

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;

      await auth.login(data.username, data.password);

      this.props.onShowModal(false);
      this.props.onLogin();
      // const { state } = this.props.location;
      // console.log('modal close1');
      // window.location = state ? state.from.pathname : '/';
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    const { isShow, onShowModal } = this.props;

    return (
      <div>
        <Modal
          show={isShow}
          onHide={() => {
            onShowModal(false);
          }}
        >
          <Modal.Header closeButton>
            <Modal.Title>로그인</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput('username', 'Username')}
              {this.renderInput('password', 'Password', 'password')}
              {this.renderButton('Login')}
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default LoginModal;
