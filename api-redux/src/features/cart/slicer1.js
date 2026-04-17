import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//  {type: "Coin/fetch", payload: data }

const fetchData = createAsyncThunk(
    // Action : type, payload :
    "Coin/fetch",
    async (args, thunkAPI) => {
        try {
            const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=${args}`);
            const data = await res.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const slicer1 = createSlice({
    name: "slice1",
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default slicer1.reducer;
export { fetchData }