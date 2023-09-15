import React, { useContext, useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";
import { FaBars, FaChevronLeft, FaChevronRight, FaHamburger } from "react-icons/fa";

const Header = () => {
  const { handleSignOut, user } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
  const [hideCart, setHideCart] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScroll(true);

    } else {
      setScroll(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    
  }, [])
  const handleLogOut = () => {
    handleSignOut()
      .then(() => {
        console.log("log out successfully");
      })
      .catch((err) => {
        const message = err.message;
        console.log(message);
      });
  };
  const handleToggle = (e) => {
    
    setToggle(!toggle);
  };
  const handleHideCart = () => {
    
    setHideCart(!hideCart);
  };
  return (
    <div
      className={`navbar ${
        scroll ? " bg-[#FCF4F9]" : "bg-white"
      } lg:flex  justify-between sticky z-[200]  top-0 `}
    >
      <div className="mb-2">
        <Link className="btn btn-ghost hover:bg-white " to="/">
          <img src={logo} className="h-12 mb-6b lg:h-16 w-12 lg:w-16" alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-semibold ">
        <ul className="menu menu-horizontal px-2">
          <li>
            <Link className=" mx-1" to="/">
              {" "}
              Home
            </Link>
          </li>
          <li>
            <Link className="mx-1" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="mx-1" to="/service">
              Service
            </Link>
          </li>
          <li>
            <Link className="mx-1" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="mx-1" to="/contact">
              Contact
            </Link>
          </li>
          {user?.displayName && (
            <li>
              <Link className="mx-1" to="/bookings">
                My Booking
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className=" ">
        <div className="w-18 p-1 fixed top-[100px] right-[0px]  rounded">
          <div className="flex  items-center">
            <div onClick={handleHideCart} className="z-[10]">
              {hideCart ? <FaChevronLeft /> : <FaChevronRight />}
            </div>
            <div className={`${hideCart ? "hidden" : "block"}`}>
              <p className="font-bold">Cart</p>
              <div className="flex justify-between p-1">
                <ShoppingBagIcon className="h-6 w-6" />
                <span className="font-bold text-lg ">00</span>
              </div>
              <Link className=" hidden lg:block  w-full px-1 lg:px-2 m-0 h-6 mt-3 mb-2 bg-orange-500 font-bold rounded">
                <small>View cart</small>
              </Link>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end" onClick={handleToggle}>
          <label tabIndex={0} className="btn btn-ghost hover:bg-white">
            <div>
              {user?.displayName ? (
                <div className="flex justify-between items-center">
                  <p className="text-black me-2 hidden lg:block">
                    {user?.displayName}
                  </p>
                  <img
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    className="w-12 h-12 rounded-full avatar"
                  />
                </div>
              ) : (
                <Link
                  className=" text-xs	text-bold p-3 border
                rounded lg:btn lg:btn-outline lg:btn-warning "
                  to="/login"
                >
                  Appointment
                </Link>
              )}
            </div>
          </label>
          <ul
            className={`${
              toggle
                ? `${
                    user
                      ? "menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-50 "
                      : "hidden"
                  }`
                : "hidden"
            }`}
          >
            {user ? (
              <div>
                {user?.displayName && (
                  <li className="bock lg:hidden">
                    <Link className="mx-1" to="/bookings">
                      My Booking
                    </Link>
                  </li>
                )}
                <div className="block lg:hidden">
                  <li>
                    <Link className=" mx-1 " to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="mx-1" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="mx-1" to="/service">
                      Service
                    </Link>
                  </li>
                  <li>
                    <Link className="mx-1" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="mx-1" to="/contact">
                      Contact
                    </Link>
                  </li>
                </div>
                <li>
                  <Link className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </Link>
                </li>
                <li>
                  <Link>Settings</Link>
                </li>
              </div>
            ) : (
              " "
            )}
            <li>{user && <Link onClick={handleLogOut}>Logout</Link>}</li>
          </ul>
        </div>

        <div>
          {user ? (
            " "
          ) : (
            <div className="dropdown dropdown-end " onClick={handleToggle}>
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <FaBars className="h-6 w-6" />
              </label>
              <ul
                tabIndex={0}
                className={`${
                  toggle
                    ? "dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52 mt-3 "
                    : "hidden"
                }`}
              >
                <li>
                  <Link className=" mx-1" to="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="mx-1" to="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="mx-1" to="/service">
                    Service
                  </Link>
                </li>
                <li>
                  <Link className="mx-1" to="/blog">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link className="mx-1" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

