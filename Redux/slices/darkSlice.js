import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dark: ""
};

export const darkSlice = createSlice({
    name: 'dark',
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.dark = action.payload
        }
    }
});

export const { setDarkMode } = darkSlice.actions;

export default darkSlice.reducer;