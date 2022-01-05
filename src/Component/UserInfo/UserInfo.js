import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {

    const appliedJobs = useSelector(state => state.user.user)

    return (
        <div>
            <h1>This is user info</h1>
        </div>
    );
};

export default UserInfo;