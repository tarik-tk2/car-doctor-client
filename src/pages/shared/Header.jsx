import React from 'react';
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";

const Header = () => {
    return (
        
      <div className="navbar bg-base-100  h-2">
        <div className="navbar-start">
          <div className=" h-14">
            <img src={logo} alt="" className=" h-full" />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link className=" font-semibold">Home</Link>
            </li>
            <li>
              <Link className=" font-semibold">About</Link>
            </li>
            <li>
              <Link className=" font-semibold">Service</Link>
            </li>
            <li>
              <Link className=" font-semibold">Blog</Link>
            </li>
            <li>
              <Link className=" font-semibold">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end ">
          <div className="hidden lg:flex">
            <Link>
              <HiOutlineShoppingCart className="h-5 w-5 me-2" />
            </Link>
            <Link>
              <HiOutlineSearch className="h-5 w-5 me-6" />
            </Link>
          </div>
          <Link className="btn btn-outline rounded-none hidden lg:flex ">Appointment</Link>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Service</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;