import React from "react";
import FilterSection from "../components/filter/FilterSectionCard";
import PopularCategories from "../Home/PopularCategories/PopularCategories";
import Divider from "../components/ui/divider";
import ExclusiveDeals from "../Home/ExclusiveDeals/ExclusiveDeals";
import DownloadSection from "../Home/DownloadSection/DownloadSection";

const Page = () => {
  return (
    <div className="max-w-screen-2xl mx-auto h-full flex">
      <div className="w-1/4 h-screen mt-20  left-0 p-0 m-0">
        <FilterSection />
      </div>
      <div className="w-3/4  mr-10 ">
        <Divider />
        <Divider />
        <DownloadSection />

        <ExclusiveDeals />
        <PopularCategories />
        <PopularCategories />
        <PopularCategories />
        <PopularCategories />
      </div>
    </div>
  );
};

export default Page;
