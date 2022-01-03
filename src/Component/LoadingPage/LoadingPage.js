import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const LoadingPage = () => {

    return (

        <Container className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>

            <div className="spinner">
                <Spinner animation="grow" />
            </div>

        </Container>
    );
};

export default LoadingPage;