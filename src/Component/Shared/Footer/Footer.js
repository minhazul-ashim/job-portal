import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="bg-dark pt-5 pb-3">
            <Container>
                <Row className="mx-auto text-start d-flex align-items-center">
                    <Col xs={12} md={3} className="text-light text-center text-md-left">
                        <Link to="/home">
                            <img className="w-30" src={logo} alt="Main Logo" />
                        </Link>
                        <p className="mt-3" style={{ textAlign: 'justify' }}>
                            We collect reviews from our users go you can get an
                            honest opinion of what an experience with our
                            website.
                        </p>
                    </Col>
                    <Col xs={4} md={3} className="link-text p-4">
                        <h5>Quick Links</h5>
                        <a href="#">Work</a> <br />
                        <a href="#">Services</a> <br />
                        <a href="#">Products</a> <br />
                        <a href="#">Tips & Tricks</a> <br />
                    </Col>
                    <Col xs={4} md={3} className="link-text p-4">
                        <h5>For Employers</h5>
                        <a href="#">Air Frieght</a> <br />
                        <a href="#">Large Projects</a> <br />
                        <a href="#">Job Packages</a> <br />
                    </Col>
                    <Col xs={4} md={3} className="link-text p-4">
                        <h5>For Candidates</h5>
                        <a href="#">Browse Jobs</a> <br />
                        <a href="#">Dashboard</a> <br />
                        <a href="#">Large Projects</a> <br />
                        <a href="#">Job Alerts</a> <br />
                    </Col>
                </Row>
                <hr className="text-light mt-3" />
                <small className="text-light">&copy; All Rights Reserved.</small>
            </Container>
        </div>
    );
};

export default Footer;
