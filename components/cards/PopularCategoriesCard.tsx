"use client";

import { add, remove } from "@/lib/store/features/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { DealsTypes } from "@/Type";
import { Heart } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PopularCategoriesCard = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) =>
    state.cart.items.map((item) => item.id)
  );
  const [data, setData] = useState<DealsTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/deals`, {
          next: { revalidate: 10 },
        });
        const data = await res.json();
        setData(data);
        console.log("Fetched from restaurant:", data);
      } catch (error) {
        console.error("Error fetching deals:", error);
      }
    };

    fetchData();
  }, []);

  const handleToggleCart = (item: DealsTypes) => {
    const itemInCart = items.includes(item.id);
    if (itemInCart) {
      console.log("Removing from cart", item.id);
      dispatch(remove(item.id));
    } else {
      console.log("Adding to cart", item.id);
      dispatch(add(item));
    }
  };

  return (
    <section className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 container max-w-7xl mx-auto p-4">
      {data.map((item: DealsTypes) => {
        const isInCart = items.includes(item.id);

        return (
          <div
            key={item.id}
            className="relative max-w-xs mt-3 rounded-lg shadow-md mx-auto group"
          >
            {/* Favorite button */}
            <div className="w-7 h-7 cursor-pointer z-10 flex items-center justify-center rounded-full bg-white top-2 right-5 absolute hover:fill group-hover:scale-105">
              <button onClick={() => handleToggleCart(item)}>
                <Heart
                  className={`hover:fill-red-500 ${
                    isInCart ? "fill-red-500" : ""
                  }`}
                  color={isInCart ? "#ff0000" : "#ff0000"}
                />
              </button>
            </div>
            <Link href={`/deals/${item.id}`}>
              <img
                src="/Images/food1.png"
                alt={item.title}
                className="w-full rounded-lg rounded-b-none transition-transform duration-200 group-hover:scale-105 object-cover"
              />
            </Link>
            <div className="bg-gray-100 p-2 rounded-lg rounded-t-none">
              <p className="ml-5 font-medium text-wrap text-sm">{item.title}</p>
              <p className="text-Ptext text-sm ml-5">{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default PopularCategoriesCard;
