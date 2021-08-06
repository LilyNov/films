import { configureStore } from "@reduxjs/toolkit";
import { default as moviesReducer } from "../redux/movies/movies-slice";
import { topMoviesReducer } from "../redux/topMovies/topMovies-reducers";
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    topMovies: topMoviesReducer,
  },
});

export default store;
