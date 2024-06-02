import PopularCategories from "@/components/Home/PopularCategories";
import ResturantDetailCard from "@/components/resturant/cards/ResturantDetailCard";
import ResturandIdDetail from "@/components/resturant/ResturandIdDetail";
import ResturantMenuScroll from "@/components/resturant/ResturantHorizontalScroll";
import ResturantMenuSection from "@/components/resturant/ResturantMenuSection";
import Divider from "@/components/ui/divider";
import React from "react";

async function detailId(noteId: string) {
  const res = await fetch(`http://localhost:8000/deals/${noteId}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

const page = () => {
  return (
    <div>
      <ResturantDetailCard />

      <ResturantMenuScroll />

      <ResturantMenuSection />
    </div>
  );
};

export default page;
