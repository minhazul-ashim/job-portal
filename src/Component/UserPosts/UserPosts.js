import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteJob } from '../../features/slices/jobSlice';
import useAuth from '../../hooks/useAuth';

const UserPosts = () => {

    const postedJobs = useSelector(state => state.user.user?.postedJobs);

    const [expand, setExpand] = useState(false)

    const { user } = useAuth()

    const email = user?.email

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const loadDescription = () => {

        setExpand(!expand)
    }

    return (
        <Container>
            {
                postedJobs?.length ?
                    postedJobs.map(job =>
                        <div className="text-start border mb-3 px-5 py-5 rounded-3 shadow-lg" key={job.company}>
                            <h3>Position: {job.title}</h3>
                            <h5>Company: {job.company}</h5>
                            <div className="d-flex text-secondary">
                                <h6>Location: {job.location}</h6>
                                <h6 className="ms-5">Posting Date: {job.postingDate}</h6>
                            </div>
                            <div className="d-flex">
                                <h6>{job.job} ( {job.jobType} )</h6>
                                <h6 className="text-danger ms-3">Deadline: {job.deadline}</h6>

                            </div>
                            <h4 className="mt-3">Job Description</h4>
                            <p className="text-secondary">
                                {expand ? job?.desc : job?.desc.slice(0, 200)}
                            </p>
                            <Button onClick={loadDescription} variant="primary mb-3">Load More</Button>
                            <Button onClick={() => dispatch(deleteJob({ email, job }))} variant="danger mb-3 ms-2">Remove Post</Button>
                        </div>
                    ) :
                    <>
                        <h4>Seems like you have not posted any jobs yet!</h4>
                        <Button onClick={() => navigate('/postjob')}>
                            Post Job
                        </Button>
                    </>
            }
        </Container>
    );
};

export default UserPosts;