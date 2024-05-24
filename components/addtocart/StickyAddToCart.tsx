import React from "react";

const StickyAddToCart = () => {
  return (
    <div className="fixed bottom-0  right-0 bg-white shadow-md px-4 py-3 flex justify-between">
      <div className="max-w-sm bg-red-200 h-96">
        <div className="flex flex-col space-y-16">
          <p className="font-bold text-lg">Product Name</p>
          <p className="text-gray-500">Price: $19.99</p>
        </div>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyAddToCart;
