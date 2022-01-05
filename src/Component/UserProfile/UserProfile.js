import React, { useEffect } from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { getUserData } from '../../features/slices/userDataSlice';
import useAuth from '../../hooks/useAuth';

const UserProfile = () => {

    const { user } = useAuth()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const dbUser = useSelector(state => state.user.user)

    useEffect(() => {

        dispatch(getUserData(user?.email))
    }, [user])

    return (
        <>
            <Row className='p-5'>
                <Col xs={12} md={4}>
                    <ListGroup>
                        <ListGroupItem onClick={() => navigate('/profile/user-info')}>
                            Your Profile Informations
                        </ListGroupItem>
                        <ListGroupItem onClick={() => navigate('/profile/user-jobs')}>
                            Applied Jobs
                        </ListGroupItem>
                        <ListGroupItem onClick={() => navigate('/profile/user-posts')}>
                            Jobs Postted
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col xs={12} md={8}>
                    <Outlet/>
                </Col>

            </Row>
        </>
    );
};

export default UserProfile;