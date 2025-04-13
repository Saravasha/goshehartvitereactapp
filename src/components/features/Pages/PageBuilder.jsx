import React from "react";
import "./PageBuilder.css";

import { Page } from "./Page";
import { useData } from "../../api/ApiContext";
import GetRandomAsset from "../GetRandomAsset";

export default function PageBuilder() {
  const { pages, directApi, isLoading } = useData();
  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div id="Pages">
          <div className="PagesBodyTitle text-8xl flex flex-row   border-white  items-center justify-center p-10 m-4 flex-grow ">
            <h1 className="font-thin text-gradient-to-r from-gray-300 shadows hover:shadows-2xl hover:text-black to-slate-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ">
              {isLoading ? "Loading" : "Pages"}
            </h1>
          </div>
          {pages.map((page, index) => (
            <div
              className="Wrapper text-gray-800 dark:text-white  text-8xl justify-center [&_*]justify-center [&_*]items-center items-center flex flex-col w-full flex-grow  p-4 pb-96 pt-0 mt-0  "
              key={page.id}
              id={page.title}
            >
              <Page key={page.id} page={page} directApi={directApi}></Page>
              <div className="ParallaxContainer text-gray-800 dark:text-white  text-8xl justify-center [&_*]justify-center [&_*]items-center flex p-4  m-4 absolute  bg-no-repeat [&_*]:w-full -z-1 ">
                <GetRandomAsset className="ParallaxContainer text-gray-800 dark:text-white  text-8xl justify-center [&_*]justify-center [&_*]items-center  flex p-4  m-4 absolute bg-fixed bg-no-repeat [&_*]:w-full -z-1 " />
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
