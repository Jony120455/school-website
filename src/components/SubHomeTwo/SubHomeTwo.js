import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './SubHomeTwo.css'


const SubHomeTwo = () => {
    return (
        <div className="text-center">
            <h1>How we care Children</h1>
            <Container>
            <Row xs={1} md={2} className="g-4">
                        <Col>
                            <div className="carD">
                                <Card.Body>
                                <Card.Title>Basic</Card.Title>
                                <Card.Text>
                                    First we teach about the theory about the topic of Sub.and we justify their capacity.
                                </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col>
                            <div className="carD">
                                <Card.Body>
                                <Card.Title>Practical class</Card.Title>
                                <Card.Text>
                                    After finishing first class, We apply practical class
                                </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col>
                            <div className="carD">
                                <Card.Body>
                                <Card.Title>Professional training</Card.Title>
                                <Card.Text>
                                   All teacher are Professional are there
                                </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                        <Col>
                            <div className="carD">
                                <Card.Body>
                                <Card.Title>Exam</Card.Title>
                                <Card.Text>
                                    Every week we exam and class test
                                </Card.Text>
                                </Card.Body>
                            </div>
                        </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SubHomeTwo;