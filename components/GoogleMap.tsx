"use client";

import React, { useEffect, useState } from "react";
import { FetchLocation } from "@/app/api/location/locationapi";

interface AddressAutoCompleteProps {
  setSelectedAddress: (address: string) => void;
  initialAddress?: string;
}

interface Suggestion {
  address: string;
  lat: number;
  lon: number;
}

const AddressAutoComplete: React.FC<AddressAutoCompleteProps> = ({
  setSelectedAddress,
  initialAddress = "",
}) => {
  const [inputValue, setInputValue] = useState<string>(initialAddress);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

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
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion: Suggestion) => {
    setInputValue(suggestion.address);
    setSelectedAddress(suggestion.address);
    localStorage.setItem("location", suggestion.address);
    localStorage.setItem("latitude", suggestion.lat.toString());
    localStorage.setItem("longitude", suggestion.lon.toString());
    setSuggestions([]);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search for a city..."
        value={inputValue}
        onChange={handleChange}
        className="mt-4 w-full rounded border p-2 "
      />
      <ul>
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            onClick={() => handleSuggestionClick(suggestion)}
            className="hover:bg-gray-400 cursor-pointer mt-4 w-full "
          >
            {suggestion.address}
          </li>
        ))}
      </ul>
    </>
  );
};

export default AddressAutoComplete;
