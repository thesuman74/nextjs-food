import React, { Suspense } from "react";
import Loading from "../loading";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const response = await fetch(`http://localhost:8000/deals/?title=${query}`);
  const data = response.json();

  console.log("this is data from search ", data);
  return (
    <section>
      <div className="container mx-auto max-w-screen-lg my-5">
        <h1 className="my-4 ml-3 text-3xl font-normal">Featured Jobs</h1>
        <div className="flex flex-wrap justify-between gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3"></div>
      </div>
    </section>
  );
}
