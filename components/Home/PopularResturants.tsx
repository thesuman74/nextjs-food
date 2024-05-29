import PopularResturantsCard from "@/components/cards/PopularResturantsCard";
import React from "react";

const PopularResturants = () => {
  return (
    <div className="w-full mx-auto">
      <h1 className="max-w-7xl text-3xl font-bold  mx-auto my-5 ">
        Popular Resuturants
      </h1>

      <PopularResturantsCard />
    </div>
  );
};

export default PopularResturants;
