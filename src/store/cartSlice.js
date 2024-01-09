import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    increaseQuantity(state, action) {
      const index = state.findIndex((s) => {
        return s.id === action.payload;
      });
      state[index].quantity++;
    },
    orderPicture(state, action) {
      const index = state.findIndex((s) => {
        return s.id === action.payload.id;
      });
      if (index === -1) {
        state.push(action.payload);
      } else {
        state[index].quantity++;
      }
    },
  },
});

export const { increaseQuantity, orderPicture } = cartSlice.actions;

export default cartSlice;
