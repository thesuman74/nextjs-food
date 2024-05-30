import Link from "next/link";
import React from "react";

const BottomNavbar = () => {
  return (
    <>
      {/* // bottom nav bar  */}
      <nav className="fixed bottom-0 mx-auto  w-full z-50 ">
        <div className="  rounded-2xl bg-yellow-50 px-7 shadow-lg">
          <div className="flex">
            <div className="group flex-1">
              <Link
                href="/"
                className="mx-auto flex w-full items-center justify-center px-4 pt-2 text-center text-Ptext group-hover:text-indigo-500"
              >
                <span className="block px-1 pb-1 pt-1 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <span className="block pb-2 text-xs">Home</span>
                  <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-indigo-500"></span>
                </span>
              </Link>
            </div>

            <div className="group flex-1">
              <Link
                href="/resturants"
                className="mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-Ptext group-hover:text-indigo-500"
              >
                <span className="block px-1 pb-1 pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                    />
                  </svg>

                  <span className="block pb-2 text-xs">Resturants</span>
                  <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-indigo-500"></span>
                </span>
              </Link>
            </div>

            <div className="group flex-1">
              <Link
                href="/wishlist"
                className="mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-Ptext group-hover:text-indigo-500"
              >
                <span className="block px-1 pb-1 pt-1 justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                    />
                  </svg>

                  <span className="block pb-2 text-xs">Menus</span>
                  <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-indigo-500"></span>
                </span>
              </Link>
            </div>

            <div className="group flex-1">
              <Link
                href="/cart"
                className="mx-auto flex w-full items-end justify-center px-4 pt-2 text-center text-Ptext group-hover:text-indigo-500"
              >
                <span className="block px-1 pb-1 pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>

                  <span className="block pb-2 text-xs">Cart</span>
                  <span className="mx-auto block h-1 w-5 rounded-full group-hover:bg-indigo-500"></span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default BottomNavbar;
