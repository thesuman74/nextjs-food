import { ResturantTypes } from "@/Type";
import React from "react";

const ResturandIdDetail = ({ details }: { details: ResturantTypes }) => {
  return (
    <>
      <div>
        <div className="mx-auto pb-5 mt-6 max-w-6xl border-b-2 sm:px-6 lg:px-8">
          <div className="mx-4 grid gap-4 md:grid-cols-2">
            {/* <!-- Left section: Logo and Text --> */}
            <div className="flex flex-col items-start space-y-4">
              <div className="h-16 w-16 rounded-full bg-gray-100">
                <img
                  src="/Images/hotel.png"
                  alt="Logo"
                  className="h-16 w-16 rounded-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold leading-tight tracking-tight text-gray-800 md:text-3xl">
                  {details.resturant_name}
                </h2>
                <p className="text-sm text-gray-500">
                  From{" "}
                  <a href="#" className="text-indigo-600 hover:underline">
                    Location
                  </a>
                </p>
                <div className="my-4 flex items-center ">
                  <div className="flex  space-x-5">
                    <p className="text-xs font-semibold text-green-500">
                      Free Delivery
                    </p>
                    <p className="text-xs font-semibold text-green-500">
                      120 kr Minimum
                    </p>
                    <p className="text-xs font-semibold text-green-500">
                      9 kr service
                    </p>
                  </div>
                </div>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  suscipit, sapien eget pharetra placerat.
                </p>
              </div>
            </div>

            {/* <!-- Right section: Image and Add to Favorite button --> */}
            <div className="flex flex-col items-center space-y-4 ">
              <div className="h-60 w-full rounded-lg bg-gray-100">
                <img
                  src={details.imageLink}
                  alt="Product Image"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
              <button
                type="button"
                className="bg-transparent   hover:bg-yellow-500 text-black font-semibold hover:text-white py-2 px-4 border border-yellow-500 hover:border-transparent rounded"
              >
                Add to Favourites
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* // deals and offer discounts */}

      <div className="container mx-11 grid grid-cols-4 gap-4 mb-5 ">
        <div className="max-w-xs mt-3  bg-white shadow-md rounded-md overflow-hidden">
          <div className="bg-yellow-50 opac text-center py-4">
            <h3 className="text-2xl font-bold text-gray-800">50% OFF</h3>
            <p className="text-gray-600">Limited Time Offer</p>
          </div>
        </div>

        <div className="max-w-xs mt-3  bg-white shadow-md rounded-md overflow-hidden">
          <div className="bg-yellow-50 opac text-center py-4">
            <h3 className="text-2xl font-bold text-gray-800">40% OFF</h3>
            <p className="text-gray-600">Limited Time Offer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResturandIdDetail;
