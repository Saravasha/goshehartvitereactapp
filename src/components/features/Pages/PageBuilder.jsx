import React from "react";
import "./PageBuilder.css";

import { Page } from "./Page";
import { useData } from "../../api/ApiContext";
import GetRandomAsset from "../GetRandomAsset";
import { Background, Parallax } from "react-parallax";

export default function PageBuilder() {
  const { pages, directApi, isLoading } = useData();

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div
          id="Pages"
          className="flex w-full [&>_*]:w-full align-center justify-center flex-col text-gray-800 dark:text-white  text-8xl  [&_*]justify-center [&_*]items-center items-center  flex-grow  p-4 "
        >
          <div className="PagesBodyTitle text-6xl flex flex-row  border-white items-center justify-center p-4 m-4 flex-grow ">
            <h1 className="font-thin text-9xl text-gradient-to-r from-gray-300 shadows hover:shadows-2xl hover:text-black to-slate-100 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ">
              Pages
            </h1>
          </div>
          {pages.map((page, index) => (
            <div
              className="PageWrapper text-gray-800 dark:text-white  text-8xl justify-center [&_*]justify-center [&_*]items-center items-center [&_*]:flex [&_*]:flex-col [&_*]:w-full flex flex-col w-full flex-grow  p-1  "
              key={page.id}
              id={page.title}
            >
              <Parallax
                className="w-full flex items-center justify-center text-gray-800 dark:text-white  text-8xl [&_*]justify-center [&_*]items-center m-4 flex-col flex-grow  "
                strength={800}
              >
                <Background className="flex flex-col w-full h-full items-center justify-center text-gray-800 dark:text-white  text-8xl [&_*]justify-center [&_*]items-center  flex-grow  p-4">
                  <GetRandomAsset className="w-full [&_*]:h-full [&_*]:m-0  text-gray-800 dark:text-white  text-8xl justify-center [&_*]justify-center [&_*]items-center flex p-4  [&_*]:w-full shadow rounded-2xl" />
                </Background>
                <Page
                  // className=" w-full flex items-center justify-center text-gray-800 dark:text-white  text-8xl [&_*]justify-center [&_*]items-center flex-col flex-grow  p-4  pt-0 mt-0"
                  page={page}
                  directApi={directApi}
                ></Page>
              </Parallax>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
