
import React, { Component } from 'react';

class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-light fixed-top py-4" id="main-nav">
                <div class="container">
                    <a href="#home" class="navbar-brand"><img src="img/mlogo.png" width="50" height="50" alt=""></img><h3 class="d-inline align-middle">Mizuxe</h3></a>

                    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav ml-auto">

                            <li class="nav-item">
                                <a href="#home" class="nav-link">Home</a>
                            </li>

                            <li class="nav-item">
                                <a href="#about" class="nav-link">About</a>
                            </li>

                            <li class="nav-item">
                                <a href="#authors" class="nav-link">Authors</a>
                            </li>

                            <li class="nav-item">
                                <a href="#contact" class="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>);
    }
}

export default Navbar;

