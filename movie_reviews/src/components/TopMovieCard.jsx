import React, { Component } from 'react';

class TopMovieCard extends Component {
  render() {
    const {
      collapseIndex,
      onClick,
      clickIndex,
      imgSrc,
      titleText,
      isOpen
    } = this.props;

    return (
      <div className="card border-right-0 border-left-0">
        <div
          className={
            collapseIndex === clickIndex ? 'card-header d-none' : 'card-header'
          }
          id={'heading' + clickIndex}
        >
          <h2 className="mb-0">
            <button
              className="btn btn-link"
              type="button"
              data-toggle="collapse"
              data-target={'#collapse' + clickIndex}
              aria-expanded="true"
              aria-controls={'collapse' + clickIndex}
              onClick={() => onClick({ clickIndex })}
            >
              <span className="font-kor">{titleText}</span>
            </button>
          </h2>
        </div>

        <div
          id={'collapse' + clickIndex}
          className={
            isOpen === true
              ? 'collapse no-transition show'
              : 'collapse no-transition'
          }
          aria-labelledby={'heading' + clickIndex}
          data-parent="#accordionExample"
        >
          <div className="card-body">
            <div className="row">
              <div className="col-3 ">
                <img src={imgSrc} alt="" className="img-fluid" />
              </div>
              <div className="col-9 ">
                <div className="row p-1">
                  <i className="fa fa-star pt-1" />
                  <i className="fa fa-star pt-1" />
                  <i className="fa fa-star pt-1" />
                  <i className="fa fa-star pt-1" />
                  <i className="fa fa-star pt-1" />
                  <span className="font-eng ml-2"> 10/10</span>
                </div>
                <a href="#" className="row pt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                </a>
                <a href="#" className="row pt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                </a>
                <a href="#" className="row pt-1">
                  Lorem ipsum, dolor sit amet consectetur adipisicing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopMovieCard;
