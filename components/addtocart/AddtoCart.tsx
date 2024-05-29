import React from "react";

const AddtoCart = async () => {
  const data = Array(3).fill(null);
  return (
    <div>
      <div className="h-screen bg-gray-100 pt-10">
        <h1 className="mb-10 text-center text-5xl font-bold">Cart Items</h1>

        <div className="w-2/3">
          <div className="mx-auto max-w-7xl px-6 xl:px-0">
            {/* Container for cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Map through data to render cards */}
              {data.map((_, index) => (
                <div key={index} className="rounded-lg bg-white shadow-md">
                  <div className="p-6">
                    <img
                      src="/Images/food1.png"
                      alt="product-image"
                      className="w-full rounded-lg"
                    />
                    <div className="mt-4">
                      <h2 className="text-lg font-bold text-gray-900">
                        Nike Air Max 2019
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">259.000 ₭</p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer text-red-500 hover:text-red-700"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span className="cursor-pointer bg-gray-200 rounded-md px-3 py-1">
                            {" "}
                            -{" "}
                          </span>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value="2"
                            min="1"
                          />
                          <span className="cursor-pointer bg-gray-200 rounded-md px-3 py-1">
                            {" "}
                            +{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* card 1 sent */}
        <div className="w-1/3">
          {/* Additional content for card 2 */}
          <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">$129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Shipping</p>
              <p className="text-gray-700">$4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
              Check out
            </button>
          </div>
        </div>
        {/* card 2 ends  */}
      </div>
    </div>
  );
};

export default AddtoCart;
