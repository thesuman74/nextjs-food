import React from "react";

const DiscountSectionCard = () => {
  return (
    <div className="grid grid-cols-3 ">
      <div className="max-w-sm min-w-sm overflow-hidden bg-red-200 rounded-xl m-4">
        <img
          src="https://picsum.photos/500"
          alt=""
          className="w-full h-48 object-cover"
        />
      </div>

      <div className="max-w-sm overflow-hidden bg-red-200 rounded-xl m-4">
        <img
          src="https://picsum.photos/500"
          alt=""
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="max-w-sm overflow-hidden bg-red-200 rounded-xl m-4">
        <img
          src="https://picsum.photos/500"
          alt=""
          className="w-full h-48 object-cover"
        />
      </div>
    </div>
  );
};

export default DiscountSectionCard;
