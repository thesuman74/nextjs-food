"use client";
import React, { useRef } from "react";
import TabsSection from "../tabs/TabsSection";
import { MoveLeft, MoveRight } from "lucide-react";
import PopularCategories from "../Home/PopularCategories";
import PopularRestaurantsCard from "./PopularResturantsCard";
import ResturantCards from "../resturant/cards/ResturantCards";
import StickyAddToCart from "../addtocart/StickyAddToCart";

const ResturantDetailCard = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const targetRef1 = useRef<HTMLDivElement | null>(null);
  const targetRef2 = useRef<HTMLDivElement | null>(null);

  const scrollToID = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div>
        <div className="mx-auto mt-6 max-w-6xl sm:px-6 lg:px-8 border-b-2 ">
          <div className="grid md:grid-cols-2 gap-1 mx-4 ">
            <div className="md:flex-1  max-w-sm">
              <div className="mb-4 h-auto max-w-sm rounded-lg bg-gray-100 md:h-80">
                <img
                  src="/Images/hotel.png"
                  alt="Product Image"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
            </div>
            <div className="md:flex-1 px-4 ">
              <h2 className="mb-2 text-2xl font-bold leading-tight tracking-tight text-gray-800 md:text-3xl">
                The Grand Restaurant
              </h2>
              <p className="text-sm text-gray-500">
                From{" "}
                <a href="#" className="text-indigo-600 hover:underline">
                  Location
                </a>
              </p>

              <div className="my-4 flex items-center space-x-4">
                <div className="flex">
                  <p className="mx-2 text-xs font-semibold text-green-500">
                    Free Delivery
                  </p>
                  <p className="mx-2 text-xs font-semibold text-green-500">
                    120 kr Minimum
                  </p>
                  <p className="mx-2 text-xs font-semibold text-green-500">
                    9 kr service
                  </p>
                </div>
              </div>

              <p className="text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                suscipit, sapien eget pharetra placerat.
              </p>

              <div className="flex space-x-4 py-4">
                <div className="relative"></div>
              </div>
              <button
                type="button"
                className="bg-transparent hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
              >
                Add to Favourites
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* // deals and offer */}

      <div className="container mx-11 grid grid-cols-4 gap-4 mb-5 ">
        <div className="max-w-xs mt-3  bg-white shadow-md rounded-md overflow-hidden">
          <div className="bg-yellow-50 opac text-center py-4">
            <h3 className="text-2xl font-bold text-gray-800">50% OFF</h3>
            <p className="text-gray-600">Limited Time Offer</p>
          </div>
        </div>

        <div className="max-w-xs mt-3  bg-white shadow-md rounded-md overflow-hidden">
          <div className="bg-yellow-50 opac text-center py-4">
            <h3 className="text-2xl font-bold text-gray-800">40% OFF</h3>
            <p className="text-gray-600">Limited Time Offer</p>
          </div>
        </div>
      </div>

      {/* scroll search section */}
      <div className="max-w-6xl mx-auto flex items-center space-x-6 p-5">
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search items here"
            className="rounded-lg m-2 border"
          />
        </div>
        <button
          onClick={scrollLeft}
          className="bg-gray-50 hover:bg-gray-100 p-2 rounded-full"
        >
          <MoveLeft color="#ffcb5c" />
        </button>
        <div
          ref={scrollRef}
          className="flex flex-nowrap space-x-6 text-lg overflow-x-scroll hide-scroll-bar"
        >
          <div
            onClick={() => scrollToID(targetRef1)}
            className="cursor-pointer hover:text-blue-300 hover:shadow-xl "
          >
            Test
          </div>
          <div
            onClick={() => scrollToID(targetRef2)}
            className="cursor-pointer hover:text-blue-300 hover:shadow-xl "
          >
            Popular
          </div>
          <div>Popular</div>
          <div>Popular</div>
          <div>Popular</div>
          <div>Popular</div>
          <div>Popular</div>
          <div>Popular</div>
          <div>Popular</div>
          <div>Popular</div>
          <div>Popular</div>
          <div>Popular</div>
          <div>Popular</div>
          <div>Popular</div>
          <div>Popular</div>
        </div>
        <button
          onClick={scrollRight}
          className="bg-gray-50 hover:bg-gray-100 p-2 rounded-full"
        >
          <MoveRight color="#ffcb5c" />
        </button>
      </div>
      <StickyAddToCart />
      <div ref={targetRef1} id="target1">
        <ResturantCards />
      </div>

      <div ref={targetRef2} id="target2">
        <PopularCategories />
      </div>
    </>
  );
};

export default ResturantDetailCard;
