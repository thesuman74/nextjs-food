import PopularCategoriesCard from "@/components/cards/PopularCategoriesCard";
import React, { Suspense } from "react";

const PopularCategories = () => {
  return (
    <div className="w-7xl mx-auto ">
      <h1 className="max-w-7xl   text-3xl font-bold  mx-auto my-5 ">
        Popular Categories
      </h1>

      <PopularCategoriesCard />
    </div>
  );
};

export default PopularCategories;
