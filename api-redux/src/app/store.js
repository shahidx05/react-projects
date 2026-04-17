import {configureStore} from '@reduxjs/toolkit';
import slicerReducer from '../features/cart/slicer1';

export const store = configureStore({
    reducer: {
        slice1: slicerReducer
    }
})