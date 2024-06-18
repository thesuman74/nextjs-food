import axios from "axios";

export const fetchPopularResturants = async () => {
  try {
    // Create a delay before initiating the fetch request
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await axios.get("http://localhost:8000/deals", {});
    return response.data;
  } catch (error) {
    console.error("Error fetching Popular Resturants:", error);
  }
};

export const fetchPopularCategories = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/deals`);

    return response.data;
  } catch (error) {
    console.error("Error fetching Popular Categories", error);
  }
};

export const fetchExclusiveDeals = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/resturants`, {});
    return response.data;
  } catch (error) {
    console.error("Error fetching Exclusive Deals", error);
  }
};

export const fetchResturantProducts = async () => {
  try {
    // //  Create a delay before initiating the fetch request
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    const response = await axios.get(`http://localhost:8000/resturantProducts`);
    return response.data;
  } catch (error) {
    console.error("Error in fetching Resturant Products", error);
  }
};
