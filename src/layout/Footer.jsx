import React from "react";

export default function Footer() {

  let currentYear = new Date().getFullYear()
 
  return (
    <footer>
      <div className="">
        <span className="text-red-600 text-9xl">&copy; Gosheh Art {currentYear}</span>
      </div>
    </footer>

  );
}
