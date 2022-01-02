import React, { useState } from 'react';
import './Register.css';
import bgImage from '../../Images/register -page.jpg'
import { Button, Form } from 'react-bootstrap';
import logo from '../../Images/logo.png'
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

const Register = () => {

    const { createUser } = useAuth()

    const [confirmPass, setConfirmPass] = useState(false);

    const [userInfo, setUserInfo] = useState({})

    const handleRegister = (e) => {

        if (userInfo.pass === userInfo.confirm) {

            const { name, email, pass } = userInfo;

            console.log(userInfo)

            createUser(email, pass, name)

            setConfirmPass(false)

            e.target.reset()
        } else {

            setConfirmPass(true)
        }

        e.preventDefault()
    }

    const handleInfo = (e) => {

        const field = e.target.name;
        const value = e.target.value;

        const previousInfo = { ...userInfo }
        previousInfo[field] = value;

        setUserInfo(previousInfo)
    }

    return (
        <div className='register-bg'>
            <img src={bgImage} className='register-img' alt="" />
            <div className='register-form'>
                <Form onSubmit={handleRegister} className='register-input'>

                    <img style={{ width: '25%', margin: '0 auto 10% auto' }} src={logo} alt="" />

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Your Name" onChange={handleInfo} name='name' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={handleInfo} name='email' />
                    </Form.Group>


                    <Form.Group className="mb-3" controlId="formBasicPassword" >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={handleInfo} name='pass' />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword" >
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Retype your Password" onChange={handleInfo} name='confirm' />
                    </Form.Group>

                    {
                        confirmPass ?
                            <p className='text-danger'>Password does not match. Please Recheck your password</p> :
                            ''
                    }

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p>Already have an account? <Link to='/login'>Please Login</Link> </p>
                </Form>
            </div>
        </div>
    );
};

export default Register;