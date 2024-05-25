import { UtensilsCrossed } from "lucide-react";
import React from "react";

const StickyAddToCart = () => {
  return (
    <>
      <div className="sm:hidden md:hidden lg:flex sticky top-36   m-4 flex h-[500px] min-w-max max-w-xl w-96 flex-col items-center justify-between rounded-md bg-white shadow-xl border border-slate-300">
        <div className="mt-4 space-x-10">
          <button className="rounded-md border border-slate-400 bg-white px-7 py-3 text-pink-500">
            Delivery
          </button>
          <button className="rounded-md border border-slate-400 bg-white px-7 py-3 text-pink-500">
            Pickup
          </button>
        </div>
        <div className="flex flex-col items-center">
          <UtensilsCrossed size={60} color="#f53d7d" />
          <p className="text-3xl font-bold ">Hungry</p>
        </div>
        <div className="w-full mx-5 rounded-md bg-gray-400 p-3 text-center text-lg text-white">
          Review order details
        </div>
      </div>
    </>
  );
};

export default StickyAddToCart;
