import React from "react";

export default function ComingSoon() {
  return (
    <>
      <div className="ComingSoon flex justify-center items-center m-4 rounded shadow">
        <img
          src="/comingsoonimg2.jpg"
          className="h-screen w-screen bg-cover bg-no-repeat rounded shadow"
          alt="ph"
        />
        <div className="absolute top-2 left-2 ">
          <span className="text-9xl  text-red-50 hover:text-red-300 ">
            Gosheh Art
          </span>
        </div>
        <div className="absolute justify-center items-center">
          <p className="text-red-50 hover:text-red-300 text-4xl">
            Coming Soon...
          </p>
        </div>
      </div>
    </>
  );
}
