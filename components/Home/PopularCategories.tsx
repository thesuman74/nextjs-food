import PopularCategoriesCard from "@/components/cards/PopularCategoriesCard";
import React, { Suspense } from "react";

const PopularCategories = () => {
  return (
    <div className="w-full mx-auto">
      <h1 className="ml-20 text-3xl font-bold  mx-auto my-5 ">
        Popular Categories
      </h1>

      <PopularCategoriesCard />
    </div>
  );
};

export default PopularCategories;
