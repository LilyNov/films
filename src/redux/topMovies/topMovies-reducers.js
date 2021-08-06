import { createReducer } from "@reduxjs/toolkit";
import { getMoviesSuccess, deleteTopMovie } from "./topMovies-actions";

export const topMoviesReducer = createReducer([], {
  [getMoviesSuccess]: (state, { payload }) => {
    console.log("state1", state);
    return payload;
  },
  [deleteTopMovie]: (state, { payload }) => {
    return state.filter(({ imdbID }) => imdbID !== payload);
  },
});
