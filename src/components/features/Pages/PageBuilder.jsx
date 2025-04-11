import React, { Suspense, useEffect } from "react";
import useApi from "../../api/useApi";

import "./PageBuilder.css";
import ParallaxEffect from "../ParallaxEffect";
import { Page } from "./Page";

export default function PageBuilder() {
  const { pages, directApi, isLoading } = useApi();
  // useEffect(() => {
  //   pages = pages.map((page) => page.contents);
  // }, []);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div id="PagesBody ">
          <div className="PagesBodyTitle text-8xl flex flex-row   border-white  items-center justify-center p-10 m-4 flex-grow ">
            <h1 className="font-thin text-gradient-to-r from-gray-300 shadows hover:shadows-2xl hover:text-black to-slate-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ">
              {isLoading ? "Loading" : "Pages"}
            </h1>
          </div>
          <div className="Pages text-gray-800 dark:text-white  text-8xl justify-center [&_*]justify-center [&_*]items-center items-center flex flex-col w-full flex-grow  p-4 ">
            {pages.map((page, index) => (
              <div
                key={page.id}
                id={page.title}
                className="Page  flex flex-col gap-4 rounded shadow-sm  text-4xl font-thin w-full [&_*]:w-full hover:shadow-2xl flex-grow m-9  h-full p-4 "
              >
                <Page key={page.id} page={page} directApi={directApi} />
                <ParallaxEffect key={-page.id} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
