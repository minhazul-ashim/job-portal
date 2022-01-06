import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSelectedJob } from '../../features/slices/jobSlice';
import './Jobdetails.css';
import logo from '../../Images/logo.png'
import ApplyForm from '../ApplyForm/ApplyForm';

const JobDetails = ({ userProfile }) => {

    const { productId } = useParams();

    const details = useSelector(state => state.jobs.selectedJob)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getSelectedJob(productId))
    }, []);

    return (
        <Container>
            <div className="d-flex align-items-center text-start p-5 shadow-lg rounded-3 mt-4">
                <div className="thumb">
                    <img className="w-100 companyLogo" src={logo} alt="Company Logo" />
                </div>
                <div className="ms-4">
                    <h4>{details.title}</h4>
                    <div className="d-flex">
                        <div className="me-2 text-secondary">
                            <i className="fas fa-map-marker-alt me-2"></i>
                            <span>{details.location}</span>
                        </div>
                        <div className="me-2 text-secondary">
                            <i className="far fa-clock me-2"></i>
                            <span>{details.job}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-start p-5 shadow-lg rounded-3 mb-5">
                <h4>Job Description</h4>
                <h6>Company: {details.company}</h6>
                <p>Posting Date: {details.postingDate}</p>
                <p className="jobDescription text-secondary mt-4">{details.desc}</p>
                <p className="text-secondary">Deadline: {details.deadline}</p>

                <div className="mt-5">
                    {
                        !userProfile ?
                            <ApplyForm productId={productId} /> :
                            <>

                            </>
                    }
                </div>
            </div>
        </Container>
    );
};

export default JobDetails;