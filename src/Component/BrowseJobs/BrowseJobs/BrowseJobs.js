import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Jobs from '../Jobs/Jobs';
import './BrowseJobs.css';

const BrowseJobs = () => {
    return (
        <Container>
            <h1>Discover jobs for you</h1>
            <h5 className="text-primary mb-5">Browse 4536+ Top Jobs In all World</h5>
            <Row>
                <Col xs={12} md={12} lg={6} className="mx-auto">
                    <InputGroup className="my-3">
                        <FormControl placeholder="Search By Job Title" style={{borderRadius:"300px",marginright:"5px", padding:"8px", paddingLeft:"30px"}}/>
                        <Button style={{borderRadius:"300px",marginLeft:"5px"}}>Search Job</Button>
                    </InputGroup>
                </Col>
            </Row>
            <div className="mb-5 mt-3 jobCategory">
                <Link to="/browseJobs">
                    All Jobs
                </Link>
                <Link to="/browseJobs">
                    Creative & Art
                </Link>
                <Link to="/browseJobs">
                    Programming & IT
                </Link>
                <Link to="/browseJobs">
                    Corporate
                </Link>
                <Link to="/browseJobs">
                    Finance
                </Link>
                <Link to="/browseJobs">
                    Medical
                </Link>
                <Link to="/browseJobs">
                    Marketing
                </Link>
               <hr className="w-75 mx-auto"/>
            </div>
             <div>
                <Routes>
                    <Route path="/" element={<Jobs />}/>
                </Routes>
             </div>
        </Container>
    );
};

export default BrowseJobs;