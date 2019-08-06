import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'


import mlogo from "../img/mlogo.png";

class Contact extends Component {
    state = {}
    render() {
        return (<section id="contact" class="bg-light py-5">
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                        <h3>Get In Touch</h3>
                        <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, aliquam.</p>
                        <form>
                            <div class="input-group input-group-lg mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <FontAwesomeIcon icon={faUser} />
                                    </span>
                                </div>
                                <input type="text" class="form-control" placeholder="Name"></input>
                            </div>

                            <div class="input-group input-group-lg mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                </div>
                                <input type="text" class="form-control" placeholder="Email"></input>
                            </div>

                            <div class="input-group input-group-lg mb-3">
                                <div class="input-group-prepend">
                                    <span class="input-group-text">
                                        <FontAwesomeIcon icon={faPencilAlt} />
                                    </span>
                                </div>
                                <textarea type="text" class="form-control" placeholder="Message" rows="5"></textarea>
                            </div>

                            <input type="submit" value="Submit" class="btn btn-primary btn-block btn-lg"></input>

                        </form>
                    </div>

                    <div class="col-lg-3 align-self-center">
                        <img src={mlogo} alt="" class="img-fluid"></img>
                    </div>

                </div>
            </div>
        </section>);
    }
}

export default Contact;




