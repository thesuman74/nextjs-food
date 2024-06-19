import { Key } from "lucide-react";

const apiKey = process.env.NEXT_PUBLIC_GEO_API_KEY;

export async function FetchLocation(inputValue: string): Promise<string[]> {
  try {
    const response = await fetch(
      `https://api.geoapify.com/v1/geocode/autocomplete?text=${inputValue}&format=json&apiKey=${apiKey}`
    );
    const data = await response.json();
    console.log("location data", data);
    return data.results.map((item: any) => item.formatted); // Return formatted addresses
  } catch (error) {
    console.error("Error while fetching location", error);
    return []; // Return an empty array on error
  }
}
