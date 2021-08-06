import { createReducer } from "@reduxjs/toolkit";
import {
  getMoviesSuccess,
  deleteTopMovie,
  fetchOneMovieSuccess,
} from "./topMovies-actions";

export const topMoviesReducer = createReducer([], {
  [getMoviesSuccess]: (_, { payload }) => payload,
  [deleteTopMovie]: (state, { payload }) => {
    return state.filter(({ imdbID }) => imdbID !== payload);
  },
  [fetchOneMovieSuccess]: (state, { payload }) => {
    console.log("fetchOneMovieSuccess", payload);
    return [...state, payload];
  },
});
