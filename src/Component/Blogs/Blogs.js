import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('https://boiling-anchorage-13800.herokuapp.com/blogs')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <Container>
            <h2 className="mb-4 mt-2">Recent Blogs</h2>
            <Row>
            {
            blogs.map(blog=>
                <Col sm={12} md={6} lg={4} key={blog._id} className="shadow-lg mb-5 rounded-3 mx-auto">
                    <img className="w-100" src={blog.image} alt="BlogImage" />
                    <div className="text-start px-3">
                        <p className="text-secondary mt-3">{blog.date}</p>
                        <h3 className="mb-3">{blog.title}</h3>
                        <p className="text-secondary">{blog.description}</p>
                        <Button variant="primary mt-2 mb-4">Read More</Button>
                    </div>
                </Col>    
            )
            }
            </Row>
        </Container>
    );
};

export default Blogs;