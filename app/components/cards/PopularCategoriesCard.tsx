import React from "react";

const PopularCategoriesCard = () => {
  const cards = Array(5).fill(null); // Creates an array with 5 elements

  return (
    <section className="grid grid-cols-5 items-center  gap-5  container max-w-7xl mx-auto">
      {cards.map((_, index) => (
        <div className="max-w-sm mt-3 rounded-lg shadow-md mx-auto">
          <img
            src="/Images/burger.png"
            alt=""
            className="w-full rounded-lg rounded-b-none"
          />
          <div className="bg-gray-100 p-2 rounded-lg rounded-t-none">
            <span className="ml-5 font-medium">Burgers and Fast Food</span>
            <p className=" text-orange-400 text-sm ml-5">21 restaurants</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default PopularCategoriesCard;
