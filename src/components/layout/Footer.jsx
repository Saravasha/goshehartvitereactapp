import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="rounded shadow flex align-center justify-center py-10">
      {/* <div className=>
      </div> */}
      <span className="hover:text-green-700 hover:animate-pulse font-thin text-black text-4xl flex items-center justify-center ">
        &copy; Gosheh Art {currentYear}
      </span>
    </footer>
  );
}
