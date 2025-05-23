import React from "react";
import { useData } from "../../api/ApiContext";

const Asset = ({ asset }) => {
  const { directApi } = useData();

  const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];
  const videoExtensions = ["mp4", "webm", "ogg"];

  const getFileExtension = (url) => {
    const parts = url.split(".");
    return parts[parts.length - 1].toLowerCase().split("?")[0];
  };

  const extension = getFileExtension(asset.imageUrl);

  const isImage = imageExtensions.includes(extension);
  const isVideo = videoExtensions.includes(extension);

  return (
    <>
      {isImage && (
        <img
          alt={asset.name}
          src={directApi + asset.imageUrl}
          loading="lazy"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}

      {isVideo && (
        <video
          controls
          src={directApi + asset.imageUrl}
          style={{ maxWidth: "100%", height: "auto" }}
          preload="none"
        >
          Your browser does not support the video tag.
        </video>
      )}

      {!isImage && !isVideo && <div>Unsupported file format: {extension}</div>}
    </>
  );
};

export default Asset;
