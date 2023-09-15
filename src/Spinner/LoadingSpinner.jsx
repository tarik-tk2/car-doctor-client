import React from 'react';
import { ThreeCircles } from "react-loader-spinner";
const LoadingSpinner = () => {
    return (
      <div className=" absolute top-[40%] left-[38%] lg:left-[47%]">
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    );
};

export default LoadingSpinner;