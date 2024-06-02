import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "@/lib/store/features/cart/CartSlice";
import productReducer from "@/lib/store/features/cart/ProductSlice"; // Import product reducer

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      products: productReducer, // Add product reducer here
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
