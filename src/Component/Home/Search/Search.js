import React from 'react';
import { Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const Search = () => {
    return (
        <Container className="mt-2">
            <Row>
                <Col xs={12} md={12} lg={6} className="mx-auto">
                    <InputGroup className="my-3">
                        <FormControl placeholder="Search By Job Title" style={{borderRadius:"300px",marginright:"5px", padding:"8px", paddingLeft:"30px"}}/>
                        <Button style={{borderRadius:"300px",marginLeft:"5px"}}>Search Job</Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;