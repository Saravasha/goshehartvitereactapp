import React from "react";

const Asset = ({ image, directApi }) => {
  //   const { assets, directApi } = useApi();

  return (
    <div className="grid mx-8 " key={image.id}>
      <p className="mx-4  p-4">{image.name}</p>
      <img
        className="grid max-w-xs p-4 border-black border-4 m-4"
        alt={image.name}
        src={directApi + image.imageUrl}
      ></img>
    </div>
  );
};
export default Asset;
