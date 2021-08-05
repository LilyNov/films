import { createSlice } from "@reduxjs/toolkit";
import searchMovies from "./movies-operations";

const initialState = {
  movies: [],
  error: "",
  isFetch: false,
};

const moviesReducer = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [searchMovies.fulfilled](state, { payload }) {
      state.movies = payload;
      state.isFetch = true;
    },
    [searchMovies.pending](state) {
      state.isFetch = false;
    },
    [searchMovies.rejected](state, { payload }) {
      state.error = payload;
      state.isFetch = false;
    },
  },
});

export default moviesReducer.reducer;
