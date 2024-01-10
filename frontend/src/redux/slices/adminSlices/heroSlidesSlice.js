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
    deleteSlide: (state) => {
      state.slides -= 1;
    },
  },
});

export const { getAllSlides, addNewSlide, deleteSlide } =
  heroSlidesSlice.actions;

export default heroSlidesSlice.reducer;
