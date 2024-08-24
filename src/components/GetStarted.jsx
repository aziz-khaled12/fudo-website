import React from "react";
import appImage from "../assets/images/app.png";
const GetStarted = () => {
  return (
    <div className="w-full mt-28 h-[90vh] bg-accent rounded-2xl" id="getStarted">
      <div className="flex w-full p-28">
        <div className="w-[45%]">
          <div className="font-semibold text-lg text-primary tracking-[0.2em] mb-6">
          DOWNLOAD APP
          </div>
          <div className="font-bold text-[3.25rem] text-gray1 tracking-wide leading-snug mb-8">
          Get Started With Fudo Today!
          </div>
          <div className="text-gray1 text-lg font-medium mb-11 w-[90%]">
          Discover food wherever and whenever and get your food delivered quickly.
          </div>
          <button className="bg-primary px-12 py-5 text-white rounded-full">
                Get The App
          </button>
        </div>
        <div className="w-[55%] h-full">
          <img
            src={appImage}
            alt="app image"
            className="w-full h-auto max-h-[82vh]"
          />
        </div>
      </div>
    </div>
  ); 
};

export default GetStarted;
