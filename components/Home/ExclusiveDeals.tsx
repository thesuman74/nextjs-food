import ExclusiveDealsCard from "@/components/cards/ExclusiveDealsCard";
import React from "react";

export const ExclusiveDeals = () => {
  return (
    <div className="w-full mx-auto mb-5">
      <h1 className="container  text-3xl font-bold  mx-auto my-5 ">
        Exclusive Deals
        <span className="ml-5 text-Ptext text-3xl ">40% off</span>
      </h1>

      <ExclusiveDealsCard />
    </div>
  );
};
