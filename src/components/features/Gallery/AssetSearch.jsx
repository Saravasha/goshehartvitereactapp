import React from "react";

const AssetSearch = ({ searchAsset, resetSearch, searchTerm }) => {
  const handleChange = (e) => {
    searchAsset(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="Search rounded flex justify-center border-transparent"
    >
      <div className="flex flex-col justify-center sm:w-1/2 w-[85vw] border-inherit gap-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleChange}
          className="justify-center font-thin bg-transparent placeholder:text-center  placeholder:!text-2xl  placeholder:sm:!text-1xl dark:border-black border-white border-b dark:text-white text-white py-1 focus:outline-none"
          placeholder="Search Gallery for an Asset by ..."
          autoComplete="off"
        />
        <button
          type="button"
          onClick={resetSearch}
          aria-label="Reset search input"
          className={`transition-all duration-3000 ease-in-out transform justify-center !text-[2vw] flex dark:!bg-green-700 dark:!text-white !bg-red-500 !text-white
          ${searchTerm ? "opacity-100 scale-100" : "opacity-0 scale-0"} 
          px-2 py-1 border rounded text-sm`}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default AssetSearch;
