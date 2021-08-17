import { configureStore } from '@reduxjs/toolkit';
import darkSliceReducer from "./slices/darkSlice";
import cartReducer from "./slices/cartSlice";

export const store = configureStore({
    reducer: {
        dark: darkSliceReducer,
        cart: cartReducer,
    },
});