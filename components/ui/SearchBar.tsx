import React from "react";
import FilterSeek from "../filter/FilterSeek";

const SearchBar = () => {
  return (
    <div>
      <div className="mx-auto flex  max-w-7xl  items-center ">
        <div className="relative flex h-12 w-full items-center overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="grid h-full w-12 place-items-center text-gray-300 max-[760]:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full pr-2 text-sm text-gray-700 outline-none"
            type="text"
            id="search"
            placeholder="Search something.."
          />

          {/* filter icon  */}
          <div className="mx-3 hover:scale-110  md:hidden ">
            <FilterSeek />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
