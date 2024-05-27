import { Award, Home } from "lucide-react";
import React from "react";

const FilterSection = () => {
  return (
    <div>
      <div className="h-screen max-w-[300px] fixed top-30 space-y-5 rounded-lg border overflow-y-auto border-gray-100 bg-slate-100 p-5">
        <h2 className="text-center text-xl">Filter</h2>

        {/* Sort by section */}
        <div className="mx-3 space-y-5">
          <div>
            <span className="mb-2 block font-semibold">Sort By</span>
            <div className="mx-5 my-3 flex flex-col">
              <label className="custom-radio-container">
                Relevance
                <input
                  type="radio"
                  name="sort"
                  id="relevance"
                  className="peer border-yellow-600"
                />
                <span className="custom-checkmark"></span>
              </label>

              <label className="custom-radio-container">
                Fastest Delivery
                <input
                  type="radio"
                  name="sort"
                  id="fastest-delivery"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>

              <label className="custom-radio-container">
                Distance
                <input
                  type="radio"
                  name="sort"
                  id="distance"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <span className="mb-2 block font-semibold">Quick Filters</span>
            <div className="mx-5 flex flex-col">
              <label className="custom-radio-container">
                Top Resturant
                <input
                  type="radio"
                  name="offers"
                  id="offer-relevance"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>

              <label className="custom-radio-container">
                Ratings 4+
                <input
                  type="radio"
                  name="offers"
                  id="offer-fastest-delivery"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>

              <div className="flex space-x-2 my-3  border-pink-600 hover:bg-red-200 hover:rounded-lg">
                <Award color="#dd2c6a" /> <p>Top Resturant</p>
              </div>

              <div className="flex space-x-2 my-3 ">
                <Home color="#dd2c6a" /> <p>Home Delivery</p>
              </div>
            </div>
          </div>

          {/* Offers */}
          <div>
            <span className="mb-2 block font-semibold">Offers</span>
            <div className="mx-5 flex flex-col">
              <label className="custom-radio-container">
                Free Delivery
                <input
                  type="radio"
                  name="offers"
                  id="free-delivery"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>

              <label className="custom-radio-container">
                Accepts Voucher
                <input
                  type="radio"
                  name="offers"
                  id="accepts-voucher"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>
            </div>
          </div>

          {/* Cuisines */}
          <div>
            <span className="mb-2 block font-semibold">Cuisines</span>
            <div className="mx-5 flex flex-col">
              <label className="custom-radio-container">
                American
                <input
                  type="radio"
                  name="cuisines"
                  id="american"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>

              <label className="custom-radio-container">
                Indian
                <input
                  type="radio"
                  name="cuisines"
                  id="indian-cuisines"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>

              <label className="custom-radio-container">
                Chinease
                <input
                  type="radio"
                  name="cuisines"
                  id="indian-cuisines"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>

              <label className="custom-radio-container">
                Italian
                <input
                  type="radio"
                  name="cuisines"
                  id="indian-cuisines"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>

              <label className="custom-radio-container">
                Thai
                <input
                  type="radio"
                  name="cuisines"
                  id="indian-cuisines"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>

              <label className="custom-radio-container">
                French
                <input
                  type="radio"
                  name="cuisines"
                  id="indian-cuisines"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>

              <label className="custom-radio-container">
                Japnease
                <input
                  type="radio"
                  name="cuisines"
                  id="indian-cuisines"
                  className="peer border-yellow-500"
                />
                <span className="custom-checkmark"></span>
              </label>

              {/* Add more cuisine options here */}
            </div>
          </div>
        </div>

        {/* Space at the bottom */}
        <div className="pb-14"></div>
      </div>
    </div>
  );
};

export default FilterSection;
