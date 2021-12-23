import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <Navbar style={{ backgroundColor: "white" }} collapseOnSelect expand="lg">
            <Container>
                <img src={logo} alt="" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="m-auto">
                        <Link className='nav' to='/solutions'>Solutions</Link>
                        <Link className='nav' to='/services'>Services</Link>
                        <Link className='nav' to='/portfolio'>Portfolio</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;