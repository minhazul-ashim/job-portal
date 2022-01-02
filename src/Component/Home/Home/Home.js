import React from 'react';
import Banner from '../Banner/Banner';
import Feature from '../Feature/Feature';
import HomeJob from '../HomeJob/HomeJob';
import Search from '../Search/Search';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Search/>
            <HomeJob/>
            <Feature/>
        </div>
    );
};

export default Home;