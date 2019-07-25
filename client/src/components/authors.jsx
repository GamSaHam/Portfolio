import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

import person1 from "../img/person1.jpg";
import person2 from "../img/person2.jpg";
import person3 from "../img/person3.jpg";
import person4 from "../img/person4.jpg";

import "./authors.scss";

class Authors extends Component {
    state = {}
    render() {
        return (

            <section id="authors" className="my-5 text-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="info-header mb-5">
                                <h1 className="text-primary pb-3">
                                    Meet The Authors
                        </h1>
                                <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quis fugiat architecto unde in
                                  quam!
                    </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src={person1} alt="" className="img-fluid rounded-circle w-50 mb-3"></img>
                                    <h3>Susan Williams</h3>
                                    <h3 className="text-muted">Load Writer</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto accusamus culpa a ea sunt?
                                    </p>


                                    <div className="d-flex justify-content-center">
                                        <div className="p-4">
                                            <a href="http://facebook.com"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
                                        </div>
                                        <div className="p-4">
                                            <a href="http://twitter.com"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
                                        </div>
                                        <div className="p-4">
                                            <a href="http://instagram.com"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src={person2} alt="" className="img-fluid rounded-circle w-50 mb-3"></img>
                                    <h3>Grace Smith</h3>
                                    <h3 className="text-muted">Co-Writer</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto accusamus culpa a ea sunt?
                  </p>
                                    <div className="d-flex justify-content-center">
                                        <div className="p-4">
                                            <a href="http://facebook.com"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
                                        </div>
                                        <div className="p-4">
                                            <a href="http://twitter.com"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
                                        </div>
                                        <div className="p-4">
                                            <a href="http://instagram.com"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src={person3} alt="" className="img-fluid rounded-circle w-50 mb-3"></img>
                                    <h3>John Doe</h3>
                                    <h3 className="text-muted">Editor</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto accusamus culpa a ea sunt?
                                    </p>
                                    <div className="d-flex justify-content-center">
                                        <div className="p-4">
                                            <a href="http://facebook.com"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
                                        </div>
                                        <div className="p-4">
                                            <a href="http://twitter.com"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
                                        </div>
                                        <div className="p-4">
                                            <a href="http://instagram.com"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <img src={person4} alt="" className="img-fluid rounded-circle w-50 mb-3"></img>
                                    <h3>Kevin Swanson</h3>
                                    <h3 className="text-muted">Desinger</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem architecto accusamus culpa a ea sunt?
                                    </p>
                                    <div className="d-flex justify-content-center">
                                        <div className="p-4">
                                            <a href="http://facebook.com"><FontAwesomeIcon icon={faFacebook} className="icon" /></a>
                                        </div>
                                        <div className="p-4">
                                            <a href="http://twitter.com"><FontAwesomeIcon icon={faTwitter} className="icon" /></a>
                                        </div>
                                        <div className="p-4">
                                            <a href="http://instagram.com"><FontAwesomeIcon icon={faInstagram} className="icon" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>);
    }
}

export default Authors;


