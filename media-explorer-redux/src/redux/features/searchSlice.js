import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
        tab : "photos"
    },
    reducers: {
        setSearchQuery: (state, action) => {
            state.query = action.payload;
            console.log("Search query updated:", state.query);
        },
        setTab : (state, action) => {
            state.tab = action.payload;
        }
    }
});

export const { setSearchQuery, setTab } = searchSlice.actions;
export default searchSlice.reducer;