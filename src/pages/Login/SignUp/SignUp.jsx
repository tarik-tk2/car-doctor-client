import React, { useContext, useState } from "react";
import SignUpImage from "../../../assets/images/login/login.svg";

import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { HiUser } from "react-icons/hi";
import { updateProfile } from "firebase/auth";
import { storage } from "../../../../firebase.config";
import { ref } from "firebase/storage";

const SignUp = () => {
  const navigate = useNavigate();
 
  const [loading, SetLoading] = useState(false);
  const [userImage, setUserImage] = useState(null);
  const [error, setError] = useState("");
  const passwordRegex = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const { handleSignUp, handleUpdate } = useContext(AuthContext);
  
  const handleChange = () => {
  setError("")
}
  const handleError = (err) => {
    switch (err.code) {
      case "auth/email-already-in-use":
        setError("email already used");
        break;
      case "auth/invalid-email":
        setError("invalid email");
        break;
      case "auth/weak-password":
        setError("weak password");
        break;
      default:
        setError("Error in SignUp? Try Again .");
    }
  };

  const handleSubmit = (e) => {
    SetLoading(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    if (passwordRegex.test(password)) {
      handleSignUp(email, password, name)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user) {
            setTimeout(() => {
              handleUpdate(name)
                .then(() => {
                  console.log("profile updated");

                  SetLoading(false);
                })
                .catch((err) => {
                  const message = err.message;
                  handleError(err);
                  SetLoading(false);
                });
              navigate("/");
              window.location.reload();
            }, 5000);
          }
        })
        .catch((err) => {
          handleError(err);
          SetLoading(false);
        });
     } else { 
      setError("Invalid password!");
      SetLoading(false);
    }
      
    
  };
  return (
    <div className=" w-full lg:w-9/12 mx-auto lg:p-12 p-4 ">
      <div className="flex flex-col lg:flex-row-reverse">
        <div className=" w-full lg:w-1/2 ">
          <img
            src={SignUpImage}
            alt="logo"
            className=" w-full lg:w-11/12 mx-auto p-6"
          />
        </div>
        <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100  ">
          {error ? (
            <p className=" text-red-500 text-sm ">{error}</p>
          ) : (
            <h1 className="text-3xl font-bold mb-2">SignUp now!</h1>
          )}

          <form onSubmit={handleSubmit} onChange={handleChange}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                required
                name="name"
                placeholder="name"
                className={`input ${
                  error ? " input-error text-red-500" : "input-bordered"
                }`}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="email"
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
                placeholder="Length minimum 8 with character digit and special key!"
                required
                className={`input ${
                  error ? " input-error text-red-500" : "input-bordered"
                }`}
              />
              <label>
                <small className="bold text-red-500">
                  Length minimum 8 with character digit and special key!
                </small>
              </label>
              <div className="flex flex-row justify-between items-center mt-5">
                <div className="avatar">
                  <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg" />
                  </div>
                </div>
                <input
                  type="file"
                  name="img"
                  accept="image/*"
                  required
                  onChange={(e) => setUserImage(e.target.files[0])}
                  className=""
                />
              </div>
              <div className="flex justify-end ">
                <label className="label">
                  <Link className=" link link-hover " to="/login">
                    Already an Account?
                  </Link>
                </label>
              </div>
            </div>
            {loading ? (
              <span className="loading loading-ring loading-lg"></span>
            ) : (
              <div className="form-control mt-6">
                <button className="btn  bg-[#FF3811]">Sign Up </button>
              </div>
            )}
          </form>
          <p className="m-2">Or Sign Up with</p>
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

export default SignUp;
