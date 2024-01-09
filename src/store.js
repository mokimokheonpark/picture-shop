import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./store/cartSlice";

export default configureStore({
  reducer: {
    cartSlice: cartSlice.reducer,
  },
});
