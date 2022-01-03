import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Jobs.css';

const Jobs = () => {
    const [allJobs,setAllJobs]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/browseJobs')
        .then(res=>res.json())
        .then(data=>setAllJobs(data))
    },[])
    console.log(allJobs);
    return (
        <Container className="mb-5">
            <Row>
                <Col lg={12} md={12} sm={12}>
                {
                   allJobs.map(job=>
                    <div className="d-flex justify-content-between my-3 p-3 jobRow" key={job._id}>
                        <div className="d-flex align-items-center text-start">
                            <div className="thumb">
                                <img className="w-100 companyLogo" src={job.logo} alt="Company Logo"/>
                            </div>
                            <div className="ms-4">
                                <h4>{job.title}</h4>
                                <h6>{job.company} ( {job.postingDate} )</h6>
                                <div className="d-flex">
                                    <div className="me-2 text-secondary">
                                        <i className="fas fa-map-marker-alt me-2"></i>
                                        <span>{job.location}</span>
                                    </div>
                                    <div className="me-2 text-secondary">
                                        <i className="far fa-clock me-2"></i>
                                        <span>{job.job}</span>
                                    </div>
                                </div>
                                <div className="me-2">
                                    <span>Job Type: {job.jobType}</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div>
                                <Link to="/"> 
                                    <Button variant="success">Apply Now</Button>
                                </Link>
                                <p className="text-secondary mt-2">Deadline: {job.deadline}</p>
                            </div>
                        </div>
                    </div>
                    ) 
                }
                </Col>
            </Row>
        </Container>
    );
};

export default Jobs;