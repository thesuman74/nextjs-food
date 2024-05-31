"use client";

import { useAppSelector } from "@/lib/store/hooks";
import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React from "react";

const AddtoCartButton = () => {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <div className="relative">
      <Link href="/cart">
        <ShoppingBasket className="hover:text-Ptext" />
      </Link>
      <span className="absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-Ptext font-bold text-white">
        {items.length}
      </span>
    </div>
  );
};

export default AddtoCartButton;
