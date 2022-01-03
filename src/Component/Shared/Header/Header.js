import React from "react";
import {
    Button,
    ButtonGroup,
    Container,
    Dropdown,
    Nav,
    Navbar,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../Images/logo.png";
import './Header.css'

const Header = () => {

    const { user, logOut } = useAuth();

    const navigate = useNavigate()

    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            bg="dark"
            variant="dark"
            sticky="top"
        >
            <Container>
                <Navbar.Brand>
                    <Link to="/home">
                        <img className="w-100" src={logo} alt="Main Logo" />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/home">
                            <Button variant="outline-primary text-light border-0 mx-1">
                                Home
                            </Button>
                        </Link>
                        <Link to="/jobs">
                            <Button variant="outline-primary text-light border-0 mx-1">
                                Browse Jobs
                            </Button>
                        </Link>
                        <Link to="/about">
                            <Button variant="outline-primary text-light border-0 mx-1">
                                About
                            </Button>
                        </Link>
                        <Link to="/blogs">
                            <Button variant="outline-primary text-light border-0 mx-1">
                                Blogs
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="outline-primary text-light border-0 mx-1">
                                Contact
                            </Button>
                        </Link>
                    </Nav>
                    <Nav className="d-flex">
                        {!user ? (
                            <Link to="/login">
                                <Button className="m-2">Login</Button>
                            </Link>
                        ) :
                            <>
                                <Dropdown align='end' as={ButtonGroup} className='mx-auto d-flex flex-column'>

                                    <div className="toggle-container">
                                        <div className="dp-container">
                                            <img src={user?.photoURL} alt="" className="dp" />
                                        </div>

                                        <Dropdown.Toggle className="dd-toggle" variant="dark" />
                                    </div>

                                    <Dropdown.Menu variant='dark'>

                                        <Dropdown.Item onClick={() => navigate('/profile')}>My Profile</Dropdown.Item>

                                        <Dropdown.Item onClick={() => navigate('/postjob')}>Post A Job</Dropdown.Item>

                                        <Dropdown.Divider />

                                        <Dropdown.Item onClick={logOut}>Log Out</Dropdown.Item>

                                    </Dropdown.Menu>
                                </Dropdown>
                            </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
