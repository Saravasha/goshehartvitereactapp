import React, { useState } from "react";

const AssetSearch = ({ searchAsset }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    preventDefault(e);
  };

  return (
    <>
      <div className="Search  rounded  flex   justify-center border-4 border-transparent">
        <div className="flex   border-b-1 border-black w-1/2 py-2">
          <input
            onChange={(e) => searchAsset(e)}
            type="text"
            className="text-center font-thin bg-transparent border-none w-1/1 text-black dark:text-white py-1 focus:outline-none"
            placeholder="Search Gallery for an Asset by ..."
            onSubmit={() => handleSubmit()}
          />
        </div>
      </div>
    </>
  );
};

export default AssetSearch;
