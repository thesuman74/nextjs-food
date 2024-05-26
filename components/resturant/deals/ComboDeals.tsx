import React from "react";
import ResturantCards from "../cards/ResturantCards";

export default function ComboDeals() {
  return (
    <section id="combodeal" className="w-full mx-auto">
      <h1 className=" text-3xl font-bold  mx-auto my-5 ">Combo Deals</h1>
      <ResturantCards />
    </section>
  );
}
