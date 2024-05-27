import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { MapPin } from "lucide-react";

export function LocationDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center hover:bg-pink-100/40 rounded-xl px-3">
          <MapPin size={40} />
          <Button variant="secondary" className="hover:scale-105 ">
            New Location
          </Button>
          <input
            type="text"
            placeholder="Your address (e.g. Tulegatan 1)"
            className="text-Ptext  w-full rounded  p-2 bg-transparent "
            value="Swedenborgsgatan 16, 118 48 Stockholm"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="border-none ">
        <div className="flex items-center justify-center">
          <div className="w-full max-w-xl bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-start justify-between">
              <div className="text-xl font-semibold">
                What is your exact location?
              </div>
              <DialogClose asChild>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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
            <input
              type="text"
              placeholder="Your address (e.g. Tulegatan 1)"
              className="mt-4 w-full rounded border p-2"
              value="Swedenborgsgatan 16, 118 48 Stockholm"
            />
            <div className="mt-4">
              <img src="/Images/map.png" alt="Map" className="w-full rounded" />
            </div>
            <button className="mt-4 rounded bg-pink-500 px-4 py-2 text-white hover:bg-pink-600">
              DELIVER HIT
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
