import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../Images/logo.png";

const Footer = () => {
    return (
        <div>
            <Row>
                <Col xs={12} md={3}>
                    <Link to="/home">
                        <img className="w-100" src={logo} alt="Main Logo" />
                    </Link>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;
