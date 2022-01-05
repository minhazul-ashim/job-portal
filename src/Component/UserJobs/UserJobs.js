import React from 'react';
import { useSelector } from 'react-redux';

const UserJobs = () => {

    const appliedJobs = useSelector(state => state.user.user?.appliedJobs)

    console.log(appliedJobs)

    return (
        <div>
            <h1>This is user jobs</h1>
        </div>
    );
};

export default UserJobs;