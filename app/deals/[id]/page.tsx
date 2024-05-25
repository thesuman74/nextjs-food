"use client";

import DealsDetails from "@/components/deals/DealsDetails";
import { ExclusiveDeals } from "@/components/Home/ExclusiveDeals";
import { useParams } from "next/navigation";
import React from "react";

async function detailId(noteId: string) {
  const res = await fetch(`http://localhost:8000/deals/${noteId}`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  return data;
}

export default async function Details({ params }: any) {
  const details = await detailId(params.id);

  //   const detailsList = [
  //     {
  //       id: "1",
  //       title: "Chef Burger London",
  //       subtitle: "Restaurant",
  //       imageLink: "/Images/food1.png",
  //     },
  //     {
  //       id: "2",
  //       title: "Pizza Palace",
  //       subtitle: "Restaurant",
  //       imageLink: "/Images/food2.png",
  //     },
  //     {
  //       id: "3",
  //       title: "Sushi World",
  //       subtitle: "Restaurant",
  //       imageLink: "/Images/food3.png",
  //     },
  //   ];
  //   const details = detailsList.find((item) => item.id === id);

  // fetching api

  if (!details) return <div>Loading...</div>;

  return (
    <>
      <DealsDetails details={details} />
      <ExclusiveDeals />
    </>
  );
}
