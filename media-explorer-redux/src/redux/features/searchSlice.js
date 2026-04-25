import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPhotos, fetchVideos, fetchGif } from "../../api/api";

export const getPhotos = createAsyncThunk(
    "media/getPhotos",
    async (query, thunkAPI) => {
        try {
            const res = await fetchPhotos(query);
            return res.results.map(item => ({
                id: item.id,
                type: "photo",
                src: item.urls.small,
                title: item.alt_description || "Photo",
                url: item.links.html
            }));
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
            return res.videos.map(item => ({
                id: item.id,
                type: "video",
                src: item.video_files[0]?.link,
                title: item.user?.name || "Video",
                url: item.url
            }));
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
            return res.results.map(item => ({
                id: item.id,
                type: "gif",
                src: item.media_formats.gif.url,
                title: item.title || "GIF",
                url: item.url
            }));
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
            state.error = null;
        },
        clearResults: (state) => {
            state.results = [];
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        const pendingCase = (state) => {
            state.loading = true;
            state.results = [];   // ← clear stale data immediately
            state.error = null;
        };
        const fulfilledCase = (state, action) => {
            state.loading = false;
            state.results = action.payload; // ← already normalized, safe to render
        };
        const rejectedCase = (state, action) => {
            state.loading = false;
            state.error = action.payload;
        };

        builder
            .addCase(getPhotos.pending, pendingCase)
            .addCase(getPhotos.fulfilled, fulfilledCase)
            .addCase(getPhotos.rejected, rejectedCase)

            .addCase(getVideos.pending, pendingCase)
            .addCase(getVideos.fulfilled, fulfilledCase)
            .addCase(getVideos.rejected, rejectedCase)

            .addCase(getGIFs.pending, pendingCase)
            .addCase(getGIFs.fulfilled, fulfilledCase)
            .addCase(getGIFs.rejected, rejectedCase)
    }
    // extraReducers: (builder) => {
    //     builder
    //         // Photos
    //         .addCase(getPhotos.pending, (state) => {
    //             state.loading = true;
    //             state.results = [];
    //             state.error = null;
    //         })
    //         .addCase(getPhotos.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.results = action.payload;
    //         })
    //         .addCase(getPhotos.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload;
    //         })

    //         // Videos
    //         .addCase(getVideos.pending, (state) => {
    //             state.loading = true;
    //             state.results = [];
    //             state.error = null;
    //         })
    //         .addCase(getVideos.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.results = action.payload;
    //         })

    //         .addCase(getVideos.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload;
    //         })

    //         // GIFs
    //         .addCase(getGIFs.pending, (state) => {
    //             state.loading = true;
    //             state.results = [];
    //             state.error = null;
    //         })
    //         .addCase(getGIFs.fulfilled, (state, action) => {
    //             state.loading = false;
    //             state.results = action.payload;
    //         })
    //         .addCase(getGIFs.rejected, (state, action) => {
    //             state.loading = false;
    //             state.error = action.payload;
    //         })
    // }
});

export const { setQuery, setTab, clearResults } = searchSlice.actions;
export default searchSlice.reducer;