import {configureStore} from '@reduxjs/toolkit';
import foodReducer from '../features/cart/cartSlice';

export const store = configureStore({
    reducer: {
        foodcart: foodReducer
    }
})