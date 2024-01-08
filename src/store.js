import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [
    { title: "Picture 0", quantity: 2, totalPrice: 200 },
    { title: "Picture 2", quantity: 1, totalPrice: 299 },
  ],
});

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
