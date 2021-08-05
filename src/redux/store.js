import { configureStore } from "@reduxjs/toolkit";
import { default as moviesReducer } from "../redux/movies/movies-slice";
import { default as topMoviesReducer } from "../redux/topMovies/topMovies-slice";
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    topMovies: topMoviesReducer,
  },
});

export default store;
