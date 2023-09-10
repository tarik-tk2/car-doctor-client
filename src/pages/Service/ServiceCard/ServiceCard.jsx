import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const {title,img,price,_id} = service;
  return (
    <div>
      <div className="card lg:w-96 bg-base-100 shadow-xl h-full">
        <figure className="h-3/4">
          <img src={img} alt="icon-logo h-full" />
        </figure>
        <div className="card-body h-2/5">
          <div className="text-left">
            <h2 className="card-title">{title}</h2>

            <div className="flex flex-row justify-between">
              <p>price:${price}</p>
              <div className="card-actions justify-end">
                <Link className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-[#FF3811 ]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;