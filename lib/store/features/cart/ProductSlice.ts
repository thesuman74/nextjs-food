// lib/store/features/product/ProductSlice.ts
import { ResturantProductTypes } from "@/Type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  items: ResturantProductTypes[];
}

const initialState: ProductState = {
  items: [],
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
  },
});

export const { addProducts, removeProducts } = productSlice.actions;
export default productSlice.reducer;
