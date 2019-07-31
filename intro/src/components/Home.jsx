import React, { Component } from 'react';

class Home extends Component {
  state = {};
  render() {
    return (
      <div id="home" className="row">
        <div className="card card-body bg-primary text-white py-5">
          <h2>Home</h2>
          <p className="lead">
            포토폴리오 소개 페이지입니다. 새로운 웹 기술에 관심이 많으며 취미는
            게임제작 입니다.
          </p>
        </div>

        <div className="card card-body py-5">
          <h3>나의 스킬</h3>
          <p className="lead">
            웹 제작에 필요한 언어, 프레임워크, 라이브러리의 숙련도를 퍼센트로
            나타내었습니다.
          </p>
          <hr />
          <h4>HTML 5</h4>
          <div className="progress mb-3" style={{ height: '20px' }}>
            <div className="progress-bar bg-info" style={{ width: '50%' }}>
              <h6 className="mt-2">50%</h6>
            </div>
          </div>
          <h4>CSS 3</h4>
          <div className="progress mb-3" style={{ height: '20px' }}>
            <div className="progress-bar bg-info" style={{ width: '50%' }}>
              <h6 className="mt-2">50%</h6>
            </div>
          </div>
          <h4>Java</h4>
          <div className="progress mb-3" style={{ height: '20px' }}>
            <div className="progress-bar bg-info" style={{ width: '80%' }}>
              <h6 className="mt-2">80%</h6>
            </div>
          </div>
          <h4>JavaScript</h4>
          <div className="progress mb-3" style={{ height: '20px' }}>
            <div className="progress-bar bg-info" style={{ width: '70%' }}>
              <h6 className="mt-2">70%</h6>
            </div>
          </div>
          <h4>Node.js</h4>
          <div className="progress mb-3" style={{ height: '20px' }}>
            <div className="progress-bar bg-info" style={{ width: '40%' }}>
              <h6 className="mt-2">40%</h6>
            </div>
          </div>
          <h4>Spring</h4>
          <div className="progress mb-3" style={{ height: '20px' }}>
            <div className="progress-bar bg-info" style={{ width: '60%' }}>
              <h6 className="mt-2">60%</h6>
            </div>
          </div>
          <h4>React</h4>
          <div className="progress mb-3" style={{ height: '20px' }}>
            <div className="progress-bar bg-info" style={{ width: '50%' }}>
              <h6 className="mt-2">50%</h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
