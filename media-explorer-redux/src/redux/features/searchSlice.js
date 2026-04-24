import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPhotos, fetchVideos, fetchGif } from "../../api/api";

export const getPhotos = createAsyncThunk(
    "media/getPhotos",
    async (query, thunkAPI) => {
        try {
            const res = await fetchPhotos(query);
            return res.results;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const getVideos = createAsyncThunk(
    "media/getVideos",
    async (query, thunkAPI) => {
        try {
            const res = await fetchVideos(query);
            return res.videos;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

export const getGIFs = createAsyncThunk(
    "media/getGIFs",
    async (query, thunkAPI) => {
        try {
            const res = await fetchGif(query);
            return res.results;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

const searchSlice = createSlice({
    name: "search",
    initialState: {
        query: "",
        tab: "photos",
        results: [],
        loading: false,
        error: null,
    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload;
        },
        setTab: (state, action) => {
            state.tab = action.payload;
            state.results = [];
        },
        clearResults: (state) => {
            state.results = [];
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Photos
            .addCase(getPhotos.pending, (state) => {
                state.loading = true;
                state.results = [];
                state.loading = false;
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.loading = false;
                state.results = action.payload;
            })
            .addCase(getPhotos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Videos
            .addCase(getVideos.fulfilled, (state, action) => {
                state.results = action.payload;
                state.results = [];
                state.loading = false;
            })

            .addCase(getVideos.pending, (state) => {
                state.loading = true;
            })
            .addCase(getVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // GIFs
            .addCase(getGIFs.fulfilled, (state, action) => {
                state.results = action.payload;
                state.loading = false;
                state.loading = false;
            })
            .addCase(getGIFs.pending, (state) => {
                state.loading = true;
            })
            .addCase(getGIFs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
});

export const { setQuery, setTab, clearResults } = searchSlice.actions;
export default searchSlice.reducer;