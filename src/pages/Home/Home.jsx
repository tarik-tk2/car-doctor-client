import React from 'react';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
import Banner from './Banner/Banner';
import About from './About/About';
import Service from '../Service/Service';
import { PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Products from './Products/Products';
import Banner_card from './Banner_Card/Banner_card';
import TeamMember from './Team/TeamMember';
import ChooseUs from './ChooseUs/ChooseUs';


const Home = () => {
    return (
      <div className='relative'>
        {/* <Banner /> */}
        <About />
        <Service />
        <Banner_card/>
        <Products />
        <TeamMember />
        <ChooseUs />
        
      </div>
    );
};

export default Home;