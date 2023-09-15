import React, { useEffect, useState } from 'react';
import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';
import LoadingSpinner from '../Spinner/LoadingSpinner';
import Footer from '../pages/shared/Footer';




const HomeLayout = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        },3000)
    },[])
    return (
      <div className='mt-0 pt-0'>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className='relative'>
            <Header />
              <Outlet />
              <Footer/>
          </div>
        )}
      </div>
    );
};

export default HomeLayout;