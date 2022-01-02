import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {

    const { googleSignIn } = useAuth();

    return (
        <div>
            <Button onClick={googleSignIn}>
                Google Login
            </Button>
            <p>New here? <Link to='/register'>Register now!</Link></p>
        </div>
    );
};

export default Login; <h1>Please Login</h1>