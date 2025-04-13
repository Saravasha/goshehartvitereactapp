import React from "react";
import bgimg from "../assets/comingsoonimg3.jpg";

const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen flex bg-gradient-to-r from-green-900 to-slate-100 top-0 flex-col gap-8 p-4  items-center justify-center   rounded shadow-2xl">
      <div className="w-screen"></div>
      <h1 className="mt-8 text-6xl sm:text-7xl md:text-9xl font-thin text-white animate-pulse text-center">
        Loading
      </h1>
      <div className="flex items-center space-x-4 animate-bounce">
        <div className="w-6 h-6 bg-white rounded-full" />
        <div className="w-6 h-6 bg-white rounded-full delay-150 animate-delay" />
        <div className="w-6 h-6 bg-white rounded-full delay-300 animate-delay" />
      </div>
      <img src={bgimg} alt="alt" />
    </div>
  );
};
export default LoadingScreen;
