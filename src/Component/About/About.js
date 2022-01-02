import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
    return (
        <Container className="my-5">
            <Container className="w-50">
                <h2 className="text-primary fw-bold"> About Job Portal</h2>
                <p>
                    Job Portal is the #1 job site in the world with over 300
                    million unique visitors every month. It's strives to put
                    job seekers first, giving them free access to search for
                    jobs, and research companies. Every day, we connect millions
                    of people to new opportunities.
                </p>
            </Container>{" "}
            <hr className="my-5" />
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                        <h1 className="text-primary fw-bold">300M</h1>
                        <p>Unique monthly visitors</p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h1 className="text-primary fw-bold">350M</h1>
                        <p>Total ratings and reviews</p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h1 className="text-primary fw-bold">10</h1>
                        <p>Jobs added per second globally</p>
                    </Col>
                    <Col xs={6} md={3}>
                        <h1 className="text-primary fw-bold">800M</h1>
                        <p>Salaries</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default About;
