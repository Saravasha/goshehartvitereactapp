import React, { useState } from "react";

const AssetSearch = ({ searchAsset, resetSearch, searchTerm }) => {
  const handleChange = (e) => {
    searchAsset(e.target.value);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="Search  rounded  flex   justify-center border-4 border-transparent">
        <div className="flex   border-b-1 border-black w-1/2 py-2">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            className="text-center font-thin bg-transparent border-none w-1/1 text-black dark:text-white py-1 focus:outline-none"
            placeholder="Search Gallery for an Asset by ..."
          />
        </div>
        <button
          type="button"
          onClick={resetSearch}
          className={`transition-all duration-3000 ease-in-out transform 
              ${searchTerm ? "opacity-100 scale-100" : "opacity-0 scale-0"} 
              px-2 py-1 border rounded text-sm ml-4`}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default AssetSearch;
