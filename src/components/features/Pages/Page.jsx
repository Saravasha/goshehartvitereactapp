import React from "react";
import DOMPurify from "dompurify";

export const Page = ({ page, directApi }) => {
  const prependApiUrlToImages = (htmlContent) => {
    // Create a temporary DOM element to parse the HTML
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;

    // Find all <img> tags and prepend the API URL to their src
    const images = tempDiv.querySelectorAll("img");
    images.forEach((img) => {
      const setSrc = img.getAttribute("src");
      if (setSrc && !setSrc.startsWith("http") && !setSrc.startsWith("https")) {
        // Ensure directApi doesn't have a trailing slash
        img.src = `${directApi.replace(/\/$/, "")}${
          setSrc.startsWith("/") ? "" : "/"
        }${setSrc}`;
      }
    });
    return tempDiv.innerHTML;
  };

  return (
    //bg-gradient-to-r from-gray-300 to-slate-100
    <>
      <h2 className="PageTitle text-gray-800 dark:text-white  text-8xl justify-center items-center flex drop-shadow-[0_1.2px_1.2px_rgba(0,3,3,0.8)] font-thin  flex-grow w-full h-full">
        {page.title}
      </h2>
      {/* page container */}
      <div
        className="PageContainer text-4xl max-w-full gap-4 justify-center items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] [&_PageContainer_p_img]:w-100 flex flex-grow h-full w-full [&_*]:m-2 p-4 bg-red500 "
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(prependApiUrlToImages(page.container)),
        }}
      >
        {/* {console.log("pagecontainer = ", page.container)} */}
      </div>
      <div className="Contents flex flex-col  bg-transparent  text-4xl gap-4 justify-center items-center flex-grow w-full p-4 ">
        {page.contents.map((content) => (
          <div key={content.id} id={content.id}>
            <h3 className="ContentTitle text-gray-800 dark:text-white  text-6xl justify-center items-center flex m-4 flex-grow w-full drop-shadow-[0_1.2px_1.2px_rgba(0,3,3,0.8)] p-4">
              {content.title}
            </h3>
            {/* content container */}
            <div
              className="ContentContainer text-4xl flex flex-col drop-shadow-[0_1.2px_1.2px_rgba(0,3,3,1)] gap-4 bg-inherit justify-items-center justify-center items-center m-4 p-4 flex-grow w-full "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  prependApiUrlToImages(content.container)
                ),
              }}
            ></div>
          </div>
        ))}
      </div>
    </>
  );
};
