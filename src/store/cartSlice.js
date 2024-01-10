import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
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

    increaseQuantity(state, action) {
      const index = state.findIndex((s) => {
        return s.id === action.payload;
      });
      state[index].quantity++;
    },

    decreaseQuantity(state, action) {
      const index = state.findIndex((s) => {
        return s.id === action.payload;
      });
      if (state[index].quantity > 0) {
        state[index].quantity--;
      }
    },

    cancelOrder(state, action) {
      const index = state.findIndex((s) => {
        return s.id === action.payload;
      });
      state.splice(index, 1);
    },
  },
});

export const { orderPicture, increaseQuantity, decreaseQuantity, cancelOrder } =
  cartSlice.actions;

export default cartSlice;
