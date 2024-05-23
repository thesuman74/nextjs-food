import React from "react";
import FilterSection from "../components/filter/FilterSectionCard";
import PopularCategories from "../Home/PopularCategories/PopularCategories";
import Divider from "../components/ui/divider";

const Page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto   h-full flex">
      <Divider />

      <div className="w-1/4 h-screen mt-19  left-0 p-0 m-0">
        <FilterSection />
      </div>
      <div className="w-3/4  mr-10 p-0 m-0  ">
        <div className="p-0 m-0">
          <PopularCategories />
        </div>
        <div className="p-0 m-0">
          <PopularCategories />
        </div>
        <div className="p-0 m-0">
          <PopularCategories />
        </div>
        <div className="p-0 m-0">
          {/* Add other components here below PopularCategories */}
        </div>
      </div>
    </div>
  );
};

export default Page;
