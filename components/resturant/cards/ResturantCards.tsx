import React from "react";

const ResturantCards = () => {
  return (
    <div className=" flex flex-wrap">
      <div className="relative m-4 flex w-96 h-36 items-center justify-between rounded-xl bg-white shadow-md hover:bg-red-200">
        <div className="mx-5">
          <p className="text-xl font-bold">Burger</p>
          <p className="text-orange-600">$ 200</p>
          <span className="text-sm text-slate-600">Burger description</span>
        </div>
        <div className="h-32 w-32 overflow-hidden rounded-xl">
          <img
            src="/Images/food1.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute bottom-2 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white  hover:bg-white shadow-md">
          <p className="text-xl text-orange-400 hover:text-orange-600">+</p>
        </div>
      </div>

      <div className="relative m-4 flex w-96 h-36 items-center justify-between rounded-xl bg-white shadow-md hover:bg-red-200">
        <div className="mx-5">
          <p className="text-xl font-bold">Burger</p>
          <p className="text-orange-600">$ 200</p>
          <span className="text-sm text-slate-600">Burger description</span>
        </div>
        <div className="h-32 w-32 overflow-hidden rounded-xl">
          <img
            src="/Images/food1.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute bottom-2 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white  hover:bg-white shadow-md">
          <p className="text-xl text-orange-400 hover:text-orange-600">+</p>
        </div>
      </div>

      <div className="relative m-4 flex w-96 h-36 items-center justify-between rounded-xl bg-white shadow-md hover:bg-red-200">
        <div className="mx-5">
          <p className="text-xl font-bold">Burger</p>
          <p className="text-orange-600">$ 200</p>
          <span className="text-sm text-slate-600">Burger description</span>
        </div>
        <div className="h-32 w-32 overflow-hidden rounded-xl">
          <img
            src="/Images/food1.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute bottom-2 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white  hover:bg-white shadow-md">
          <p className="text-xl text-orange-400 hover:text-orange-600">+</p>
        </div>
      </div>

      <div className="relative m-4 flex w-96 h-36 items-center justify-between rounded-xl bg-white shadow-md hover:bg-red-200">
        <div className="mx-5">
          <p className="text-xl font-bold">Burger</p>
          <p className="text-orange-600">$ 200</p>
          <span className="text-sm text-slate-600">Burger description</span>
        </div>
        <div className="h-32 w-32 overflow-hidden rounded-xl">
          <img
            src="/Images/food1.png"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute bottom-2 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white  hover:bg-white shadow-md">
          <p className="text-xl text-orange-400 hover:text-orange-600">+</p>
        </div>
      </div>
    </div>
  );
};

export default ResturantCards;
