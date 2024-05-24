import React from "react";
import FilterSection from "../components/filter/FilterSectionCard";
import PopularCategories from "../Home/PopularCategories/PopularCategories";
import Divider from "../components/ui/divider";
import ExclusiveDeals from "../Home/ExclusiveDeals/ExclusiveDeals";
import DownloadSection from "../Home/DownloadSection/DownloadSection";
import DiscountSection from "./DiscountSection/DiscountSection";
import CousinesSection from "./Cousines/CousinesSection";

const Page = () => {
  return (
    <>
      {/* <Divider />
      <Divider /> */}
      <DownloadSection />
      <DiscountSection />
      <CousinesSection />
      <ExclusiveDeals />
      <PopularCategories />
      <PopularCategories />
    </>
  );
};

export default Page;
