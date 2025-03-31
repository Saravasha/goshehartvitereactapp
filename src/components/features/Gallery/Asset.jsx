import React from "react";

const Asset = ({ image, categories, directApi }) => {
  var categoryName = categories.map((cat) => cat.name);
  //   console.log(categoryName);

  return (
    <div className="grid max-w-sm rounded shadow-lg bg-white" key={image.id}>
      <img
        className="grid max-w-xs p-4 bg-transparent rounded shadow-lg m-4"
        alt={image.name}
        src={directApi + image.imageUrl}
      ></img>
      <h1 className="mx-4 font-thin p-4">{image.name}</h1>
      <div className=".font-thin text-purple-500 text-xl">
        {image.description}
      </div>
      <div className=" bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 inline-block gap-4">
        {categoryName}
      </div>
    </div>
  );
};
export default Asset;
