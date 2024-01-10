import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slides: [],
};

export const heroSlidesSlice = createSlice({
  name: "heroSlides",
  initialState,
  reducers: {
    getAllSlides: (state, action) => {
      state.slides = action.payload;
    },
    addNewSlide: (state, action) => {
      state.slides = [...state.slides, action.payload];
    },
    deleteSlideSlice: (state, action) => {
      const _id = action.payload;
      state.slides = state.slides.filter((slide) => slide._id !== _id);
    },
  },
});

export const { getAllSlides, addNewSlide, deleteSlideSlice } =
  heroSlidesSlice.actions;

export default heroSlidesSlice.reducer;
