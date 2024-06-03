// lib/store/features/product/ProductSlice.ts
import { ResturantProductTypes } from "@/Type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  items: ResturantProductTypes[];
  value: number;
}

const initialState: ProductState = {
  items: [],
  value: 0,
};

const productSlice = createSlice({
  name: "Products",
  initialState,
  reducers: {
    addProducts: (state, action: PayloadAction<ResturantProductTypes>) => {
      state.items.push(action.payload);
    },
    removeProducts: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increment: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrement: (state, action: PayloadAction<string>) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const {
  addProducts,
  removeProducts,
  increment,
  decrement,
  incrementByAmount,
} = productSlice.actions;

export default productSlice.reducer;
