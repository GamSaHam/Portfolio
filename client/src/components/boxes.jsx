import React, { Component } from 'react';

class Boxes extends Component {
    state = {}
    render() {
        return (
            <section id="boxes" className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card text-center border-primary mb-resp">
                                <div className="card-body">
                                    <h3 className="text-primary">Be Better</h3>
                                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, earum.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card text-center bg-primary text-white mb-resp">
                                <div className="card-body">
                                    <h3>Be Smarter</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, earum.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card text-center border-primary mb-resp">
                                <div className="card-body">
                                    <h3 className="text-primary">Be Faster</h3>
                                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, earum.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="card text-center bg-primary text-white">
                                <div className="card-body">
                                    <h3>Be Stroner</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, earum.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>);
    }
}

export default Boxes;