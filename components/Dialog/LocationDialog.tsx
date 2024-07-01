"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { MapPin } from "lucide-react";
import AddressAutoComplete from "../GoogleMap";
import { FetchLocationByIP } from "@/app/api/location/locationapi";
import MapComponent from "@/components/MapComponent";

export function LocationDialog() {
  const [selectedAddress, setSelectedAddress] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true

  useEffect(() => {
    async function fetchIPLocation() {
      let address = localStorage.getItem("location");
      if (address) {
        console.log("Address is ", address);
        setSelectedAddress(address);
      } else {
        try {
          address = await FetchLocationByIP();
          localStorage.setItem("location", address); // Save to localStorage
          setSelectedAddress(address);
        } catch (error) {
          console.error("Error fetching IP location:", error);
          setSelectedAddress("Unable to fetch location"); // Handle error state appropriately
        }
      }
      setIsLoading(false); // Set loading to false after operations
    }

    fetchIPLocation();
  }, []);

  const closeDialog = () => setIsOpen(false);

  const CurrentAddress = async () => {
    try {
      const address = await FetchLocationByIP();
      localStorage.setItem("location", address); // Save to localStorage
      setSelectedAddress(address);
      setIsOpen(false);
    } catch (error) {
      console.error("Error fetching IP location:", error);
      setSelectedAddress("Unable to fetch location"); // Handle error state appropriately
      setIsOpen(false);
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <div
          className="flex items-center hover:bg-pink-100/40 rounded-xl px-3"
          onClick={() => setIsOpen(true)}
        >
          <MapPin size={40} />
          <Button variant="secondary" className="hover:scale-105">
            New Location
          </Button>
          <input
            name="address"
            id="address"
            type="text"
            placeholder={
              isLoading
                ? "Loading current Address..."
                : "Your address (e.g. Tulegatan 1)"
            }
            className="text-Ptext w-full rounded p-2 bg-transparent"
            value={selectedAddress}
            readOnly
          />
        </div>
      </DialogTrigger>
      <DialogContent className="border-none">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xl bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="text-xl font-semibold">
                What is your exact location?
              </div>
              <DialogClose asChild>
                <button
                  className="text-gray-400 hover:text-gray-600"
                  onClick={closeDialog}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </DialogClose>
            </div>
            <p className="mt-2 text-gray-600">
              Specifying your location enables more accurate search results,
              seamless order tracking, and personalized recommendations.
            </p>

            <AddressAutoComplete
              setSelectedAddress={setSelectedAddress}
              initialAddress={selectedAddress}
            />
            <div className="mt-4">
              <MapComponent /> {/* Include the MapComponent here */}
            </div>

            <div className="flex justify-between">
              <button
                className="mt-4 rounded bg-pink-500 px-4 py-2 text-white hover:bg-pink-600"
                onClick={closeDialog}
              >
                DELIVER HIT
              </button>

              <button
                className="mt-4 rounded bg-pink-500 px-4 py-2 text-white hover:bg-pink-600"
                onClick={CurrentAddress}
              >
                Current Address
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
