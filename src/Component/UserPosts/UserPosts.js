import React from 'react';
import { useSelector } from 'react-redux';

const UserPosts = () => {

    const postedJobs = useSelector(state => state.user.user?.postedJobs)

    console.log(postedJobs)

    return (
        <div>
            <h1>This is user posts</h1>
        </div>
    );
};

export default UserPosts;