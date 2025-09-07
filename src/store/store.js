import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import movieReducer from "./slices/MovieSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
  },
  devTools: true,
});
