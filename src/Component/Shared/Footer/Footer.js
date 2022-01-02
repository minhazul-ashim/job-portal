import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";

const Footer = () => {
    return (
        <div className="bg-dark pt-5 pb-2">
            <Container>
                <Row className="mx-auto">
                    <Col xs={12} md={3} className="text-light">
                        <Link to="/home">
                            <img className="w-30" src={logo} alt="Main Logo" />
                        </Link>
                        <p>
                            We collect reviews from our users go you can get an
                            honest opinion of what an experience with our
                            website.
                        </p>
                    </Col>
                    <Col xs={12} md={3} className="text-light">
                        <h5>Quick Links</h5>
                        <a href="#" className="text-decoration-none">Work</a> <br />
                        <a href="#" className="text-decoration-none">Services</a> <br />
                        <a href="#" className="text-decoration-none">Products</a> <br />
                        <a href="#" className="text-decoration-none">Tips & Tricks</a> <br />
                    </Col>
                    <Col xs={12} md={3} className="text-light">
                        <h5>For Employers</h5>
                        <a href="#" className="text-decoration-none">Air Frieght</a> <br />
                        <a href="#" className="text-decoration-none">Ocean Freight</a> <br />
                        <a href="#" className="text-decoration-none">Large Projects</a> <br />
                        <a href="#" className="text-decoration-none">Job Packages</a> <br />
                    </Col>
                    <Col xs={12} md={3} className="text-light">
                        <h5>For Candidates</h5>
                        <a href="#" className="text-decoration-none">Browse Jobs</a> <br />
                        <a href="#" className="text-decoration-none">Ocean Freight</a> <br />
                        <a href="#" className="text-decoration-none">Candidate Dashboard</a> <br />
                        <a href="#" className="text-decoration-none">Large Projects</a> <br />
                        <a href="#" className="text-decoration-none">Job Alerts</a> <br />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
