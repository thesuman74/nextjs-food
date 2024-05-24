import React from "react";
import PopularCategories from "../../components/Home/PopularCategories";
import DownloadSection from "../../components/Home/DownloadSection";
import DiscountSection from "../../components/wishlist/DiscountSection";
import CousinesSection from "../../components/wishlist/CousinesSection";
import { ExclusiveDeals } from "../../components/Home/ExclusiveDeals";

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
