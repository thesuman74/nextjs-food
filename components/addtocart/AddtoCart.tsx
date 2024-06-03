"use client";

import { remove } from "@/lib/store/features/cart/CartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import React from "react";
import PopularCategories from "../Home/PopularCategories";

const AddtoCart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  // console.log("This is the data from cart section", items);

  // Check if there are no items in the cart
  if (!items || items.length === 0) {
    return (
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="text-bold text-5xl">Add items into cart</h1>
        <PopularCategories />
      </div>
    );
  }

  const handleClick = (id: string) => {
    dispatch(remove(id));
  };

  // Constant value for price and quantity
  const price = 100.0; // Example price
  const quantity = 1; // Example quantity

  // Calculate subtotal
  const subtotal = items.reduce((total, item) => total + price * quantity, 0);

  // Placeholder shipping cost
  const shipping = 4.99;

  // Calculate total
  const total = subtotal + shipping;

  return (
    <>
      <div>
        <div className="bg-gray-100 pt-10">
          <h1 className="mb-10 text-center text-5xl font-bold sticky top-16 p-6 bg-white">
            Cart Items
          </h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <img
                    src={item.imageLink}
                    alt={item.title}
                    className="w-full rounded-lg sm:w-40"
                  />
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {item.title}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        {item.subtitle}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                          -
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          name="quantity"
                          id="quantity"
                          value={quantity} // Use constant quantity
                          min="1"
                          readOnly
                        />
                        <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                          +
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">{price} ₭</p>{" "}
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Calculate section */}
            <div className="sticky top-40 mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">{subtotal.toFixed(2)} ₭</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">{shipping.toFixed(2)} ₭</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div>
                  <p className="mb-1 text-lg font-bold">{total.toFixed(2)} ₭</p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
      <PopularCategories />
    </>
  );
};

export default AddtoCart;
