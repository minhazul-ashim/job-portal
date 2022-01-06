import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserPosts = () => {

    const postedJobs = useSelector(state => state.user.user?.postedJobs)

    const loadDescription=()=>{
        alert("Description Will Be Added. Just wait")
    }
    return (
        <Container>
        {
            postedJobs ?
            postedJobs.map(appliedJob=>
                <div className="text-start border mb-3 px-4 py-2 rounded-3" key={appliedJob.company}>
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
            ) :
            <>
            <h4>Seems like you have not posted any jobs yet!</h4>
            <h5>Post your first job offer <Link to='/postJob'>here</Link></h5>
            </>
        }
        </Container>
    );
};

export default UserPosts;