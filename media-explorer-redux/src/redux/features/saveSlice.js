import { createSlice } from "@reduxjs/toolkit";

const saveSlice = createSlice({
    name: "save",
    initialState: {
        items: localStorage.getItem("savedItems") ? JSON.parse(localStorage.getItem("savedItems")) : [],
    },
    reducers: {
        addItem: (state, action) => {
            const alreadySaved = state.items.find(item => item.id === action.payload.id);
            if(!alreadySaved) {
                state.items.push(action.payload);
                localStorage.setItem("savedItems", JSON.stringify(state.items));
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            localStorage.setItem("savedItems", JSON.stringify(state.items));
        },
        clearItems: (state) => {
            state.items = [];
            localStorage.removeItem("savedItems");
        }
    }
});

export const { addItem, removeItem, clearItems } = saveSlice.actions;
export default saveSlice.reducer;