import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowSmallRightIcon } from "@heroicons/react/24/solid";
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
                <Link to={`/service/${_id}`}  >
                  <ArrowSmallRightIcon className='h-6 w-6'/>
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




