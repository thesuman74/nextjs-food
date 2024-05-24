import CousinesSectionCard from "@/app/components/cards/CousinesSectionCard";
import DiscountSectionCard from "@/app/components/cards/DiscountSectionCard";
import React from "react";

const CousinesSection = () => {
  return (
    <div className="w-full mx-auto">
      <h1 className="ml-20 text-3xl font-bold  mx-auto my-5 ">Cousines</h1>

      <CousinesSectionCard />
    </div>
  );
};

export default CousinesSection;
