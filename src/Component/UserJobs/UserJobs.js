import React from 'react';
import { Button, Container} from 'react-bootstrap';
import { useSelector } from 'react-redux';

const UserJobs = () => {

    const appliedJobs = useSelector(state => state.user.user?.appliedJobs)
    const loadDescription=()=>{
        alert("Description Will Be Added. Just wait")
    }

    return (
        
        <Container>
        {
            appliedJobs.map(appliedJob=>
            <div className="text-start border mb-3 px-4 py-2 rounded-3" key={appliedJob._id}>
                <h3>Position: {appliedJob.title}</h3>
                <h5>Company: {appliedJob.company}</h5>
                <div className="d-flex text-secondary">
                    <h6>Location: {appliedJob.location}</h6>
                    <h6 className="ms-5">Posting Date: {appliedJob.postingDate}</h6>
                </div>
                <div className="d-flex">
                    <h6>{appliedJob.job} ( {appliedJob.jobType} )</h6>
                    <h6 className="text-danger ms-3">Deadline: {appliedJob.deadline}</h6>
                    
                </div>
                    <h4 className="mt-3">Job Description</h4>
                    <p className="text-secondary">{appliedJob.desc.slice(0,300)}</p>
                    <Button onClick={loadDescription} variant="primary mb-3">Load More</Button>
            </div>        
        )
        }
        </Container>
    );
};

export default UserJobs;