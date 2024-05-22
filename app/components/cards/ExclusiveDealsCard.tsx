import React from "react";

const ExclusiveDealsCard = () => {
  const cards = Array(3).fill(null);
  return (
    <section className="grid grid-cols-3 items-center gap-2 container max-w-7xl mx-auto ">
      {cards.map((_, index) => (
        <div
          key={index}
          className="relative  max-w-sm overflow-hidden rounded-2xl shadow-lg group h-[250px] "
        >
          <img
            src="https://picsum.photos/400"
            alt="image"
            className="transition-transform duration-200 group-hover:scale-110 object-cover  "
          />
          <div className="absolute right-10 top-0 flex h-14 w-16 items-center justify-center rounded-b-xl bg-black">
            <p className="text-lg text-white">-40%</p>
          </div>
          <div className="absolute inset-0 flex items-end bg-gradient-to-r from-black/60 to-transparent">
            <div className="m-5 p-4 text-white">
              <p className="text-sm text-orange-400">Restaurant</p>
              <p className="mb-2 text-lg font-bold">Chef Burger London</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExclusiveDealsCard;
