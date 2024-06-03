"use client";

import { DealsTypes } from "@/Type";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PopularCategoriesCard = () => {
  const [data, setData] = useState<DealsTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:8000/deals`, {
        next: { revalidate: 10 },
      });
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 container max-w-7xl mx-auto p-4">
      {data.map((item: DealsTypes) => (
        <Link href={`/deals/${item.id}`} key={item.id}>
          <div className="max-w-xs mt-3 rounded-lg shadow-md mx-auto group">
            <img
              src="/Images/food1.png"
              alt=""
              className="w-full rounded-lg rounded-b-none transition-transform duration-200 group-hover:scale-105"
            />
            <div className="bg-gray-100 p-2 rounded-lg rounded-t-none">
              <p className="ml-5 font-medium text-wrap">{item.title}</p>
              <p className="text-Ptext text-sm ml-5">21 {item.subtitle}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default PopularCategoriesCard;
