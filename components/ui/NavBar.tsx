import React from "react";
import { LocationDialog } from "../Dialog/LocationDialog";
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-yellow-50">
      <div className="container mx-auto px-2 md:px-12 lg:px-7">
        <div className="flex items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          {/* item 1 */}
          <div className="flex items-center space-x-4">
            <Link
              href="/"
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
                More <span className="text-yellow-700">Food</span>
              </span>
            </Link>

            <button
              aria-label="hamburger"
              id="hamburger"
              className="relative w-10 h-10 -mr-2 lg:hidden"
            >
              <div
                aria-hidden="true"
                id="line"
                className="inset-0 w-6 h-0.5 m-auto rounded bg-yellow-900 transition duration-300"
              ></div>
              <div
                aria-hidden="true"
                id="line2"
                className="inset-0 w-6 h-0.5 mt-2 m-auto rounded bg-yellow-900 transition duration-300"
              ></div>
            </button>
          </div>

          {/* item 2 */}
          <div className="flex-grow flex justify-center">
            <LocationDialog />
          </div>

          {/* item 3 */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="text-gray-600 lg:pr-4">
              <ul className="flex space-x-4 tracking-wide font-medium text-sm">
                <li>
                  <a
                    href="/resturants"
                    className="transition hover:text-yellow-700"
                  >
                    Resturants
                  </a>
                </li>
                <li>
                  <a
                    href="/wishlist"
                    className="transition hover:text-yellow-700"
                  >
                    Wishlist
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-yellow-700">
                    Cart
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex space-x-2 border-yellow-200 lg:border-l">
              <button
                type="button"
                title="Start buying"
                className="py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100"
              >
                <span className="text-yellow-800 font-semibold text-sm">
                  Sign up
                </span>
              </button>
              <button
                type="button"
                title="Start buying"
                className="py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300"
              >
                <span className="text-yellow-900 font-semibold text-sm">
                  Login
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
