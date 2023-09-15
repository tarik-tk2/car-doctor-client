import React from "react";
import check from "../../../assets/icons/check.svg";
import delivery from "../../../assets/icons/deliveryt.svg";
import support from "../../../assets/icons/Group 38729.svg";
import group from "../../../assets/icons/group.svg";
import person from "../../../assets/icons/person.svg";
import quote from "../../../assets/icons/quote.svg";
import wrench from "../../../assets/icons/Wrench.svg";
const ChooseUs = () => {
  return (
    <div className="mt-32">
      <div className="space-y-12 mb-16">
        <p className="text-center text-[#FF3811] font-bold text-xl tracking-wider h-6 p-0">
          Core Features
        </p>
        <p className=" text-center text-5xl  font-bold w-full ">
          Why Choose Us
        </p>
        <p className="tracking-wider	lg:w-2/3 m-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-12">
        <div className="card h-36  bg-base-200 text-center space-y-3">
          <div className="flex justify-center">
            <img src={group} alt="" />
          </div>
          <small className="font-bold">Expert Team</small>
        </div>
        <div className="card h-36 bg-base-200 text-center space-y-3">
          <div className="  flex justify-center ">
            <img src={delivery} alt="" />
          </div>
          <small className="font-bold">Express Support</small>
        </div>
        <div className="card h-36 bg-orange-500 text-center space-y-3">
          <div className="  flex justify-center ">
            <img src={support} alt="" />
          </div>

          <small className="font-bold">Timely Delivery</small>
        </div>
        <div className="card h-36 bg-base-200 text-center space-y-3">
          <div className="  flex justify-center ">
            <img src={check} alt="" />
          </div>

          <small className="font-bold">100% Grantee</small>
        </div>
        <div className="card h-36 bg-base-200 text-center space-y-3">
          <div className="  flex justify-center ">
            <img src={person} alt="" />
          </div>

          <small className="font-bold">24/7 Support</small>
        </div>
        <div className="card h-36 bg-base-200 text-center space-y-3">
          <div className="  flex justify-center ">
            <img src={wrench} alt="" />
          </div>

          <small className="font-bold">Best Equipment</small>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
