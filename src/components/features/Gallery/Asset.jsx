import React from "react";

const Asset = ({ image, categories, directApi }) => {
  // var categoryName = categories.map((cat) => cat.name);
  // console.log(categories);

  return (
    <div
      className="Asset sm:max-w-sm md:max-w-md lg:max-w-lg  rounded shadow-lg bg-inherit  border-black border-4 h-fit "
      key={image.id}
    >
      <img
        className="Asset-Image w-full bg-white border-black border-b-4  shadow-lg p-4 "
        alt={image.name}
        src={directApi + image.imageUrl}
      ></img>
      <div className="Asset-Title m-4 w-fit  flex align-center justify-center text-2xl font-semibold ">
        {image.name}
      </div>
      <div className="Description flex align-center justify-center border-black border-4 m-4 font-thin text-green-50 text-xl p-4">
        {image.description}
      </div>
      <div>
        <div className="rounded-full m-4  ">
          {categories.map((category) => {
            return (
              // <li>{console.log(cat)}</li>;
              <div
                key={category.id}
                className="  bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold  border-black border-4 hover:bg-inherit text-black m-1 inline-block"
              >
                {category.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Asset;
