import { CalendarDaysIcon, MapPinIcon, PhoneArrowUpRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Banner_card = () => {
    return (
      <div className='mb-52 mt-32'>
        <div className=" bg-black card text-white mt-12">
          <div className="flex flex-col w-full lg:flex-row">
            <div className="grid flex-grow  card  rounded-box place-items-center ">
              <div className="me-4">
                <CalendarDaysIcon className="h-8 w-8 text-white" />
              </div>
              <div className=" space-y-1">
                <p>We are open monday-friday</p>
                <h1>7:00 am - 9:00 pm</h1>
              </div>
            </div>
            <div className="grid flex-grow  card  rounded-box place-items-center ">
              <div className="me-4">
                {" "}
                <PhoneArrowUpRightIcon className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-1">
                <p>Have a question?</p>
                <h1>+2546 251 2658</h1>
              </div>
            </div>
            <div className="grid flex-grow  card  rounded-box place-items-center">
              <div className="m-4">
                <MapPinIcon className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-1">
                <p>Need a repair? our address</p>
                <h1>Liza Street, New York</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner_card;