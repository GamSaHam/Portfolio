import React, { Component } from 'react';

class Resume extends Component {
  state = {};
  render() {
    return (
      <div id="resume" className="row">
        <div className="card card-body bg-success text-white py-5">
          <h2>My Resume</h2>
          <p class="lead">
            이력서 관련항목입니다. 출신학교 및 경력사항에 관한 내용을 표기 하고
            있습니다.
          </p>
        </div>

        <div className="card card-body py-5">
          <h3>출신학교 정보</h3>
          <p />
          <div className="card-deck inline">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">영동일고등학교</h4>

                <p className="p-2 mb-3 bg-dark text-white">문과 개근상</p>
                <p className="p-2 mb-3 bg-dark text-white">
                  소재지: 서울특별시
                </p>
              </div>
              <div className="card-footer">
                <h6 className="text-muted">Dates: 2007.02 ~ 2010.02</h6>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h4 className="card-title">우송대학교</h4>

                <p className="p-2 mb-3 bg-dark text-white">
                  학과:게임멀티디미어
                </p>
                <p className="d-flex justify-content-between p-2 mb-3 bg-dark text-white">
                  성적:4.0/4.5{' '}
                  <a href="#" className="btn btn-outline-light">
                    <i className="fas fa-download ml-1 mt-1" />
                  </a>
                </p>
                <p className="p-2 mb-3 bg-dark text-white">
                  소재지: 대전광역시
                </p>
              </div>
              <div className="card-footer">
                <h6 className="text-muted">Dates: 2010.03 ~ 2018.02</h6>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-body py-5">
          <h3>경력사항</h3>
          <p />
          <div className="card-deck">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">(주)퍼플랩</h4>
                <p className="card-text">
                  모바일게임인 무한돌파 삼국지에 라이브 서비스팀에 들어가
                  유지보수 및 신규 콘텐츠를 제작하였습니다.
                </p>
                <p className="p-2 mb-3 bg-dark text-white">
                  Position: 게임 클라이언트 개발자
                </p>
                <p className="p-2 mb-3 bg-dark text-white">
                  주소: 서울시 강남구 테헤란로8길 37
                </p>
              </div>
              <div className="card-footer">
                <h6 className="text-muted">Dates: 2014.12 - 2015.10</h6>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h4 className="card-title">(주)피디케이리미티드</h4>
                <p className="card-text">
                  연구원으로 근무를 하였으며 아두이노와 Unity3D를 활용하여 국책
                  과제를 수행하 였습니다.
                </p>
                <p className="p-2 mb-3 bg-dark text-white">
                  Position: 소프트웨어 개발자
                </p>
                <p className="p-2 mb-3 bg-dark text-white">
                  주소: 서울특별시 구로구 디지털로 285
                </p>
              </div>
              <div className="card-footer">
                <h6 className="text-muted">Dates: 2014.12 - 2015.10</h6>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Web Designer Pros</h4>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolor, magnam.
                </p>
                <p className="p-2 mb-3 bg-dark text-white">
                  Position: Web Designer
                </p>
                <p className="p-2 mb-3 bg-dark text-white">
                  Phone: (333) 333-3333
                </p>
              </div>
              <div className="card-footer">
                <h6 className="text-muted">Dates: 2010 - 2013</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
