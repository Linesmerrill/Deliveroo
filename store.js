import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./features/basketSlice";

export const store = configureStore({
  reducer: {
    basket: BasketReducer,
  },
});
