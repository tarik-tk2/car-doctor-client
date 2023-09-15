import React, { useContext, useState } from "react";
import LoginImage from "../../../assets/images/login/login.svg";
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
const LogIn = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading,setLoading]=useState(false)
  const { handleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/service";
  const handleError = (err) => {
    switch (err.code) {
      case 'auth/user-not-found':
        setError("Woops!User Not Found");
        break;
      case 'auth/wrong-password':
        setError("Wrong Password");
        break;
      case 'auth/invalid-email':
        setError("Invalid Email");
        break;
      default:setError("please enter valid email & password");
    }
    

  }
  const handleChange = () => {
    setError("");
  };
  const handleSubmit = (e) => {
    setLoading(true);
   e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    setTimeout(() => { 
      handleSignIn(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoading(false)
          
          navigate(from);
        })
        .catch((err) => {
          const message = err.message;
          const errCode = err.code;
          handleError(err);
          setLoading(false);
        });
    }, 2000)
    
  };
  return (
    <div className=" w-full lg:w-9/12 mx-auto lg:p-12 p-4 ">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className=" w-full lg:w-1/2 ">
          <img
            src={LoginImage}
            alt="logo"
            className=" w-full lg:w-11/12 mx-auto p-6"
          />
        </div>
        <div
          className={`card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100`}
        >
          {error ? (
            <p className=" text-red-500 text-sm ">{error}</p>
          ) : (
            <h1 className="text-3xl font-bold mb-2">Login now!</h1>
          )}

          <form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className={`input ${
                  error ? " input-error text-red-500" : "input-bordered"
                }`}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="password"
                className={`input ${
                  error ? " input-error text-red-500" : "input-bordered"
                }`}
              />
              <div className="flex justify-between ">
                <label className="label">
                  <Link className=" link link-hover">Forgot password?</Link>
                </label>
                <label className="label">
                  <Link className=" link link-hover" to="/signup">
                    Not an Account?
                  </Link>
                </label>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn  bg-[#FF3811]">
                {loading ? <span className="loading loading-dots loading-sm"></span>:" "}Login
              </button>
            </div>
          </form>
          <p className="m-2">Or Sign In with</p>
          <div className="flex justify-between w-6/12 mx-auto">
            <button className="btn btn-circle  btn-outline border-0">
              <FaFacebookF />
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

export default LogIn;
