import { Award, Home } from "lucide-react";
import React from "react";
import FilterContents from "./FilterContents";

const FilterSection = () => {
  return (
    <div className="hidden md:block">
      <FilterContents />
    </div>
  );
};

export default FilterSection;
