import React from 'react';
import { useSelector } from 'react-redux';
import useAuth from '../../hooks/useAuth';

const UserInfo = () => {

    const { user } = useAuth()

    const dbUser = useSelector(state => state.user.user)

    return (
        <div className="text-start m-2 d-flex flex-column align-items-center">
            <div className="mb-3">
                <img className='rounded-circle' src={user?.photoURL} alt="" />
            </div>
            <h4>{dbUser?.name}</h4>
            <h6 className="text-secondary">{dbUser?.email}</h6>
            <h6>Posted Jobs : {dbUser?.postedJobs?.length}</h6>
            <h6>Applied Jobs : {dbUser?.appliedJobs?.length}</h6>
        </div>
    );
};

export default UserInfo;