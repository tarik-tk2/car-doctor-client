import React from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div>
            <Header />
            <Outlet/>
        </div>
    );
};

export default HomeLayout;