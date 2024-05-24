import React from "react";

const FilterSection = () => {
  return (
    <div>
      <div className="h-screen max-w-[300px] fixed top-30 space-y-5 rounded-lg border overflow-y-auto border-gray-300 bg-slate-100 p-5">
        <h2 className="text-center text-xl">Filter</h2>

        <div className="mx-3 space-y-5">
          <div>
            <span className="mb-2 block font-semibold">Sort By</span>
            <div className="mx-5 my-3 flex flex-col">
              <label className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="sort"
                  id="relevance"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Relevance</span>
              </label>

              <label className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="sort"
                  id="fastest-delivery"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Fastest Delivery</span>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="sort"
                  id="distance"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Distance</span>
              </label>
            </div>
          </div>

          <div>
            <span className="mb-2 block font-semibold">Quick Links</span>
            <div className="mx-5 flex flex-col">
              <label className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="offers"
                  id="offer-relevance"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Relevance</span>
              </label>

              <label className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="offers"
                  id="offer-fastest-delivery"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Fastest Delivery</span>
              </label>

              <label className="flex items-center">
                <input
                  type="radio"
                  name="offers"
                  id="offer-distance"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Distance</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mx-3 space-y-5">
          <div>
            <span className="mb-2 block font-semibold">Offers</span>
            <div className="mx-5 my-3 flex flex-col">
              <label className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="sort"
                  id="relevance"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Free Delivery</span>
              </label>

              <label className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="sort"
                  id="fastest-delivery"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Accepts Vouchers</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mx-3 space-y-5">
          <div>
            <span className="mb-2 block font-semibold">Cousines</span>
            <div className="mx-5 my-3 flex flex-col">
              <label className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="sort"
                  id="relevance"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Free Delivery</span>
              </label>

              <label className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="sort"
                  id="fastest-delivery"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Accepts Vouchers</span>
              </label>

              <label className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="cuisine"
                  id="italian"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Italian</span>
              </label>

              <label className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="cuisine"
                  id="chinese"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Chinese</span>
              </label>

              <label className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="cuisine"
                  id="mexican"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Mexican</span>
              </label>

              <label className="mb-2 flex items-center">
                <input
                  type="radio"
                  name="cuisine"
                  id="indian"
                  className="peer border-yellow-500"
                />
                <span className="ml-3">Indian</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
