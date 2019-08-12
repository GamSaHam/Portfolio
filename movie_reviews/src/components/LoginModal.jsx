import React, { Component } from 'react';

class LoginModal extends Component {
  state = {};
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">
                로그인
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="exampleInputEmail1" className="font-kor">
                    아이디
                  </label>
                  <input
                    type="email"
                    className="form-control font-kor"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="아이디입력"
                  />
                  <small id="emailHelp" className="form-text text-muted" />
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1" className="font-kor">
                    패스워드
                  </label>
                  <input
                    type="password"
                    className="form-control font-kor"
                    id="exampleInputPassword1"
                    placeholder="패스워드 입력"
                  />
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label
                    className="form-check-label font-kor"
                    for="exampleCheck1"
                  >
                    아이디 저장하기
                  </label>
                  <br />
                  <a
                    href="#"
                    className="font-kor"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    회원가입
                  </a>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                <span className="font-kor">취소</span>
              </button>
              <button type="submit" className="btn btn-primary">
                <span className="font-kor">로그인</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
