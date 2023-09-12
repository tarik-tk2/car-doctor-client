import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Service from '../Service/Service';
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";


const Home = () => {
    return (
      <div>
        <Banner />
        <About />
        <Service />
        <div className=" mt-10 card bg-black flex flex-col lg:flex-row  lg:justify-between w-full text-primary-content p-6 mb-10 text-left py-24">
          {/* date section */}
          <div className="flex flex-row items-center  ">
            <div className='me-4'>
              {" "}
              <CalendarDaysIcon className="h-8 w-8 text-white" />
            </div>
            <div className=' space-y-1'>
              <p>We are open monday-friday</p>
              <h1>7:00 am - 9:00 pm</h1>
            </div>
          </div>
          {/* call section */}
          <div className="flex flex-row items-center space-x-6">
            <div>
              {" "}
              <PhoneArrowUpRightIcon className="h-8 w-8 text-white" />
            </div>
            <div className='space-y-1'>
              <p>Have a question?</p>
              <h1>+2546 251 2658</h1>
            </div>
          </div>
          {/* Location section */}
          <div>
            <div className="flex flex-row items-center space-x-6">
              <div>
                {" "}
                <MapPinIcon className="h-8 w-8 text-white" />
              </div>
              <div className='space-y-1'>
                <p>Need a repair? our address</p>
                <h1>Liza Street, New York</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;