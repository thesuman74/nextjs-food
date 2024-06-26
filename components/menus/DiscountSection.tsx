import DiscountSectionCard from "@/components/cards/DiscountSectionCard";
import React from "react";

const DiscountSection = () => {
  return (
    <div className="w-full mx-auto">
      <h1 className="max-w-7xl  text-3xl font-bold  mx-auto my-5 ">
        Deals and Offers
      </h1>

      <DiscountSectionCard />
    </div>
  );
};

export default DiscountSection;
