// components/AnimatedCounter.js
"use client";

import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

const AnimatedCounterSection = () => {
  const data = [
    { number: 546, label: "Registered Riders" },
    { number: 1200, label: "Active Deliveries" },
    { number: 780, label: "Happy Customers" },
    { number: 150, label: "Cities Covered" },
  ];

  return (
    <div className="m-5 mx-auto grid h-36 w-full grid-cols-4  bg-orange-500 space-x-4">
      {data.map((item, index) => (
        <AnimatedCounter
          key={index}
          targetNumber={item.number}
          label={item.label}
        />
      ))}
    </div>
  );
};

const AnimatedCounter = ({
  targetNumber,
  label,
}: {
  targetNumber: number;
  label: string;
}) => {
  const [countStart, setCountStart] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountStart(true);
          observer.disconnect(); // Stop observing once the animation starts
        }
      },
      { threshold: 0.5 } // Start animation when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={counterRef}
      className="text-center text-white h-full max-w-xs content-center divide-x-2"
    >
      {countStart && (
        <CountUp start={0} end={targetNumber} duration={2.75}>
          {({ countUpRef }) => (
            <span
              ref={countUpRef}
              className="block text-3xl  md:text-5xl font-bold text-white"
            >
              {/* The animated number will appear here */}
            </span>
          )}
        </CountUp>
      )}
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default AnimatedCounterSection;
