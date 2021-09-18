import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookmarks: [],
    bookmarkState: false
};

export const bookmarkSlice = createSlice({
    name: "bookmark",
    initialState,
    reducers: {}
});

export default bookmarkSlice.reducer;