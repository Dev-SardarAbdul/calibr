import { configureStore } from "@reduxjs/toolkit";
import heroSlidesSlice from "./slices/adminSlices/heroSlidesSlice";
import homeProductsSlice from "./slices/adminSlices/homeProductsSlice";

export const store = configureStore({
  reducer: {
    heroSlides: heroSlidesSlice,
    homeProducts: homeProductsSlice,
  },
});
