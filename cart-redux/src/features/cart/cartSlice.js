import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0, 
}

export const cartSlice = createSlice({
    name: "foodcart",
    initialState,
    reducers: {
        add: (state) => { state.count += 1 },
        remove: (state) => { state.count -= 1 },
    }
});

export const { add, remove, } = cartSlice .actions;
export default cartSlice .reducer;