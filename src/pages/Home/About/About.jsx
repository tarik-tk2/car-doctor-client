import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row my-14 lg:my-32">
      <figure className="lg:w-1/2 relative h-auto ">
       
          <img
            className="rounded-lg w-full lg:w-10/12 "
            src={person}
            alt="person"
          />
       
          <img
            className="absolute right-0 -bottom-14 z-[1] h-36 lg:h-72 w-36  lg:w-72 rounded-lg border-4 border-[rgb(255, 255, 197)]"
            src={parts}
            alt="parts"
          />
       
      </figure>

      <div className="card-body mt-14 lg:mt-0 w-full lg:w-1/2 lg:ms-16 ">
        <p className="text-left text-[#FF3811] font-bold text-xl tracking-wider h-6 p-0">
          About Us
        </p>
        <p className="card-title text-left text-3xl lg:text-5xl font-bold w-full lg:w-3/4">
          We are qualified & of experience in this field
        </p>
        <p className="text-left tracking-wider	">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>
        <p className="text-left tracking-wider	">
          the majority have suffered alteration in some form, by injected
          humour, or randomized words which do not look even slightly
          believable.
        </p>

        <div className="card-actions justify-center lg:justify-start h-0">
          <button className="btn btn-primary bg-[#FF3811] border-0">
            Get More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;