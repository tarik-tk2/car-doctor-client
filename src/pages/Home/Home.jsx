import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import About from '../About/About';

const Home = () => {
    return (
        <div >
            <Banner />
            <About/>
        </div>
    );
};

export default Home;