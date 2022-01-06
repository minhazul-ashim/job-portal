import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import JobBox from '../JobBox/JobBox';

const UserJobs = () => {

    const appliedJobs = useSelector(state => state.user.user?.appliedJobs)

    const navigate = useNavigate()

    return (

        <Container>
            {
                appliedJobs ?
                    appliedJobs?.map(appliedJob => <JobBox key={appliedJob._id} job={appliedJob} home={false} />
                    ) :
                    <>
                        <h4>No Jobs Found!</h4>
                        <Button onClick={() => navigate('/browseJobs')}>
                            Browse jobs
                        </Button>
                    </>
            }
        </Container>
    );
};

export default UserJobs;