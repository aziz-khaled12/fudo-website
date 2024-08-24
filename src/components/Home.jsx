import React from "react";
import HomeImage from "../assets/images/HomeImage.png";
import cherryImage from "../assets/images/cherry.png";
const Home = () => {
  return (
    <>
      <div className="h-screen flex items-center justify-end right-11 absolute">
        <img
          src={HomeImage}
          alt="HomeImage"
          className="w-auto h-auto max-h-screen max-w-[70vw]"
        />
      </div>
      <div className="z-10 w-full h-screen">
        <div className="flex flex-col items-start justify-start w-[37vw] h-full">
          <div className="bg-accent text-primary font-medium text-base flex items-center py-4 gap-4 px-5 rounded-full mb-12">
            More than faster 
            <div className="w-5 h-4">
              <img src={cherryImage} alt="cherry" className="w-full h-full" />
            </div>
          </div>
          <h1 className="text-7xl font-bold text-gray1 leading-extra-loose mb-6">
            Be The Fastest In Delivering Your{" "}
            <span className="text-primary">Food</span>
          </h1>
          <p className="text-lg text-gray1 font-medium w-[80%] mb-8">
            Our job is to filling your tummy with delicious food and with fast
            and free delivery
          </p>
          <button className="text-lg font-medium text-white bg-primary px-10 py-5 rounded-full" onClick={() => {document.getElementById('getStarted').scrollIntoView({behavior: "smooth"})}}>
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
