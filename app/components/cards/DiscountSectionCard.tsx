import React from "react";

const DiscountSectionCard = () => {
  return (
    <div className=" mt-4 flex flex-col   ">
      <div className="hide-scroll-bar flex overflow-x-scroll ">
        <div className=" flex flex-nowrap ">
          <div className="inline-block px-3">
            <div className="h-52 w-96 max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <img src="/Images/food2.png" alt="" className="w-full" />
            </div>
          </div>

          <div className="inline-block px-3">
            <div className="h-52 w-96 max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <img src="/Images/food2.png" alt="" className="w-full" />
            </div>
          </div>

          <div className="inline-block px-3">
            <div className="h-52 w-96 max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <img src="/Images/food2.png" alt="" className="w-full" />
            </div>
          </div>
          <div className="inline-block px-3">
            <div className="h-52 w-96 max-w-sm overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl">
              <img src="/Images/food2.png" alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountSectionCard;
