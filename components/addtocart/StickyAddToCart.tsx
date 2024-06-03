"use client";

import React from "react";
import {
  decrement,
  increment,
  removeProducts,
} from "@/lib/store/features/cart/ProductSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { UtensilsCrossed } from "lucide-react";

const StickyAddToCart = () => {
  return (
    <div className="sm:hidden md:hidden lg:flex sticky top-36 m-4 flex h-[500px] hide-scroll-bar min-w-max max-w-xl w-96 flex-col items-center rounded-xl overflow-y-scroll overflow-x-hidden shadow-xl">
      <div className="mb-4 border-b-2 sticky top-0 bg-white w-full h-auto flex justify-center">
        <div className="mt-4 space-x-10 mb-4">
          <button className="rounded-xl border border-slate-200 bg-white px-7 py-3 text-pink-500">
            Delivery
          </button>
          <button className="rounded-xl border border-slate-200 bg-white px-7 py-3 text-pink-500">
            Pickup
          </button>
        </div>
      </div>
      <CartData />
    </div>
  );
};

export default StickyAddToCart;

function CartData() {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.products.items);
  console.log("this is redux data from productslice", items);

  if (!items || items.length === 0) {
    return (
      <div className="h-screen flex flex-wrap flex-col justify-center items-center">
        <h1 className="text-bold text-3xl">Add items into cart</h1>
        <div className="flex flex-col items-center">
          <UtensilsCrossed size={60} color="#f53d7d" />
          <p className="text-3xl font-bold">Hungry</p>
        </div>
      </div>
    );
  }

  const handleClick = (id: string) => {
    dispatch(removeProducts(id));
  };

  const handleIncrement = (id: string) => {
    dispatch(increment(id));
  };

  const handleDecrement = (id: string) => {
    dispatch(decrement(id));
  };

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <>
      <div className="w-full h-full">
        {items.map((item) => (
          <div
            key={item.id}
            className="max-w-sm min-w-max mb-3 rounded-lg p-6 shadow-md sm:flex sm:justify-start"
          >
            <img
              src={item.imageLink}
              alt={item.title}
              className="w-16 h-auto text-sm rounded-lg object-cover"
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-sm font-bold text-gray-900 truncate w-16">
                  {item.title}
                </h2>
                <p className="mt-1 text-xs text-gray-700">{item.description}</p>
                <div className="flex items-center border-gray-100">
                  <span
                    onClick={() => handleDecrement(item.id)}
                    className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    -
                  </span>
                  <input
                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                    type="number"
                    value={item.quantity}
                    readOnly
                    min="1"
                  />
                  <span
                    onClick={() => handleIncrement(item.id)}
                    className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                  >
                    +
                  </span>
                </div>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex flex-col items-center space-y-4">
                  <div onClick={() => handleClick(item.id)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                  <p className="text-sm">{item.price} $</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 w-full">
        <button className="w-full rounded-md bg-red-400 p-3 text-center text-lg text-white">
          Total: {total.toFixed(2)}
        </button>
      </div>
    </>
  );
}
