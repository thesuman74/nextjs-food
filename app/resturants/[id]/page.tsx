import ResturandIdDetail from "@/components/resturant/ResturandIdDetail";
import ResturantMenuScroll from "@/components/resturant/ResturantHorizontalScroll";
import ResturantMenuSection from "@/components/resturant/ResturantMenuSection";

import React from "react";

async function detailId(noteId: string) {
  const res = await fetch(`http://localhost:8000/resturants/${noteId}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export default async function Details({ params }: any) {
  const details = await detailId(params.id);

  if (!details) return <div>Loading...</div>;

  return (
    <>
      <ResturandIdDetail details={details} />
      <ResturantMenuScroll />
      <ResturantMenuSection />
    </>
  );
}
