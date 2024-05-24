"use client";

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
      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <img
                  src={details.imageLink}
                  alt="Product Image"
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {details.title}
              </h2>
              <p className="text-gray-500 text-sm">
                From{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Resturant
                </a>
              </p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1">$</span>
                    <span className="font-bold text-orange-400 text-3xl">
                      25
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save 12%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div>
              </div>

              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                suscipit, sapien eget pharetra placerat.
              </p>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>

                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-orange-600 hover:bg-orange-500 text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ExclusiveDeals />
    </>
  );
}
