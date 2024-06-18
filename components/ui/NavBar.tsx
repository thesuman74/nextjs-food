import React from "react";
import { LocationDialog } from "../Dialog/LocationDialog";
import Link from "next/link";
import AddtoCartButton from "./AddtoCartButton";
import { auth } from "@/auth";
import Logout from "../Logout";

const links = [
  { name: "Home", href: "/" },
  { name: "Resturants", href: "/resturants" },
  { name: "Menus", href: "/menus" },
  { name: "wishlist", href: "/wishlist" },
  { name: <AddtoCartButton />, href: "/cart" },
];

const NavBar = async () => {
  const session = await auth();

  return (
    <>
      <nav className="w-full  z-50 bg-yellow-50  ">
        <div className="container mx-auto px-2 md:px-12 lg:px-7">
          <div className="flex items-center justify-between  gap-6 md:py-4 md:gap-0">
            {/* item 1 logo and title */}
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
            </div>

            {/* item 2 : Location */}
            <div className="flex-grow flex justify-center">
              <LocationDialog />
            </div>

            {/* item 3 : navlinks */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="text-gray-600 lg:pr-4">
                <ul className="flex space-x-4 tracking-wide font-medium text-sm">
                  {links.map((link) => (
                    <li>
                      <Link
                        href={link.href}
                        className="transition hover:text-yellow-700"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex space-x-2 border-yellow-200 lg:border-l">
                <button
                  type="button"
                  title="Start buying"
                  className="py-3 px-6 text-center rounded-full transition active:bg-yellow-200 focus:bg-yellow-100"
                >
                  <div>
                    {session?.user ? (
                      // Render this if there is a user in the session
                      <span className="text-yellow-800 font-semibold text-sm hidden">
                        logged in
                      </span>
                    ) : (
                      // Render this if there is no user in the session
                      <span className="text-yellow-800 font-semibold text-sm ">
                        Sign up
                      </span>
                    )}
                  </div>
                </button>

                <div className="py-3 px-6 text-center rounded-full transition bg-yellow-300 hover:bg-yellow-100 active:bg-yellow-400 focus:bg-yellow-300">
                  {session?.user ? (
                    // Render this if there is a user in the session
                    <div>
                      <Logout />
                    </div>
                  ) : (
                    // Render this if there is no user in the session
                    <Link href={"/login"}>
                      <span className="text-yellow-900 font-semibold text-sm">
                        Login
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
