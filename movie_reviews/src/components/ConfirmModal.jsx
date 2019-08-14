import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';

class ConfirmModal extends Component {
  render() {
    const { isShow, onResponse } = this.props;

    return (
      <Modal show={isShow} onHide={() => onResponse(0)}>
        <Modal.Body>로그아웃을 하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-secondary"
            variant="secondary"
            onClick={() => onResponse(1)}
          >
            확인
          </button>
          <button
            className="btn btn-light"
            variant="primary"
            onClick={() => onResponse(0)}
          >
            취소
          </button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ConfirmModal;
