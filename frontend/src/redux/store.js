import { configureStore } from "@reduxjs/toolkit";
import heroSlidesSlice from "./slices/adminSlices/heroSlidesSlice";

export const store = configureStore({
  reducer: {
    heroSlides: heroSlidesSlice,
  },
});
