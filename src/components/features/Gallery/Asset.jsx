import React from "react";
import { useData } from "../../api/ApiContext";

const Asset = ({ asset }) => {
  const { directApi } = useData();

  const isImage = asset.type === "Image";
  const isVideo = asset.type === "Video";
  const isAudio = asset.type === "Audio";

  const fileUrl = asset.fileUrl ? encodeURI(directApi + asset.fileUrl) : null;
  const thumbnailUrl = asset.thumbnailUrl
    ? directApi + asset.thumbnailUrl
    : null;

  if (!fileUrl) return <div className="text-red-500">Missing asset file</div>;

  return (
    <div className="relative w-full">
      {/* Image Asset */}
      {isImage && (
        <img
          alt={asset.name}
          src={fileUrl}
          loading="lazy"
          className="max-w-full h-auto rounded shadow"
        />
      )}
      {/* Video Asset with Thumbnail */}
      {isVideo && thumbnailUrl && (
        <div className="relative">
          <img
            alt={`Thumbnail for ${asset.name}`}
            src={thumbnailUrl}
            loading="lazy"
            className="max-w-full h-auto rounded shadow object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-black bg-opacity-50 rounded-full p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      )}

      {/* Video Fallback if no thumbnail */}
      {isVideo && !thumbnailUrl && (
        <video
          controls
          src={fileUrl}
          className="max-w-full h-auto rounded shadow"
          preload="none"
        >
          Your browser does not support the video tag.
        </video>
      )}

      {/* Audio Support (Optional) */}
      {isAudio && (
        <audio controls src={fileUrl} className="w-full">
          Your browser does not support the audio element.
        </audio>
      )}

      {/* Unknown Type */}
      {!isImage && !isVideo && !isAudio && (
        <div className="text-gray-500 text-sm">
          Unsupported asset type: {asset.type}
        </div>
      )}
    </div>
  );
};

export default Asset;
