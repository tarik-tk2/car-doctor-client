import React from "react";
import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  const images = [img1, img2, img3, img4];
  return (
    <div className="carousel w-full lg:h-[550px] relative">
      <div className="hidden absolute  p-20 z-10 h-full bg-gradient-to-r from-[#141414] lg:w-[700px] to-[rgba(21, 21, 21, 0.00)] text-left  space-y-4	">
        <h1 className="text-6xl text-white font-bold tracking-wider ">
          Affordable
          <br /> Price For Car
          <br /> Servicing
        </h1>
        <p className="text-lg text-white">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
        <div className="flex space-x-4">
          <Link className="btn  bg-[#FF3811] border-0 text-white">
            Discover More
          </Link>
          <Link className="btn btn-outline text-white">Latest Project</Link>
        </div>
      </div>
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full" />
        <div className="absolute flex transform -translate-y-1/2  lg:translate-y-32 justify-between right-0 left-0  lg:justify-normal  top-1/2   lg:right-4  lg:bottom-2">
          <a
            href="#slide4"
            className="btn btn-link no-underline hover:no-underline hover:bg-orange-300 lg:btn-circle lg:me-2  lg:bg-orange-500 border-0"
          >
            ❮
          </a>
          <a
            href="#slide2"
            className="btn  btn-link  no-underline hover:no-underline hover:bg-red-500 lg:btn-circle lg:ms-2 lg:bg-red-600 border-0"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full" />
        <div className="absolute flex transform -translate-y-1/2 bottom-2 right-4">
          <a
            href="#slide1"
            className="btn btn-circle me-2 bg-orange-500 border-0"
          >
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle ms-2 bg-red-600 border-0">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full" />
        <div className="absolute flex transform -translate-y-1/2 bottom-2 right-4">
          <a
            href="#slide2"
            className="btn btn-circle me-2 bg-orange-500 border-0"
          >
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle ms-2 bg-red-600 border-0">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full" />
        <div className="absolute flex transform -translate-y-1/2 bottom-2 right-4">
          <a
            href="#slide3"
            className="btn btn-circle me-2 bg-orange-500 border-0"
          >
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle ms-2 bg-red-600 border-0">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
