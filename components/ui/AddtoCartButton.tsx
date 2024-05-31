import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import React from "react";

const AddtoCartButton = () => {
  return (
    <div className="relative">
      <Link href="/cart">
        <ShoppingBasket className="hover:text-Ptext" />
      </Link>
      <span className="absolute -top-4 -right-5 h-6 w-6 flex items-center justify-center rounded-full bg-Ptext font-bold text-white">
        3
      </span>
    </div>
  );
};

export default AddtoCartButton;
