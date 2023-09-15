import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import React from 'react';
import ReactStars from "react-rating-stars-component";
import { useLoaderData } from 'react-router-dom';

const ProductDetails = () => {
    const product = useLoaderData();
  
    const { image, _id, name, price, ratings, stock, details } =
      product;
    console.log(product)
    return (
      <div className=" w-11/12 lg:w-9/12 mx-auto mt-3 lg:mt-8 tracking-wider space-y-8">
        <div className="flex  flex-col-reverse lg:flex-row">
          <div className="w-full hidden lg:block lg:w-1/2 rounded">
            <img src={image} alt="" className="rounded mb-5" />
          </div>
          <div className="w-full lg:w-1/2 text-left lg:ms-12">
            <h3 className="text-3xl text-left font-bold mb-5 text-orange-600">
              {name}
            </h3>
            <div className="w-full lg:hidden rounded">
              <img src={image} alt="" className="rounded mb-5" />
            </div>
            <p>{details.description}</p>
            <div className="flex justify-start items-start">
              <ReactStars
                count={5}
                value={ratings.average}
                size={24}
                activeColor="#ffd700"
                edit={false}
              />
              <div className="flex mt-2">
                <p>({ratings?.average}</p>
                <p>/{ratings?.count})</p>
              </div>
            </div>
            <p className=" text-orange-400">Available Stock:{stock}</p>
            <p className="font-semibold">shipping</p>
            <ul className="ms-8">
              <li>Weight:{details?.shipping?.weight}</li>
              <li>Dimensions:{details?.shipping?.dimensions}</li>
            </ul>
            <p className="  font-semibold mb-4">
              price $<span className="text-[#FF3811]">{price}</span>
            </p>
            <div className="flex justify-center">
              <button className="btn btn-warning border-0  px-10  -tracking-wider ">
               <ShoppingBagIcon className='h-4 w-6'/> Buy Now
              </button>
            </div>
          </div>
          {/* description */}
        </div>
        <div>
          <div className="flex flex-col w-full lg:flex-row mt-8 gap-4">
            <div className="grid flex-grow  card bg-base-300 rounded-box text-left ">
              <p className="text-center font-bold mb-3"> Details</p>
              <li>manufacturer:{details?.manufacturer}</li>
              <li>model:{details?.model}</li>
            </div>
            <div className="grid flex-grow  card bg-base-300 rounded-box text-left">
              <p className="text-center font-bold mb-3"> compatibility</p>
              {details?.compatibility.map((e, i) => (
                <li className="text-left" key={i}>
                  {e}
                </li>
              ))}
            </div>
            <div className="grid flex-grow  card bg-base-300 rounded-box text-left">
              <p className="text-center font-bold mb-3"> Specification</p>
              {Object.values(details.specifications).map((e, i) => (
                <li className="text-left" key={i}>
                  {e}
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;