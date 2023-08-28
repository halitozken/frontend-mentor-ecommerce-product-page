import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/features/cart/cartSlice";
import carouselReducer from "../redux/features/carousel/carouselSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    carousel: carouselReducer,
  },
});
