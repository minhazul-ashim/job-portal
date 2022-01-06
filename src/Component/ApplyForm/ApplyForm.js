import React from 'react';
import { Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import swal from 'sweetalert';
import { postCandidateInfo } from '../../features/slices/jobSlice';
import useAuth from '../../hooks/useAuth';

const ApplyForm = ({productId}) => {

    const dispatch = useDispatch()

    const { user } = useAuth()

    const email = user?.email

    const handleSubmit = (e) => {

        const myForm = e.target

        const formData = new FormData(myForm)

        dispatch(postCandidateInfo({ formData, productId, email }))

        e.preventDefault();
        swal(`Applied Successfully! Hold Tight! Recruiters will contact you soon`);
    }

    return (
        <div>
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
    );
};

export default ApplyForm;