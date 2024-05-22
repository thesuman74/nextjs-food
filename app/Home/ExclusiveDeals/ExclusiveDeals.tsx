import ExclusiveDealsCard from "@/app/components/cards/ExclusiveDealsCard";
import React from "react";

const ExclusiveDeals = () => {
  return (
    <div className="w-full mx-auto">
      <h1 className="ml-20 text-3xl font-bold  mx-auto my-5 ">
        Exclusive Deals
      </h1>

      <ExclusiveDealsCard />
    </div>
  );
};

export default ExclusiveDeals;
