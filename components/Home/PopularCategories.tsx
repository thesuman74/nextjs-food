import PopularCategoriesCard from "@/components/cards/PopularCategoriesCard";
import React, { Suspense } from "react";
import AddtoCart from "../addtocart/AddtoCart";
import AddtoCartButton from "../ui/AddtoCartButton";

const PopularCategories = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <div className="flex ">
        <h1
          className=" max-w-7xl text-3xl font-bold    my-5 
        "
        >
          Popular Categories
        </h1>
        {/* <AddtoCartButton /> */}
      </div>

      <PopularCategoriesCard />
    </div>
  );
};

export default PopularCategories;
