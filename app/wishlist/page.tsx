import PopularCategories from "@/components/Home/PopularCategories";
import React from "react";

const page = () => {
  return (
    <div className="w-7xl mx-auto ">
      <h1 className="max-w-7xl   text-3xl font-bold  mx-auto my-5 text-center ">
        Wishlist
      </h1>

      <PopularCategories />
    </div>
  );
};

export default page;
