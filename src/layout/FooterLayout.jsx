import React from "react";

export default function FooterLayout() {

  let currentYear = new Date().getFullYear()
 
  return (
    <footer>
      <div className="">
        <span className="text-red-500 hover:text-black text-4xl">&copy; Gosheh Art {currentYear}</span>
      </div>
    </footer>
  )
}
