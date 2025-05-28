// src/avSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
      name: "Projector",
      cost: 300,
      quantity: 0,
    },
    {
      name: "Sound System",
      cost: 500,
      quantity: 0,
    },
    {
      name: "Video Recording",
      cost: 800,
      quantity: 0,
    },
  ],
  reducers: {
    incrementAvQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index]) {
        state[index].quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const { payload: index } = action;
      if (state[index] && state[index].quantity > 0) {
        state[index].quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
