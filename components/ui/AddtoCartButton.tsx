"use client";

import { useAppSelector } from "@/lib/store/hooks";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React from "react";

const AddtoCartButton = () => {
  const items = useAppSelector((state) => state.cart.items);
  console.log("This is add to cart data ", items);

  return (
    <div className="relative">
      <Link href="/cart">
        {" "}
        {/* Change the link to /cart page */}
        <ShoppingBasket className="hover:text-Ptext" />
      </Link>
      <span className="absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-Ptext font-bold text-white">
        {items.length}
      </span>
    </div>
  );
};

export default AddtoCartButton;
