import React, { Component } from 'react';
import RichEditor from './common/RichEditor';

class Write extends Component {
  state = {};
  render() {
    return (
      <div className="container pt-5">
        <h1 className="">리뷰 작성하기</h1>
        <hr />
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1" className="">
              영화선택
            </label>
            <input className="form-control RichEditor-root" />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1" className="">
              타이틀
            </label>
            <input className="form-control " />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1" className="">
              해시태그
            </label>
            <input className="form-control " />
          </div>

          <div className="form-group">
            <label for="exampleInputEmail1" className="">
              평점
            </label>
            <input className="form-control " />
          </div>

          <RichEditor />
          <br />
          <div className="d-flex justify-content-end">
            <button
              type="submit"
              className="d-flex justify-content-center btn btn-primary "
            >
              저장
            </button>

            <button
              type="submit"
              className="ml-1 d-flex justify-content-center btn btn-primary"
            >
              취소
            </button>
          </div>
        </form>

        <div className="" style={{ height: '400px' }} />
      </div>
    );
  }
}

export default Write;
