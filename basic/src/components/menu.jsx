
import React, { Component } from 'react';

import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import "./menu.scss";

import logo from "../img/mlogo.png";


class Menu extends Component {
    state = {}

    scrollAnimation = (e) => {

        console.log(e);
        if (e === "#home") {
            scroll.scrollToTop();
        } else if (e === "#about") {
            var about = document.getElementById('about');
            scroll.scrollTo(about.offsetTop - 110);
        } else if (e === "#authors") {
            var authors = document.getElementById('authors');
            scroll.scrollTo(authors.offsetTop - 150);
        } else if (e === "#contact") {
            var contact = document.getElementById('contact');
            scroll.scrollTo(contact.offsetTop - 100);
        }



    };



    render() {
        return (
            <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-md navbar-light fixed-top py-4" id="main-nav">
                <div className="container">
                    <Navbar.Brand href="#home" className="navbar-brand">
                        <img src={logo} width="50" height="50" alt=""></img>
                        <h3 className="d-inline align-middle"> Mizuxe</h3>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-nav ml-auto">
                            <Nav.Link className="nav-item" href="#home" onSelect={this.scrollAnimation}>Home</Nav.Link>
                            <Nav.Link className="nav-item" href="#about" onSelect={this.scrollAnimation}>About</Nav.Link>
                            <Nav.Link className="nav-item" href="#authors" onSelect={this.scrollAnimation}>
                                Authors
                            </Nav.Link>
                            <Nav.Link className="nav-item" href="#contact" onSelect={this.scrollAnimation}>
                                Contact
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>);
    }
}

export default Menu;

