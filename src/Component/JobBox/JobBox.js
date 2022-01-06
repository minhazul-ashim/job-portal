import React from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteBookmark, postBookmark } from '../../features/slices/userDataSlice';
import useAuth from '../../hooks/useAuth';
import logo from '../../Images/logo.png'

const JobBox = ({ job, home, bookmark }) => {

    const { user } = useAuth()

    const email = user?.email

    const dispatch = useDispatch()

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
                    {
                        home ?
                        <div className="me-2">
                        <span>Candidates Applied: {job.candidates?.length || 0}</span>
                    </div> :
                    ''
                    }
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
                                <Button variant="warning" className='btn btn-sm d-block mt-2'
                                    onClick={() => dispatch(postBookmark({ email, job }))}>
                                    Bookmark
                                </Button>
                            </> :
                            <>
                                <Button
                                    variant="warning" className='btn btn-sm d-block'
                                    onClick={() => navigate(`/jobDetails/${job._id}`)}>
                                    Detail
                                </Button>
                                {
                                    bookmark ?
                                        <Button variant="success" className='btn btn-sm d-block mt-2'
                                            onClick={() => dispatch(deleteBookmark({ email, job }))}>
                                            Unmark
                                        </Button> :
                                        ''
                                }
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