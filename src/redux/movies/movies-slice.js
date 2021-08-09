import { createSlice } from "@reduxjs/toolkit";
import searchMovies from "./movies-operations";
import { queryFromInput } from "./movies-operations";

const initialState = {
  movies: [],
  queryOfMovie: "",
  error: "",
  isFetch: false,
};

const moviesReducer = createSlice({
  name: "movies",
  initialState,
  extraReducers: {
    [queryFromInput](state, { payload }) {
      state.queryOfMovie = payload;
    },
    [searchMovies.fulfilled](state, { payload }) {
      state.movies = payload;
      state.isFetch = false;
    },
    [searchMovies.pending](state) {
      state.isFetch = true;
    },
    [searchMovies.rejected](state, { payload }) {
      state.error = payload;
      state.isFetch = false;
    },
  },
});

export default moviesReducer.reducer;
