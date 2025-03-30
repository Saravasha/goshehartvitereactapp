import React, { useEffect } from "react";
import useApi from "../api/useApi";
import DOMPurify from "dompurify";
import "./PageBuilder.css";

export default function PageBuilder() {
  var { pages } = useApi();

  const Pages = () => {
    return (
      <div className="Pages text-8xl justify-center [&_*]justify-center [&_*]items-center items-center flex flex-col flex-grow rounded shadow-sm p-4 ">
        {pages.map((page) => (
          <div
            className="Page flex flex-col gap-4 rounded shadow-sm bg-gradient-to-r from-gray-300 to-slate-100 text-4xl font-thin w-full [&_*]:w-full border-black border-4 flex-grow m-9 mb-96 h-full p-4 "
            id={page.title}
            key={page.id}
          >
            <h2 className="PageTitle text-8xl justify-center items-center flex drop-shadow-[0_1.2px_1.2px_rgba(0,3,3,0.8)] font-thin text-white flex-grow w-full h-full">
              {page.title}
            </h2>
            {/* page container */}
            <div
              className="PageContainer text-4xl max-w-full gap-4 justify-center items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] [&_PageContainer_p_img]:w-100 flex flex-grow h-full w-full [&_*]:m-4 p-4"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(page.container),
              }}
            ></div>
            <div className="Contents flex flex-col  bg-transparent  text-4xl gap-4 justify-center items-center flex-grow w-full p-4 ">
              {page.contents.map((content) => (
                <div key={content.id} id={content.id}>
                  <h3 className="ContentTitle text-6xl justify-center items-center flex m-4 flex-grow w-full p-4">
                    {content.title}
                  </h3>
                  {/* content container */}
                  <div
                    className="ContentContainer text-4xl flex flex-col gap-4  justify-items-center justify-center items-center m-4 p-4 flex-grow w-full "
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
  }, []);

  return (
    <div id="PagesBody ">
      <div className="PagesBodyTitle text-8xl flex flex-row  rounded shadow border-white  items-center justify-center p-10 m-4 flex-grow ">
        <h1 className="font-thin text-red-50 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)] ">
          Pages
        </h1>
      </div>
      <Pages />
    </div>
  );
}
