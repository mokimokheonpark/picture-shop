import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [
    { id: 0, title: "Picture 0", quantity: 2 },
    { id: 2, title: "Picture 2", quantity: 1 },
  ],
  reducers: {
    increaseQuantity(state, action) {
      const index = state.findIndex((s) => {
        return s.id === action.payload;
      });
      state[index].quantity++;
    },
    orderPicture(state, action) {
      state.push(action.payload);
    },
  },
});

export const { increaseQuantity, orderPicture } = cartSlice.actions;

export default cartSlice;
