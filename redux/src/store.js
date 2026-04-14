import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slicer1";

export const store = configureStore({
  reducer: {
    slice1: counterReducer,
  },
});