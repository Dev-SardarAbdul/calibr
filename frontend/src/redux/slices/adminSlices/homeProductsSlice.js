import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const homeProducts = createSlice({
  name: "homeProducts",
  initialState,
  reducers: {
    getAllHomeProducts: (state, action) => {
      state.slides = action.payload;
    },

    addHomeProduct: (state, action) => {
      state.slides = [...state.slides, action.payload];
    },
    editHomeProduct: (state, action) => {
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
    deleteHomeProduct: (state, action) => {
      const _id = action.payload;
      state.slides = state.slides.filter((slide) => slide._id !== _id);
    },
  },
});

export const {
  getAllHomeProducts,
  addHomeProduct,
  deleteHomeProduct,
  editHomeProduct,
} = homeProducts.actions;

export default homeProducts.reducer;
