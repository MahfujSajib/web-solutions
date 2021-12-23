import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './NavigationBar.css'

const NavigationBar = () => {
    return (
        <div className='position'>
            <Navbar className='navigation' collapseOnSelect expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} style={{ color: "white" }} className='navbar' to="#webapp">Web Applications</Nav.Link>
                            <Nav.Link as={HashLink} style={{ color: "white" }} className='navbar' to="#mobileapp">Mobile Applications</Nav.Link>
                            <Nav.Link as={HashLink} style={{ color: "white" }} className='navbar' to="#creative">Creative</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;