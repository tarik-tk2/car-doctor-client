import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";

const Service = () => {
  const [services, setSetServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/services")
      .then((res) => res.json())
      .then((data) => setSetServices(data));
  }, []);

  return (
    <div>
      <div className="space-y-3">
        <p className="text-center text-[#FF3811] font-bold text-xl tracking-wider h-6 p-0">
          About Us
        </p>
        <p className=" text-center text-5xl  font-bold w-full ">
          Our Service Area
        </p>
        <p className="tracking-wider	lg:w-2/3 m-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which don not look even slightly
          believable.{" "}
        </p>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <button className="btn border-[#FF3811] bg-white text-[#FF3811] mt-10">
        {" "}
        More Services
      </button>
    </div>
  );
};

export default Service;
