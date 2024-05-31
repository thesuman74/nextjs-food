import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "@/lib/store/features/cart/CartSlice";
//store is a global variable which is bad for next js as it will be rerendered per request.
//so to solve that we wrap it inside another function

export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;

export type AppDispatch = AppStore["dispatch"];
