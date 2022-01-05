import React from 'react';
import { useSelector } from 'react-redux';

const UserInfo = () => {

    const user = useSelector(state => state.user.user)

    console.log(user)

    return (
        <div>
            <h1>This is user info</h1>
        </div>
    );
};

export default UserInfo;