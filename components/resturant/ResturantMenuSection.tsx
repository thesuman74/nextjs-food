import ResturantCards from "./cards/ResturantCards";
import StickyAddToCart from "@/components/addtocart/StickyAddToCart";
import React from "react";
import ComboDeals from "./deals/ComboDeals";
import PopularDeals from "./deals/PopularDeals";
import PopularCategories from "../Home/PopularCategories";

const ResturantMenuSection = () => {
  return (
    <div>
      <div className="container mx-auto flex h-full w-auto flex-wrap ">
        <div className="w-3/4 flex flex-wrap">
          <ComboDeals />
          <PopularCategories />
          <PopularDeals />
        </div>
        <div className="w-1/4  ">
          <StickyAddToCart />
        </div>
      </div>
    </div>
  );
};

export default ResturantMenuSection;
