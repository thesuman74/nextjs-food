"use cl";

import React, { useState } from "react";
import { FetchLocation } from "@/app/api/location/locationapi";

const AddressAutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  // Async function to fetch locations based on input
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);

    if (!newValue.trim()) {
      setSuggestions([]); // Clear suggestions if input is empty
      return;
    }

    try {
      const fetchedSuggestions = await FetchLocation(newValue);
      setSuggestions(fetchedSuggestions);
    } catch (error) {
      console.error("Error while fetching location:", error);
      setSuggestions([]); // Clear suggestions on error
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search for a city..."
        value={inputValue}
        onChange={handleChange}
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </>
  );
};

export default AddressAutoComplete;
