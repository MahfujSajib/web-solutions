import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import image from '../../images/bt.jpg'

const Advisory = () => {
    return (
        <Container>
            <h4>Advisory and Consulting</h4>
            <Row>
                <Col>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Business Transformation</Card.Title>
                        <Card.Text>
                            Develop the strategic value of your people
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Business Transformation</Card.Title>
                        <Card.Text>
                            Develop the strategic value of your people
                        </Card.Text>
                    </Card.Body>
                </Col>
                <Col>
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>Business Transformation</Card.Title>
                        <Card.Text>
                            Develop the strategic value of your people
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Container>

    );
};

export default Advisory;

{/*  */ }