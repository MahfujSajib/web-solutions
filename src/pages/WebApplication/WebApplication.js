import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import mockup1 from '../../images/mockup1.png';
import mockup2 from '../../images/mockup2.png';
import mockup3 from '../../images/mockup3.png';
import './WebApplication.css'

const WebApplication = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <img className='mockup' src={mockup1} alt="" />
                </Col>
                <Col>
                    <img className='mockup' src={mockup2} alt="" />
                </Col>
                <Col>
                    <img className='mockup' src={mockup3} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default WebApplication;