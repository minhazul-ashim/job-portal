import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import logo from '../../Images/logo.png'

const JobBox = ({ job, home }) => {

    const navigate = useNavigate()

    return (
        <div className="d-flex justify-content-between my-3 p-3 jobRow" key={job._id}>
            <div className="d-flex align-items-center text-start">
                <div className="thumb">
                    <img className="w-100 companyLogo" src={logo} alt="Company Logo" />
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
                    {
                        home ?
                            <>
                                <Button variant="success" className='btn btn-sm d-block'
                                    onClick={() => navigate(`/jobDetails/${job._id}`)}>
                                    Apply Now
                                </Button>
                                <Button>
                                    Bookmark
                                </Button>
                            </> :
                            <>
                                <Button>
                                    Unmark
                                </Button>
                            </>
                    }
                    <small className="text-danger mt-2 d-block">Deadline: {job.deadline}</small>
                    <small className="text-secondary mt-2">Posted: {job.postingDate}</small>
                </div>
            </div>
        </div>
    );
};

export default JobBox;