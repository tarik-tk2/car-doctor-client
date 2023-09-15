import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from './../../../AuthProvider/AuthProvider';

const CheckOut = () => {
  const serviceData = useLoaderData()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate();
  const { _id, title, img, price, service_id } = serviceData;
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    
    const name = form.name.value;
     const email = form.email.value;
    const title = form.title.value;
     const date = form.date.value;
    const price = form.price.value;
    const newService = {
      name,email,title,date,price,service_id:_id,img:img
    }
    
    fetch("http://localhost:4000/booking", {
      method: "POST",
      body: JSON.stringify(newService),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => navigate("/bookings"));
  }
  return (
    <div className="w-full">
      <form className="w-full " onSubmit={handleSubmit}>
        <div className="flex  flex-row">
          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={user?.displayName}
            className="input input-bordered  w-full m-4"
          />
          <input type="date" className="input input-bordered  w-full m-4" required name="date" />
        </div>
        <div className="flex  flex-row">
          <input
            type="text"
            placeholder="Enter Email"
            value={user.email}
            name="email"
            className="input input-bordered  w-full m-4"
          />
          <input
            type="text"
            placeholder="price"
            value={price}
            disabled
            name="price"
            className="input input-bordered  w-full m-4"
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Service Name"
            value={title}
            name="title"
            className="input input-bordered  w-full m-4"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
