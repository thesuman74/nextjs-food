"use client";

import React, { useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";

const ResturantMenuScroll = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // const navbarHeight = 140; // Adjust based on your navbar height

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
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

  // const handleScrollToCombo = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();
  //   const comboSection = document.getElementById("combodeal");
  //   if (comboSection) {
  //     const topPos =
  //       comboSection.getBoundingClientRect().top +
  //       window.scrollY -
  //       navbarHeight;
  //     window.scrollTo({
  //       top: topPos,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="bg-white shadow-inner w-full sticky top-16 z-50 mx-auto flex items-center space-x-6 p-3">
      <div>
        <input
          type="text"
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
        <Link
          href="#combodeal"
          // onClick={handleScrollToCombo}
          className="px-5 hover:underline-offset-4 cursor-pointer hover:text-blue-300 hover:shadow-xl"
        >
          Combo
        </Link>

        <Link href="#popular" className="hover:underline-offset-4 px-5 cursor-pointer hover:text-blue-300 hover:shadow-xl">
          Popular
        </Link>
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
  );
};

export default ResturantMenuScroll;
