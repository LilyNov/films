import { createReducer } from "@reduxjs/toolkit";
import { getMoviesSuccess, deleteTopMovie } from "./topMovies-actions";

export const topMoviesReducer = createReducer([], {
  [getMoviesSuccess]: (_, { payload }) => payload,
  [deleteTopMovie]: (state, { payload }) => {
    return state.filter(({ imdbID }) => imdbID !== payload);
  },
});
