import React, { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getJobs } from '../../../features/slices/jobSlice';
import JobBox from '../../JobBox/JobBox';
import './Jobs.css';

const Jobs = () => {

    const jobs = useSelector(state => state.jobs.jobs);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getJobs())
    }, [])

    return (
        <Container className="mb-5">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    {
                        jobs.map(job => <JobBox key={job._id} job={job} />
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default Jobs;