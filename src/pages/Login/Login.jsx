import React from "react";
import LoginImage from "../../assets/images/login/login.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
const Login = () => {
  return (
    <div className=" w-full lg:w-9/12 lg:mx-auto lg:p-12">
      <div className="flex flex-col lg:flex-row-reverse ">
        <div className=" w-full lg:w-1/2 h-full">
          <img src={LoginImage} alt="logo" className=" w-11/12 mx-auto p-6" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn  bg-[#FF3811]">Login</button>
            </div>
          </div>
          <p className="m-2">Or Sign In with</p>
          <div className="flex justify-between w-6/12 mx-auto">
            <button className="btn btn-circle  btn-outline border-0">
              <FaFacebookF  />
            </button>
            <button className="btn btn-circle btn-outline border-0">
              <FaGoogle />
            </button>
            <button className="btn btn-circle btn-outline border-0">
              <FaLinkedinIn />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
