import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#0A0047", overflow: 'hidden' }}>
            <Row style={{ margin: "15px" }}>
                <Col>
                    <h3 style={{ color: "white" }}>Quick Links</h3>
                    <Link style={{ textDecoration: "none", color: "white" }} to="/">Home</Link>
                    <br />
                    <Link style={{ textDecoration: "none", color: "white" }} to="/solutions">Solutions</Link>
                    <br />
                    <Link style={{ textDecoration: "none", color: "white" }} to="/services">Services</Link>
                    <br />
                    <Link style={{ textDecoration: "none", color: "white" }} to="/webapp">Web Applications</Link>
                    <br />
                    <Link style={{ textDecoration: "none", color: "white" }} to="/mobileapp">Mobile Applications</Link>
                    <br />
                    <Link style={{ textDecoration: "none", color: "white" }} to="/creative">Creative</Link>
                </Col>

                <Col>
                    <div style={{ color: "white" }}>
                        <h3>Contact Us</h3>
                        <div style={{ margin: '10px' }}>
                            <h4>NewZealand(Head Quarter) :</h4>
                            <i class="fas fa-phone"> +642102362222</i>
                            <br />
                            <i class="far fa-envelope"> masum@websolutionfirm.com</i>
                            <br />
                        </div>
                        <div style={{ margin: '10px' }}>
                            <h3 >Bangladesh Office :</h3>
                            <i class="fas fa-phone"> +642102362222</i>
                            <br />
                            <i class="far fa-envelope"> info@websolutionfirm.com</i>
                        </div>
                    </div>
                </Col>
                <div style={{ color: "white" }}>
                    <h3>Follow Us :</h3>
                    <div style={{ fontSize: '30px' }}>
                        <i className="fab fa-facebook icon"></i>
                        <i style={{ margin: '5px' }} className="fab fa-twitter icon"></i>
                        <i className="fab fa-instagram icon"></i>
                    </div>
                </div>

            </Row >
            <hr style={{ color: 'white' }} />
            <h5 style={{ color: "white", textAlign: "center" }}>websolutionsfirm | All Right &copy; Reserved</h5>
        </div >
    );
};

export default Footer;