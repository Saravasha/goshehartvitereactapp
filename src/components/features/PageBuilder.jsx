import React, { useEffect } from "react";
import useApi from "../api/useApi";
import DOMPurify from "dompurify";

export default function PageBuilder() {
  var { pages } = useApi();

  console.log("pages in pagebuilder", pages);

  const Pages = () => {
    return (
      <div className="Container m-4 gap-4 justify-center items-center grid grid-cols-* grid-rows- bg-gradient-to-r from-yellow-600 to-red-600  rounded shadow-sm ">
        {pages.map((page) => (
          <div className="grid gap-4 " id={page.title} key={page.id}>
            <h1 className="Title text-4xl  grid gap-4 justify-center align-self-center ">
              {page.title}
            </h1>
            <div
              className="Container w-screen-4xl max-h-lvh m-4 grid gap-4 items-center justify-center "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(page.container),
              }}
            ></div>
            <div className="Contents text-2xl m-4  gap-4 grid grid-cols-1 grid-rows-1 ">
              {page.contents.map((content) => (
                <div
                  className="grid grid-cols-1 m-4 gap-4 grid-rows-1 "
                  key={content.id}
                  id={content.id}
                >
                  <h2 className="flex text-1xl items-center justify-center  ">
                    {content.title}
                  </h2>
                  <div
                    className="Container text-2xl flex grid-cols-1 items-center justify-center bg-white "
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(content.container),
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    pages = pages.map((page) => page.contents);
    console.log("inside effect = ", pages);
  }, []);

  return (
    <>
      <div id="pagesbody grid">
        <h1 className="text-8xl grid grid-rows-2 items-center justify-center rounded shadow">
          Pages
        </h1>
        <Pages className="border-black rounded shadow" />
      </div>
    </>
  );
}
