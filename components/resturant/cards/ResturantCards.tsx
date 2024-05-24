import React from "react";

const ResturantCards = () => {
  return (
    <div className="mx-10 w-3/4 container mx-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
      <div className="relative max-w-sm bg-red-200 flex justify-between m-4 rounded-xl items-center">
        <div className="mx-5">
          <p className="font-bold text-xl">Burger</p>
          <p className="text-orange-600">$ 200</p>
          <span className="text-sm text-slate-600">Burger description</span>
        </div>
        <div className="w-32 h-32 overflow-hidden rounded-xl">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white hover:bg-slate-100 rounded-full w-8 h-8 absolute right-4 bottom-2 flex items-center justify-center">
          <p className="text-xl text-orange-400 hover:text-orange-600">+</p>
        </div>
      </div>

      {/* new */}
      <div className="relative max-w-sm bg-red-200 flex justify-between m-4 rounded-xl items-center">
        <div className="mx-5">
          <p className="font-bold text-xl">Burger</p>
          <p className="text-orange-600">$ 200</p>
          <span className="text-sm text-slate-600">Burger description</span>
        </div>
        <div className="w-32 h-32 overflow-hidden rounded-xl">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white hover:bg-slate-100 rounded-full w-8 h-8 absolute right-4 bottom-2 flex items-center justify-center">
          <p className="text-xl text-orange-400 hover:text-orange-600">+</p>
        </div>
      </div>
      {/* new end */}
      {/* new */}
      <div className="relative max-w-sm bg-red-200 flex justify-between m-4 rounded-xl items-center">
        <div className="mx-5">
          <p className="font-bold text-xl">Burger</p>
          <p className="text-orange-600">$ 200</p>
          <span className="text-sm text-slate-600">Burger description</span>
        </div>
        <div className="w-32 h-32 overflow-hidden rounded-xl">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white hover:bg-slate-100 rounded-full w-8 h-8 absolute right-4 bottom-2 flex items-center justify-center">
          <p className="text-xl text-orange-400 hover:text-orange-600">+</p>
        </div>
      </div>
      {/* new end */}

      <div className="relative max-w-sm bg-red-200 flex justify-between m-4 rounded-xl items-center">
        <div className="mx-5">
          <p className="font-bold text-xl">Burger</p>
          <p className="text-orange-600">$ 200</p>
          <span className="text-sm text-slate-600">Burger description</span>
        </div>
        <div className="w-32 h-32 overflow-hidden rounded-xl">
          <img
            src="https://picsum.photos/200"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-white hover:bg-slate-100 rounded-full w-8 h-8 absolute right-4 bottom-2 flex items-center justify-center">
          <p className="text-xl text-orange-400 hover:text-orange-600">+</p>
        </div>
      </div>

      {/* Add more cards as needed */}
    </div>
  );
};

export default ResturantCards;
