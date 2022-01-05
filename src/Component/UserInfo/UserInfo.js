import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {

    const user = useSelector(state => state.user.user)

    return (
        <div className="text-start m-2">
            <h4>Name: {user.name}</h4>
            <h5 className="text-secondary">Email: {user.email}</h5>
        </div>
    );
};

export default UserInfo;