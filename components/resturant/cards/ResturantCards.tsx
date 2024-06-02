"use client";

import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { ResturantProductTypes } from "@/Type";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { addProducts } from "@/lib/store/features/cart/ProductSlice"; // Correct import

const ResturantCards = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) =>
    state.products.items.map((item) => item.id)
  ); // Accessing products state

  const [data, setData] = useState<ResturantProductTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:8000/resturantProducts`, {
          next: { revalidate: 10 },
        });
        const fetchedData = await res.json();
        setData(fetchedData);
        // console.log("Fetched from restaurantProducts:", fetchedData);
      } catch (error) {
        console.error("Error fetching restaurantProducts:", error);
      }
    };

    fetchData();
  }, []);

  const handleClick = (item: ResturantProductTypes) => {
    console.log("Adding product:", item);
    dispatch(addProducts(item));
  };

  return (
    <div className="flex flex-wrap">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative m-4 flex w-96 h-36 items-center justify-between rounded-xl bg-white shadow-md hover:bg-red-200"
        >
          <div className="mx-5">
            <p className="text-xl font-bold">{item.title}</p>
            <p className="text-orange-600">$ {item.price}</p>
            <span className="text-sm text-slate-600">{item.description}</span>
          </div>
          <div className="h-32 w-32 overflow-hidden rounded-xl">
            <img
              src={item.imageLink}
              alt={item.title}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute bottom-2 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white hover:bg-white shadow-md">
            <button
              onClick={() => handleClick(item)}
              className="text-xl text-orange-400 hover:text-orange-600"
            >
              <Plus />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResturantCards;
