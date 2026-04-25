import { createSlice } from "@reduxjs/toolkit";
import { toast, Zoom } from "react-toastify";

const saveSlice = createSlice({
    name: "save",
    initialState: {
        items: localStorage.getItem("savedItems") ? JSON.parse(localStorage.getItem("savedItems")) : [],
    },
    reducers: {
        addItem: (state, action) => {
            const alreadySaved = state.items.find(item => item.id === action.payload.id);
            if (!alreadySaved) {
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
        },
        addedToast: () => {
            toast.success('Item saved!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        },
        removeToast: () => {
            toast.error('Item removed!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
            });
        }
    }
});

export const { addItem, removeItem, clearItems, addedToast, removeToast } = saveSlice.actions;
export default saveSlice.reducer;