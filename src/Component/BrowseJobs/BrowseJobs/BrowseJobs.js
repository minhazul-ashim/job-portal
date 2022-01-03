import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, Route, Routes } from 'react-router-dom';
import Search from '../../Home/Search/Search';
import Jobs from '../Jobs/Jobs';
import './BrowseJobs.css';

const BrowseJobs = () => {
    return (
        <Container>
            <h1 className="mt-3">Discover jobs for you</h1>
            <h5 className="text-primary mb-5">Browse 4536+ Top Jobs In all World</h5>
            <Search/>
            <div className="mb-5 mt-3 jobCategory">
                <Link to="/browseJobs">
                    All Jobs
                </Link>
                <Link to="/browseJobs">
                    Remote
                </Link>
                <Link to="/browseJobs">
                    On-Site
                </Link>
                <Link to="/browseJobs">
                    Part Time
                </Link>
                <Link to="/browseJobs">
                    Full-Time
                </Link>
               <hr className="w-50 mx-auto"/>
            </div>
             <div>
                <Routes>
                    <Route path="/" element={<Jobs />}/>
                </Routes>
             </div>
        </Container>
    );
};

export default BrowseJobs;