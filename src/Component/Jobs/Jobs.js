import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../features/slices/jobSlice';

const Jobs = () => {

    const dispatch = useDispatch()

    const jobs = useSelector(state => state.jobs.jobs)

    console.log(jobs)

    useEffect(() => {

        dispatch(getJobs())
    }, [])

    return (
        <div>
            <h1>Browse Jobs From Here</h1>
        </div>
    );
};

export default Jobs;