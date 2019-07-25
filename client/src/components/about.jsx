import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

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

                            <Accordion defaultActiveKey="0">

                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className="bg-transparent border-bottom-0">
                                            <h5 className="mb-0">
                                                <FontAwesomeIcon icon={faArrowCircleDown} />Get Inspired
                                            </h5>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt velit minima quaerat
                                            dolorem quidem culpa exercitationem eius quod esse, aliquid voluptates fugiat nostrum autem
                                            consequatur labore doloribus omnis vitae asperiores optio error nam blanditiis dignissimos? Cum, nam
                                            odio alias atque blanditiis itaque minus nihil, molestiae nesciunt accusamus temporibus
                                            necessitatibus!
                                        </Card.Body>
                                    </Accordion.Collapse>

                                </Card>

                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Card.Header} eventKey="1" className="bg-transparent border-bottom-0">
                                            <h5 className="mb-0">
                                                <FontAwesomeIcon icon={faArrowCircleDown} />Gain The Knowledge
                                            </h5>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="1">
                                        <Card.Body>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt velit minima quaerat
                                            dolorem quidem culpa exercitationem eius quod esse, aliquid voluptates fugiat nostrum autem
                                            consequatur labore doloribus omnis vitae asperiores optio error nam blanditiis dignissimos? Cum, nam
                                            odio alias atque blanditiis itaque minus nihil, molestiae nesciunt accusamus temporibus
                                            necessitatibus!
                                        </Card.Body>
                                    </Accordion.Collapse>

                                </Card>

                                <Card>
                                    <Card.Header>
                                        <Accordion.Toggle as={Card.Header} eventKey="2" className="bg-transparent border-bottom-0">
                                            <h5 className="mb-0">
                                                <FontAwesomeIcon icon={faArrowCircleDown} />Open Your Mind
                                            </h5>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="2">
                                        <Card.Body>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt velit minima quaerat
                                            dolorem quidem culpa exercitationem eius quod esse, aliquid voluptates fugiat nostrum autem
                                            consequatur labore doloribus omnis vitae asperiores optio error nam blanditiis dignissimos? Cum, nam
                                            odio alias atque blanditiis itaque minus nihil, molestiae nesciunt accusamus temporibus
                                            necessitatibus!
                                        </Card.Body>
                                    </Accordion.Collapse>

                                </Card>



                            </Accordion>

                        </div>
                    </div>
                </div>
            </section>);
    }
}

export default About;


