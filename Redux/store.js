import { configureStore } from '@reduxjs/toolkit';
import darkSliceReducer from "./slices/darkSlice";

export const store = configureStore({
    reducer: {
        dark: darkSliceReducer
    },
});