import React, { Component } from 'react';

class About extends Component {
    state = {}
    render() {
        return (
            <section id="about" className="py-5 text-center bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="info-header mb-5">
                                <h1 className="text-primary pb-3">
                                    Why This Book?
                                    </h1>
                                <p className="lead pb-3">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, impedit odit provident aliquam
                                    consequuntur ipsa.
                                    </p>
                            </div>


                            <div id="accordion">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">
                                            <div href="#collapse1" data-toggle="collapse" data-parent="#accordion">
                                                <i className="fas fa-arrow-circle-down"></i>Get Inspired
                      </div>
                                        </h5>
                                    </div>

                                    <div id="collapse1" className="collapse show">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt velit minima quaerat
                                            dolorem quidem culpa exercitationem eius quod esse, aliquid voluptates fugiat nostrum autem
                                            consequatur labore doloribus omnis vitae asperiores optio error nam blanditiis dignissimos? Cum, nam
                                            odio alias atque blanditiis itaque minus nihil, molestiae nesciunt accusamus temporibus
                                            necessitatibus!
                    </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">
                                            <div href="#collapse2" data-toggle="collapse" data-parent="#accordion">
                                                <i className="fas fa-arrow-circle-down"></i>Gain The Knowledge
                      </div>
                                        </h5>
                                    </div>

                                    <div id="collapse2" className="collapse">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt velit minima quaerat
                                            dolorem quidem culpa exercitationem eius quod esse, aliquid voluptates fugiat nostrum autem
                                            consequatur labore doloribus omnis vitae asperiores optio error nam blanditiis dignissimos? Cum, nam
                                            odio alias atque blanditiis itaque minus nihil, molestiae nesciunt accusamus temporibus
                                            necessitatibus!
                    </div>
                                    </div>
                                </div>

                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="mb-0">
                                            <div href="#collapse3" data-toggle="collapse" data-parent="#accordion">
                                                <i className="fas fa-arrow-circle-down"></i>Open Your Mind
                      </div>
                                        </h5>
                                    </div>

                                    <div id="collapse3" className="collapse">
                                        <div className="card-body">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt velit minima quaerat
                                            dolorem quidem culpa exercitationem eius quod esse, aliquid voluptates fugiat nostrum autem
                                            consequatur labore doloribus omnis vitae asperiores optio error nam blanditiis dignissimos? Cum, nam
                                            odio alias atque blanditiis itaque minus nihil, molestiae nesciunt accusamus temporibus
                                            necessitatibus!
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

export default About;


