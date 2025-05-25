// import React, { useState } from "react";
// import { useData } from "../../api/ApiContext";

// const VideoPlayer = ({ asset }) => {
//   const { directApi } = useData();
//   const [isPlaying, setIsPlaying] = useState(false);

//   const videoUrl = directApi + asset.fileUrl;
//   const thumbnailUrl = directApi + asset.thumbnailUrl;

//   const handlePlay = () => {
//     setIsPlaying(true);
//   };

//   return (
//     <div style={{ position: "relative", width: "100%", cursor: "pointer" }}>
//       {!isPlaying ? (
//         <div onClick={handlePlay} style={{ position: "relative" }}>
//           <img
//             src={thumbnailUrl}
//             alt={asset.name}
//             style={{
//               width: "100%",
//               height: "auto",
//               display: "block",
//             }}
//           />
//           <div
//             style={{
//               position: "absolute",
//               top: "50%",
//               left: "50%",
//               transform: "translate(-50%, -50%)",
//               fontSize: "48px",
//               color: "white",
//               textShadow: "0 0 10px black",
//             }}
//           >
//             ▶
//           </div>
//         </div>
//       ) : (
//         <video
//           controls
//           autoPlay
//           src={videoUrl}
//           style={{ width: "100%", height: "auto" }}
//         />
//       )}
//     </div>
//   );
// };

// export default VideoPlayer;
