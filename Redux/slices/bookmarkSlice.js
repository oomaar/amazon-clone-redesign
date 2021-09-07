import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bookmarks: []
};

export const bookmarkSlice = createSlice({
    name: "bookmark",
    initialState,
    reducers: {
        addBookmark: (state, action) => {
            state.bookmarks = [...bookmarks, action.payload];
        }
    }
});

export const { addBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;