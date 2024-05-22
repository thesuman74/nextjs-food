import React from "react";

const HeroBanner = () => {
  return (
    <div>
      <div className="relative w-full">
        <nav className="fixed z-10 w-full bg-white md:absolute md:bg-transparent">
          <div className="container m-auto px-2 md:px-12 lg:px-7">
            <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
              <div className="w-full px-6 flex justify-between lg:w-max md:px-0">
                <a
                  href="https://tailus.io/blocks/hero-section"
                  aria-label="logo"
                  className="flex space-x-2 items-center"
                >
                  <img
                    src="https://tailus.io/sources/blocks/food-delivery/preview/images/icon.png"
                    className="w-12"
                    alt="tailus logo"
                    width="144"
                    height="133"
                  />
                  <span className="text-2xl font-bold text-yellow-900">
                    Tailus <span className="text-yellow-700">Feedus</span>
                  </span>
                </a>

                <button
                  aria-label="humburger"
                  id="hamburger"
                  className="relative w-10 h-10 -mr-2 lg:hidden"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transtion duration-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transtion duration-300"
                  ></div>
                </button>
              </div>

              <div className="hidden w-full lg:flex flex-wrap justify-end items-center space-y-6 p-6 rounded-xl bg-white md:space-y-0 md:p-0 md:flex-nowrap md:bg-transparent lg:w-7/12">
                <div className="text-gray-600 lg:pr-4">
                  <ul className="space-y-6 tracking-wide font-medium text-sm md:flex md:space-y-0">
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>I've a restaurant</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>Wishlist</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block md:px-4 transition hover:text-yellow-700"
                      >
                        <span>Cart</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="w-full space-y-2 border-yellow-200 lg:space-y-0 md:w-max lg:border-l">
                  <button
                    type="button"
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100 sm:w-max"
                  >
                    <span className="block text-yellow-800 font-semibold text-sm">
                      Sign up
                    </span>
                  </button>
                  <button
                    type="button"
                    title="Start buying"
                    className="w-full py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300 sm:w-max"
                  >
                    <span className="block text-yellow-900 font-semibold text-sm">
                      Login
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="relative bg-yellow-50">
          <div className="container m-auto px-6 pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
            <div className="flex items-center flex-wrap px-2 md:px-0">
              <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                <h1 className="font-bold text-4xl text-yellow-900 md:text-5xl lg:w-10/12">
                  Your favorite dishes, right at your door
                </h1>
                <form action="" className="w-full mt-12">
                  <div className="relative flex p-1 rounded-full bg-white border border-yellow-200 shadow-md md:p-2">
                    <select
                      className="hidden p-3 rounded-full bg-transparent md:block md:p-4"
                      name="domain"
                      id="domain"
                    >
                      <option value="design">FastFood</option>
                      <option value="development">Restaurant</option>
                      <option value="marketing">Marketing</option>
                    </select>
                    <input
                      placeholder="Your favorite food"
                      className="w-full p-4 rounded-full"
                      type="text"
                    />
                    <button
                      type="button"
                      title="Start buying"
                      className="ml-auto py-3 px-6 rounded-full text-center transition bg-gradient-to-b from-yellow-200 to-yellow-300 hover:to-red-300 active:from-yellow-400 focus:from-red-400 md:px-12"
                    >
                      <span className="hidden text-yellow-900 font-semibold md:block">
                        Search
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 mx-auto text-yellow-900 md:hidden"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button>
                  </div>
                </form>
                <p className="mt-8 text-gray-700 lg:w-10/12">
                  Sit amet consectetur adipisicing elit.{" "}
                  <a href="#" className="text-yellow-700">
                    connection
                  </a>{" "}
                  tenetur nihil quaerat suscipit, sunt dignissimos.
                </p>
              </div>
              <div className="ml-auto -mt-24 lg:-mb-56 lg:w-6/12">
                <img
                  src="https://tailus.io/sources/blocks/food-delivery/preview/images/food.webp"
                  className="relative "
                  alt="food illustration"
                  loading="lazy"
                  width="2000"
                  height="800"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
