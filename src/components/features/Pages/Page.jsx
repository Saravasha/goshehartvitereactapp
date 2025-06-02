import DOMPurify from "dompurify";
import { useData } from "../../api/ApiContext";

export const Page = ({ page }) => {
  const { directApi } = useData();
  const joinUrl = (base, path) =>
    `${base.replace(/\/+$/, "")}/${path.replace(/^\/+/, "")}`;

  const prependApiUrlToMedia = (htmlContent) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = htmlContent;

    tempDiv.querySelectorAll("img").forEach((img) => {
      const src = img.getAttribute("src");
      const alt = img.getAttribute("alt");
      const loading = img.getAttribute("loading");

      if (!alt) img.setAttribute("alt", "");
      if (!loading) img.setAttribute("loading", "lazy");

      if (
        src &&
        !src.startsWith("http://") &&
        !src.startsWith("https://") &&
        !src.startsWith("//")
      ) {
        img.src = joinUrl(directApi, src);
      }
    });

    tempDiv.querySelectorAll("video").forEach((video) => {
      const poster = video.getAttribute("poster");
      if (
        poster &&
        !poster.startsWith("http://") &&
        !poster.startsWith("https://") &&
        !poster.startsWith("//")
      ) {
        video.setAttribute("poster", joinUrl(directApi, poster));
      }
    });

    return tempDiv.innerHTML;
  };

  return (
    <div
      className="Page bg-white/30 backdrop-blur-sm flex flex-col gap-4 rounded shadow-2xl  text-4xl font-thin w-full [&_*]:w-full hover:shadow-2xl flex-grow    h-full "
      key={page.id}
      id={page.title}
    >
      <h2 className="PageTitle italic text-shadow-2xs text-gray-800 dark:text-white dark:bg-green-900/30  text-8xl justify-center items-center flex drop-shadow-[0_1.2px_1.2px_rgba(0,3,3,0.8)] font-thin flex-grow w-full h-full">
        {page.title}
      </h2>
      {/* page container */}
      <div
        className="PageContainer text-4xl max-w-full gap-4  italic text-shadow-2xs justify-center items-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] [&_PageContainer_p_img]:w-100 flex flex-grow h-full w-full [&_*]:m-2 p-4  "
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(prependApiUrlToMedia(page.container)),
        }}
      ></div>
      <div className="Contents flex flex-col  bg-transparent  text-4xl gap-4 justify-center items-center flex-grow w-full p-4">
        {page.contents.map((content) => (
          <div key={content.id} id={content.title}>
            <h3 className="ContentTitle italic text-shadow-2xs text-gray-800 dark:text-white dark:bg-green-900/30 text-6xl justify-center items-center flex m-4 flex-grow w-full drop-shadow-[0_1.2px_1.2px_rgba(0,3,3,0.8)] p-4">
              {content.title}
            </h3>
            {/* content date */}
            <h4 className="ContentContainerDateString italic text-shadow-2xs text-gray-800 dark:text-white pt-4 text-4xl justify-center items-center flex  flex-grow w-full drop-shadow-[0_1.2px_1.2px_rgba(0,3,3,0.8)]">
              {content.dateString}
            </h4>
            {/* content container */}
            <div
              className="ContentContainer text-4xl italic text-shadow-2xs flex flex-col drop-shadow-[0_1.2px_1.2px_rgba(0,3,3,1)] gap-4 bg-inherit justify-items-center justify-center items-center m-4 p-4 flex-grow w-full "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  prependApiUrlToMedia(content.container)
                ),
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
