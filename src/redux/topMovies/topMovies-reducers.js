import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesError,
  deleteTopMovie,
  fetchOneMovieSuccess,
} from "./topMovies-actions";

const topMovies = createReducer([], {
  [getMoviesSuccess]: (_, { payload }) => payload,
  [deleteTopMovie]: (state, { payload }) => {
    return state.filter(({ imdbID }) => imdbID !== payload);
  },
  [fetchOneMovieSuccess]: (state, { payload }) => {
    console.log("fetchOneMovieSuccess", payload);
    return [...state, payload];
  },
});

const fetchLoading = createReducer(false, {
  [getMoviesRequest]: () => true,
  [getMoviesSuccess]: () => false,
  [getMoviesError]: () => false,
});

export default combineReducers({
  topMovies,
  fetchLoading,
});
