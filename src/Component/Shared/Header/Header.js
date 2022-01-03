import React from "react";
import {
    Button,
    Container,
    Dropdown,
    Nav,
    Navbar,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../Images/logo.png";

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"           sticky="top">
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
                        <Link to="/browseJobs">
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
                    <Nav>
                        <Link to="/postjob">
                            <Button className="m-2">Post A Job</Button>
                        </Link>
                        {!user ? (
                            <Link to="/login">
                                <Button className="m-2">Login</Button>
                            </Link>
                        ) :
                            <div className="w-25">
                                <img src={user?.photoURL} alt="" style={{ width: '100%', borderRadius: '50%' }} />
                            </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
