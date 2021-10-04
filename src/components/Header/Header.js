import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink,useHistory } from 'react-router-dom';
import './Header.css'
const Header = () => { 
    const history = useHistory()
    return (

        // nav bar start 
        <Navbar bg="secondary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Polash Cadet School</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <NavLink className="text-decoration-none mx-3 text-light" to="/home">Home</NavLink>
                    <NavLink className="text-decoration-none mx-3 text-light" to="/about">About</NavLink>
                    <NavLink className="text-decoration-none mx-3 text-light" to="/services">Services</NavLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;