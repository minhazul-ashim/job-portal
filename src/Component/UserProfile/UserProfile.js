import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getUserData } from '../../features/slices/userDataSlice';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {

    const data = useSelector(state => state.user.user)

    const { user } = useAuth()

    const dispatch = useDispatch()

    console.log(data)

    useEffect(() => {

        dispatch(getUserData(user.email))
    }, [])

    return (
        <Container>

            <h1>This is user Profile</h1>

        </Container>
    );
};

export default UserProfile;