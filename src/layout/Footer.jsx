import React from "react";

export default function Footer() {

  let currentYear = new Date().getFullYear()
 
  return (
    <footer>

    {/* <div className="bg-cyan-400"> */}
      {/* <img src="https://picsum.photos/100/100" alt="" id="1" className="w-5"/> */}
    {/* </div> */}

      <div className="">
        <span className="text-red-600 text-9xl">&copy; Gosheh Art {currentYear}</span>
      </div>
    </footer>

  );
}
