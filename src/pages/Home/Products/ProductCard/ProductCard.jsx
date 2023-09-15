import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const { _id,name,image, price,ratings} = product;
    return (
      <div>
        <div className="card lg:w-96 bg-base-100 shadow-xl h-full">
          <figure className="h-3/4">
            <img src={image} alt="icon-logo h-full" />
          </figure>
          <div className="card-body h-2/5">
            <div className="text-left">
              <h2 className="card-title">{name}</h2>

              <div className="flex flex-row justify-between">
                <p className=' text-red-500'>price:${price}</p>
                <div className="card-actions justify-end">
                  <Link to={`/product/${_id}`}>
                    <ArrowSmallRightIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductCard;