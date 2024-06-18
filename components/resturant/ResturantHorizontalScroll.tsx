"use client";

import React, { useRef } from "react";
import { MoveLeft, MoveRight } from "lucide-react";
import Link from "next/link";
import { hrtime } from "process";

const Links = [
  { name: "Popular", href: "#popular" },
  { name: "Combo", href: "#combodeal" },
  { name: "Starter", href: "" },
  { name: "Beverages ", href: "" },
  { name: "Drinks", href: "" },
  { name: "Desserts", href: "" },
  { name: "Entrees", href: "" },
  { name: "Burgers", href: "" },
  { name: "Pizzas", href: "" },
];

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

  return (
    <div className="bg-white shadow-inner w-full sticky top-16 z-50 mx-auto flex items-center space-x-6 p-3">
      <div className="w-1/3 pl-5 ">
        <input
          name="search"
          id="search"
          type="text"
          placeholder="Search items here"
          className=" rounded-lg m-2 border w-full"
        />
      </div>

      <div></div>
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
        {/* categories links */}
        {Links.map((link) => (
          <Link
            href={link.href}
            // onClick={handleScrollToCombo}
            className="px-5 hover:underline-offset-4 text-md cursor-pointer hover:text-blue-300 hover:shadow-xl"
          >
            {link.name}
          </Link>
        ))}
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
