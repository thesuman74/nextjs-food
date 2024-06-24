import axios from "axios";

const apiKey = process.env.NEXT_PUBLIC_GEO_API_KEY;

export async function FetchLocation(
  inputValue: string
): Promise<{ address: string; lat: number; lon: number }[]> {
  try {
    const response = await axios.get(
      `https://api.geoapify.com/v1/geocode/autocomplete`,
      {
        params: {
          text: inputValue,
          format: "json",
          apiKey: apiKey,
        },
      }
    );
    const data = response.data;
    console.log("location data", data);
    return data.results.map((item: any) => ({
      address: item.formatted,
      lat: item.lat,
      lon: item.lon,
    })); // Return formatted addresses
  } catch (error) {
    console.error("Error while fetching location", error);
    return []; // Return an empty array on error
  }
}

// IP-based location

export async function FetchLocationByIP(): Promise<string> {
  try {
    // Add your axios request logic here
    const response = await axios.get(`https://api.geoapify.com/v1/ipinfo`, {
      params: {
        apiKey: apiKey,
      },
    });
    const data = response.data;
    console.log("IP location data", data.city.name);
    return data.city.name; // Return formatted addresses
  } catch (error) {
    console.error("Error while fetching location By IP", error);
    return "null"; // Return an empty array on error
  }
}
