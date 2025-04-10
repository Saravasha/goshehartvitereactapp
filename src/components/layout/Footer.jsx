import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="">
        <span className="hover:text-red-500 font-thin text-black text-4xl flex items-center justify-center ">
          &copy; Gosheh Art {currentYear}
        </span>
      </div>
    </footer>
  );
}
