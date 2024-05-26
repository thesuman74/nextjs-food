import DealsDetails from "@/components/deals/DealsDetails";
import { ExclusiveDeals } from "@/components/Home/ExclusiveDeals";
import React from "react";

export default async function Details({ params }: any) {
  return (
    <>
      <DealsDetails notesId={params.id} />
      <ExclusiveDeals />
    </>
  );
}
