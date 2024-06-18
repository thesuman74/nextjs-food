import React, { Suspense } from "react";
import ResturantCards from "../cards/ResturantCards";
import {
  ResturantProductSkeletion,
  CardSkeleton,
} from "@/components/ui/Skeletions";

export default function ComboDeals() {
  return (
    <section id="combodeal" className="w-full mx-auto">
      <h1 className=" text-3xl font-bold  mx-auto my-5 ">Combo Deals</h1>

      <Suspense fallback={<ResturantProductSkeletion />}>
        <ResturantCards />
      </Suspense>
    </section>
  );
}
