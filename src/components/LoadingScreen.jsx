import React from "react";
import bgimg from "../assets/comingsoonimg3.jpg";

const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen -z-1 flex bg-gradient-to-r from-green-900 to-green-500 top-0 flex-col gap-8 p-4  items-center justify-center    shadow-2xl">
      <span className="mt-8 text-6xl z-1 sm:text-7xl md:text-9xl font-thin text-white  text-center">
        Gosheh Art
      </span>
      <img
        className="w-screen p-4 h-1/3 z-0 blur-xs top-0 align-center flex justify-center  absolute "
        src={bgimg}
        alt="alt"
      />
      <span className="mt-8 text-6xl sm:text-7xl md:text-8xl font-thin text-white animate-pulse text-center">
        Loading
      </span>
      <div className="flex items-center space-x-4 animate-bounce">
        <div className="w-6 h-6 bg-white rounded-full" />
        <div className="w-6 h-6 bg-white rounded-full delay-150 animate-delay" />
        <div className="w-6 h-6 bg-white rounded-full delay-300 animate-delay" />
      </div>
      <div className="w-screen"></div>
    </div>
  );
};
export default LoadingScreen;
