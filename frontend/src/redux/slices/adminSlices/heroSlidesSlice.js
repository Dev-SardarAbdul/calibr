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
    editSlideSlice: (state, action) => {
      const { _id, topText, name, price, image } = action.payload;

      const slideIndex = state.slides.findIndex((slide) => slide._id === _id);

      if (slideIndex !== -1) {
        state.slides[slideIndex] = {
          ...state.slides[slideIndex],
          topText: topText || state.slides[slideIndex].topText,
          name: name || state.slides[slideIndex].name,
          price: price || state.slides[slideIndex].price,
          image: image || state.slides[slideIndex].image,
        };
      }
    },
    deleteSlideSlice: (state, action) => {
      const _id = action.payload;
      state.slides = state.slides.filter((slide) => slide._id !== _id);
    },
  },
});

export const { getAllSlides, addNewSlide, deleteSlideSlice, editSlideSlice } =
  heroSlidesSlice.actions;

export default heroSlidesSlice.reducer;
