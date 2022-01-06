import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import JobBox from '../JobBox/JobBox';

const UserJobs = () => {

    const appliedJobs = useSelector(state => state.user.user?.appliedJobs)

    const loadDescription = () => {
        
        alert("Description Will Be Added. Just wait")
    }

    return (

        <Container>
            {
                appliedJobs?.map(appliedJob => <JobBox key={appliedJob._id} job={appliedJob} home={false} />
                )
            }
        </Container>
    );
};

export default UserJobs;