import React from 'react';
import img1 from '../../../assets/images/team/1.jpg'
import img2 from '../../../assets/images/team/2.jpg'
import img3 from '../../../assets/images/team/3.jpg'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const TeamMember = () => {
    return (
      <div className='mt-32'>
        <div>
          <div className="space-y-12 mb-16">
            <p className="text-center text-[#FF3811] font-bold text-xl tracking-wider h-6 p-0">
              Team
            </p>
            <p className=" text-center text-5xl  font-bold w-full ">
              Meet Our Team
            </p>
            <p className="tracking-wider	lg:w-2/3 m-auto">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which do not look even slightly
              believable.
            </p>
          </div>
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-4">
            {/*  */}
            <div className="card lg:w-96 bg-base-100 shadow-xl h-full">
              <figure className="h-3/4">
                <img src={img1} alt="icon-logo h-full" />
              </figure>
              <div className="card-body h-2/5">
                <div className=" space-y-6 text-center">
                  <h2 className="card-title justify-center">Car Engine Plug</h2>
                  <p>Engine Expert</p>
                  <div className="flex justify-between w-[70%] mx-auto">
                    <FaFacebook className="h-6 w-6" />
                    <FaGoogle className="h-6 w-6" />
                    <FaTwitter className="h-6 w-6" />
                    <FaInstagram className="h-6 w-6" />
                    <FaLinkedin className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="card lg:w-96 bg-base-100 shadow-xl h-full">
              <figure className="h-3/4">
                <img src={img2} alt="icon-logo h-full" />
              </figure>
              <div className="card-body h-2/5">
                <div className=" space-y-6 text-center">
                  <h2 className="card-title justify-center  ">Car Engine Plug</h2>
                  <p>Engine Expert</p>
                  <div className="flex justify-between w-[70%] mx-auto">
                    <FaFacebook className="h-6 w-6" />
                    <FaGoogle className="h-6 w-6" />
                    <FaTwitter className="h-6 w-6" />
                    <FaInstagram className="h-6 w-6" />
                    <FaLinkedin className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="card lg:w-96 bg-base-100 shadow-xl h-full">
              <figure className="h-3/4">
                <img src={img3} alt="icon-logo h-full" />
              </figure>
              <div className="card-body h-2/5">
                <div className=" space-y-6 text-center">
                  <h2 className="card-title justify-center">Car Engine Plug</h2>
                  <p>Engine Expert</p>
                  <div className="flex justify-between w-[70%] mx-auto">
                    <FaFacebook className="h-6 w-6" />
                    <FaGoogle className="h-6 w-6" />
                    <FaTwitter className="h-6 w-6" />
                    <FaInstagram className="h-6 w-6" />
                    <FaLinkedin className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default TeamMember;