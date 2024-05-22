import React from "react";

const PopularRestaurantsCard = () => {
  const cards = Array(5).fill(null); // Creates an array with 5 elements

  return (
    <section className="grid grid-cols-5 items-center gap-5 container max-w-7xl mx-auto">
      {cards.map((_, index) => (
        <div key={index} className="mx-auto my-3 max-w-sm rounded-lg shadow-md">
          <img
            src="/Images/Macdonalds.png"
            alt="MacDonald's Restaurant"
            className="w-full rounded-lg rounded-b-none"
          />
          <div className="rounded-lg rounded-t-none bg-orange-500 p-2">
            <p className="p-2 bg-orange font-bold text-white">
              MacDonald's Restaurant
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PopularRestaurantsCard;
