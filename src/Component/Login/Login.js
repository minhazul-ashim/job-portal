import React from 'react';
import { Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { googleSignIn } = useAuth();

    return (
        <div>
            <Button onClick={googleSignIn}>
                Google Login
            </Button>
        </div>
    );
};

export default Login; <h1>Please Login</h1>