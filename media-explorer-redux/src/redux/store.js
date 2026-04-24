import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './features/searchSlice';
import saveReducer from './features/saveSlice';
export const store = configureStore({
    reducer: {
        search : searchReducer,
        save : saveReducer
    },
})