import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
const serviceData=useLoaderData()
  const { _id, title, img, price, service_id } = serviceData;
  
  return (
    <div className="w-full">
      <form className="w-full">
        <div className="flex  flex-row">
          <input
            type="text"
            placeholder="Enter Name"
            className="input input-bordered  w-full m-4"
          />
          <input type="date" className="input input-bordered  w-full m-4" />
        </div>
        <div className="flex  flex-row">
          <input
            type="text"
            placeholder="Enter Email"
            className="input input-bordered  w-full m-4"
          />
          <input
            type="text"
            placeholder="price"
            value={price}
            className="input input-bordered  w-full m-4"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Service Name"
            value={title}
            className="input input-bordered  w-full m-4"
          />
        </div>
      </form>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default CheckOut;
