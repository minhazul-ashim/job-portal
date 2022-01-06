import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png'

const JobBox = ({job}) => {
    return (
        <div className="d-flex justify-content-between my-3 p-3 jobRow" key={job._id}>
                        <div className="d-flex align-items-center text-start">
                            <div className="thumb">
                                <img className="w-100 companyLogo" src={logo} alt="Company Logo"/>
                            </div>
                            <div className="ms-4">
                                <h4>{job.title}</h4>
                                <h6>{job.company}</h6>
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
                                <Link to={`/jobDetails/${job._id}`}> 
                                    <Button variant="success">Apply Now</Button>
                                </Link>
                                <p className="text-secondary mt-2">Deadline: {job.deadline}</p>
                                <p className="text-secondary mt-2">Posted: {job.postingDate}</p>
                            </div>
                        </div>
                    </div>
    );
};

export default JobBox;