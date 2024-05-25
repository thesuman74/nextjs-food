"use client";

import React, { useRef } from "react";
import PopularCategories from "@/components/Home/PopularCategories";
import { MoveLeft, MoveRight } from "lucide-react";
import ResturantMenuSection from "./ResturantMenuSection";
import ResturantCards from "./cards/ResturantCards";
import ComboDeals from "./deals/ComboDeals";
import PopularDeals from "./deals/PopularDeals";

const ResturantMenuScroll = () => {
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
    <div>
      <div className=" ">
        {/* scroll search section */}
        <div className=" bg-white  shadow-inner w-full sticky top-16 z-50  mx-auto flex items-center space-x-6 p-3">
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
              className="px-5   hover:underline-offset-4   cursor-pointer hover:text-blue-300 hover:shadow-xl "
            >
              Combo
            </div>
            <div
              onClick={() => scrollToID(targetRef2)}
              className="  hover:underline-offset-4 px-5 cursor-pointer hover:text-blue-300 hover:shadow-xl "
            >
              Popular
            </div>
            <div className="px-5">Popular</div>
            <div className="px-5">Popular</div>
            <div className="px-5">Popular</div>
            <div className="px-5">Popular</div>
            <div className="px-5">Popular</div>
            <div className="px-5">Popular</div>
            <div className="px-5">Popular</div>
            <div className="px-5">Popular</div>

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

        {/* scroll section ends */}

        <ResturantMenuSection />

        {/* <div ref={targetRef1} id="target1">
          <ComboDeals />
        </div>

        <div ref={targetRef2} id="target2">
          <PopularDeals />
        </div> */}
      </div>
    </div>
  );
};

export default ResturantMenuScroll;
