import { DealsTypes } from "@/Type";
import { Heart } from "lucide-react";
import Link from "next/link";
import React from "react";

const PopularCategoriesCard = async () => {
  // fetching data from api
  const res = await fetch(`http://localhost:8000/deals`, {
    next: { revalidate: 10 },
  });
  const data = await res.json();
  console.log("this is fetched from resturant ", data);

  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 container max-w-7xl mx-auto p-4">
      {data.map((item: DealsTypes) => (
        <Link href={`/deals/${item.id}`} key={item.id}>
          <div
            key={item.id}
            className="relative max-w-xs mt-3 rounded-lg shadow-md mx-auto group"
          >
            {/* fav button  */}
            <div className="w-7 h-7 z-10 flex items-center justify-center rounded-full bg-white top-2 right-5 absolute hover:fill group-hover:scale-105">
              <Link key={item.id} href={"/#"}>
                <Heart className="hover:fill-red-500" color="#e13370" />
              </Link>
            </div>
            <img
              src="/Images/food1.png"
              alt=""
              className="w-full rounded-lg rounded-b-none transition-transform duration-200 group-hover:scale-105"
            />
            <div className="bg-gray-100 p-2 rounded-lg rounded-t-none">
              <p className="ml-5 font-medium text-wrap text-sm ">
                {item.title}
              </p>
              <p className="text-Ptext text-sm ml-5">21 {item.subtitle}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default PopularCategoriesCard;
