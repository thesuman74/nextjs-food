"use client";

import React from "react";
import FilterSeek from "../filter/FilterSeek";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Create a debounced handleSearch function
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`search?${params.toString()}`);
  }, 300); // Debounce for 300 milliseconds

  return (
    <div>
      <div className="mx-auto flex max-w-7xl items-center">
        <div className="relative flex h-12 w-full items-center overflow-hidden rounded-lg bg-white shadow-lg">
          <div className="grid h-full w-12 place-items-center text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full pr-2 text-sm text-gray-700 outline-none"
            type="text"
            id="search"
            placeholder="Search something.."
            name="search"
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={searchParams.get("query")?.toString()}
          />

          {/* Filter icon */}
          <div className="mx-3 hover:scale-110 block lg:hidden">
            <FilterSeek />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
