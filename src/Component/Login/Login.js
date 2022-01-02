import React, { useState } from 'react';
import './Login.css';
import bgImage from '../../Images/register -page.jpg'
import { Button, Form } from 'react-bootstrap';
import logo from '../../Images/logo.png'
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    const { manualSignIn, googleSignIn, error } = useAuth()

    const [loginInfo, setLoginInfo] = useState({})

    const location = useLocation()

    const navigate = useNavigate()

    const from = location.state?.from.pathname || '/'

    const handleLogin = (e) => {

        const { email, pass } = loginInfo;

        manualSignIn(email, pass, from, navigate)

        e.target.reset()

        e.preventDefault()
    }

    const handleInfo = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const previousInfo = { ...loginInfo }
        previousInfo[field] = value;

        setLoginInfo(previousInfo)
    }

    return (
        <div className='register-bg'>
            <img src={bgImage} className='register-img' alt="" />
            <div className='register-form'>
                <Form onSubmit={handleLogin} className='register-input'>

                    <img style={{ width: '25%', margin: '0 auto 10% auto' }} src={logo} alt="" />

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleInfo} name='email' />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handleInfo} name='pass' />
                    </Form.Group>

                    <p className='text-danger'>{error}</p>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p>New here? <Link to='/register'>Please Register</Link> </p>

                    <Button variant='danger' onClick={() => googleSignIn(from, navigate)}>
                        Sign in with Google
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Login;