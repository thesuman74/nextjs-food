import React from "react";
import ResturantCards from "../cards/ResturantCards";

export default function PopularDeals() {
  return (
    <div id="popular" className="w-full mx-auto">
      <h1 className=" text-3xl font-bold  mx-auto my-5 ">Popular Deals</h1>

      <ResturantCards />
      <ResturantCards />
      <ResturantCards />
    </div>
  );
}
