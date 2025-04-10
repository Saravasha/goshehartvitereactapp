import React, { useState } from "react";

const AssetSearch = ({ searchAsset }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    preventDefault(e);
  };

  return (
    <>
      <div className="Search  rounded  flex  align-center justify-center ">
        {/* <form
          </form>
          type="button"
          onChange={(e) => searchAsset(e)}
          className="w-full max-w-sm"
        > */}
        <div className="flex align-center border-b-1 border-black py-2">
          <input
            onChange={(e) => searchAsset(e)}
            type="text"
            className="font-thin bg-transparent border-none shadows-lg rounded w-1/1 text-black  py-1   focus:outline-none"
            placeholder="Search Gallery for an Asset by ..."
            onSubmit={() => handleSubmit()}
          />
          {/* <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="button"
          >
            Search
          </button> */}
        </div>
      </div>
    </>
  );
};

export default AssetSearch;
