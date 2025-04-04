import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DOMPurify from "dompurify";
import GetRandomAsset from "../features/GetRandomAsset";

import useApi from "../api/useApi";

export default function Navbar() {
  var { pages } = useApi();

  const MappingPages = () => {
    return (
      <div className="text-sm lg:flex-grow">
        {pages.map((page) => (
          <a
            href={page.title}
            key={page.title}
            className="block mt-4 lg:inline-block lg:mt-0 text-2xl text-white hover:text-white mr-4"
          >
            {page.title}
          </a>
        ))}
      </div>
    );
  };

  useEffect(() => {
    pages = pages.map((page) => page.title);
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-green-400 to-white p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Goshehart.se
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white outline border-black hover:text-white hover:border-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex text text-8xl lg:items-center lg:w-auto drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          <MappingPages />
        </div>
        {/* <div><Link to={pages}></Link></div> */}
      </nav>
    </>
  );
}
