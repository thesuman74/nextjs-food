import { fetchExclusiveDeals } from "@/app/api/products/api";
import { DealsTypes, ResturantTypes } from "@/Type";
import Link from "next/link";
import React from "react";

const ExclusiveDealsCard = async () => {
  // fetching data from api
  const res = await fetch(`http://localhost:8000/resturants`, {
    next: { revalidate: 10 },
  });

  const data = await fetchExclusiveDeals();
  return (
    <section className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 items-center gap-2 container max-w-7xl mx-auto ">
      {data.map((item: ResturantTypes) => (
        <Link href={`/resturants/${item.id}`} key={item.id}>
          <div className="relative max-w-sm overflow-hidden rounded-2xl shadow-lg group h-[250px] sm:w-">
            <img
              src={item.imageLink}
              alt="image"
              className=" w-full h-full object-cover transition-transform duration-200 group-hover:scale-110 "
            />
            <div className="absolute right-10 top-0 flex h-14 w-16 items-center justify-center rounded-b-xl bg-black">
              <p className="text-lg text-white">-40%</p>
            </div>
            <div className="absolute inset-0 flex items-end bg-gradient-to-r from-black/60 to-transparent">
              <div className="m-5 p-4 text-white">
                <p className="text-sm text-orange-400">
                  {item.resturant_location}
                </p>
                <p className="mb-2 text-lg font-bold">{item.resturant_name}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default ExclusiveDealsCard;
