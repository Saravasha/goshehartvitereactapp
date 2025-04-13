import React from "react";

export default function ComingSoon() {
  return (
    <div className="ComingSoonBody flex justify-center align-center pt-12 h-full">
      <span className="text-9xl px-4 italic text-shadow-2xs  absolute text-red-50 hover:text-red-300 ">
        Gosheh Art
      </span>
      <div className=" flex justify-center items-center w-full h-full">
        <p className="absolute italic text-shadow-2xs text-red-50 hover:text-red-300 text-4xl">
          Coming soon...
        </p>
        <img
          src="/comingsoonimg2.jpg"
          className="rounded-full shadow bg-screen "
          alt="ph"
        />
      </div>
    </div>
  );
}
