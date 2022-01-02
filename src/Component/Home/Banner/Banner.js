import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import banner from '../../../Images/banner.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div style={{backgroundImage: `url("https://i.ibb.co/C1C8mnZ/bannerBG.png")`,backgroundPosition:"center center", backgroundSize:"cover", paddingTop:"100px"}}>
            <Container>
                <Row>
                    <Col xs={12} md={6} className="text-light text-start mt-5">
                        <h4 style={{marginTop:"50px"}}>4536+ Jobs listed</h4>
                        <h1 style={{fontSize:"60px",lineHeight:"60px",marginTop:"20px"}}>Find Your Next</h1>
                        <h1 style={{fontSize:"60px",lineHeight:"60px"}}>Dream Job</h1>
                        <Link to="/jobs">
                            <Button className="my-4 fs-5" variant="warning">Looking For a Job?</Button>
                        </Link>
                    </Col>
                    <Col xs={12} md={6}>
                        <img className="w-100 mt-4" src={banner} alt="Home Banner" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;