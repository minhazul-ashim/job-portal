import React, { useEffect } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { getSelectedJob, postCandidateInfo } from '../../features/slices/jobSlice';
import useAuth from '../../hooks/useAuth';
import './Jobdetails.css';
import logo from '../../Images/logo.png'

const JobDetails = () => {

    const { productId } = useParams();

    const { user } = useAuth()

    const { email } = user;

    const details = useSelector(state => state.jobs.selectedJob)

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getSelectedJob(productId))
    }, []);


    const handleSubmit = (e) => {

        const myForm = e.target

        const formData = new FormData(myForm)

        dispatch(postCandidateInfo({ formData, productId, email }))

        e.preventDefault();
        swal(`Applied Successfully! Hold Tight! Recruiters will contact you soon`);
    }

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
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={6} md={12}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Control type="name" placeholder="Your Name" className="py-3" required name='candidateName' />
                                </Form.Group>
                            </Col>
                            <Col lg={6} md={12}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" className="py-3" required name='candidateEmail' />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formFile" className="mb-3">
                            <Form.Label>Upload Resume</Form.Label>
                            <Form.Control type="file" required name='candidateResume' />
                        </Form.Group>
                        <Form.Control type="text" placeholder="Your Portfolio Link" name='candidatePortfolio' className="py-3" />
                        <FloatingLabel controlId="floatingTextarea2" label="Cover Letter" className="mt-3">
                            <Form.Control as="textarea" style={{ height: '200px' }} name='candidateCoverLetter' />
                        </FloatingLabel>
                        <input type="submit" value="Apply Now" className="btn btn-success mt-3 py-2 px-5" />
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default JobDetails;