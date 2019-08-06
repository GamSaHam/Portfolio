import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return (
            <footer id="main-footer" className="py-5 bg-primary text-white">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-6 ml-auto">
                            <p className="lead">Copyright &copy; <span id="year"></span></p>
                        </div>
                    </div>
                </div>

            </footer>);
    }
}

export default Footer;







