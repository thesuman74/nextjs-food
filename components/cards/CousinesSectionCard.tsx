"use client";

import { MoveLeft, MoveRight } from "lucide-react";
import React, { useRef, useEffect } from "react";

const CousinesSectionCard = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

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

  const startAutoScroll = () => {
    stopAutoScroll(); // Clear any existing intervals
    autoScrollInterval.current = setInterval(() => {
      if (scrollRef.current) {
        const { scrollWidth, clientWidth, scrollLeft } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        } else {
          scrollRef.current.scrollBy({
            left: 200,
            behavior: "smooth",
          });
        }
      }
    }, 2000); // Adjust the interval duration as needed
  };

  const stopAutoScroll = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  useEffect(() => {
    startAutoScroll();

    return () => stopAutoScroll(); // Cleanup on component unmount
  }, []);

  const cuisines = [
    { id: "1", imagesrc: "/Images/food3.png", title: "Italian" },
    { id: "2", imagesrc: "/Images/food3.png", title: "Indian" },
    { id: "3", imagesrc: "/Images/food3.png", title: "American" },
    { id: "4", imagesrc: "/Images/food3.png", title: "Chinese" },
    { id: "5", imagesrc: "/Images/food3.png", title: "Mexican" },
    { id: "6", imagesrc: "/Images/food3.png", title: "Thai" },
    { id: "7", imagesrc: "/Images/food3.png", title: "French" },
    { id: "8", imagesrc: "/Images/food3.png", title: "Japanese" },
    { id: "9", imagesrc: "/Images/food3.png", title: "Greek" },
    { id: "10", imagesrc: "/Images/food3.png", title: "Spanish" },
  ];

  return (
    <div className="mt-4 flex flex-col">
      <div className="hide-scroll-bar flex overflow-x-scroll relative">
        <button
          onClick={scrollLeft}
          className="bg-gray-100 hover:bg-gray-200 my-auto p-2 rounded-full"
        >
          <MoveLeft color="#ffcb5c" />
        </button>
        <div
          ref={scrollRef}
          className="flex flex-nowrap space-x-6 text-lg overflow-x-scroll hide-scroll-bar"
          onMouseEnter={stopAutoScroll}
          onMouseLeave={startAutoScroll}
        >
          <div className="flex flex-nowrap">
            {cuisines.map((item) => (
              <div key={item.id} className="inline-block px-2">
                <div className="m-4 w-36 overflow-hidden rounded-3xl bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
                  <img
                    src={item.imagesrc}
                    alt={item.title}
                    className="w-full"
                  />
                  <div className="text-center">
                    <p>{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={scrollRight}
          className="bg-gray-100 hover:bg-gray-200 my-auto p-2 rounded-full"
        >
          <MoveRight color="#ffcb5c" />
        </button>
      </div>
    </div>
  );
};

export default CousinesSectionCard;
