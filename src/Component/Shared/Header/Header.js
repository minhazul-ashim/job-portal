import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/logo.png'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/home"><img className="w-100" src={logo} alt="Main Logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/home">
                            <Button variant="outline-primary text-light border-0 mx-1">Home</Button>
                        </Link>
                        <Link to="/jobs">
                            <Button variant="outline-primary text-light border-0 mx-1">Browse Jobs</Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="outline-primary text-light border-0 mx-1">About</Button>
                        </Link>
                        <Link to="/blogs">
                            <Button variant="outline-primary text-light border-0 mx-1">Blogs</Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline-primary text-light border-0 mx-1">Contact</Button>
                        </Link>
                    </Nav>
                    <Nav>
                        <Link to="/login">
                            <Button className="m-2">Login</Button>
                        </Link>
                        <Link to="/postjob">
                            <Button className="m-2">Post A Job</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;