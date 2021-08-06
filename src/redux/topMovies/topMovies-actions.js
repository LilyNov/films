import { createAction } from "@reduxjs/toolkit";

export const getMoviesRequest = createAction("topMovies/getMoviesRequest");
export const getMoviesSuccess = createAction("topMovies/getMoviesSuccess");
export const getMoviesError = createAction("topMovies/getMoviesError");

export const fetchOneMovieRequest = createAction(
  "topMovies/fetchOneMovieRequest"
);
export const fetchOneMovieSuccess = createAction(
  "topMovies/fetchOneMovieSuccess"
);
export const fetchOneMovieError = createAction("topMovies/fetchOneMovieError");

export const deleteTopMovie = createAction("topMovies/deleteTopMovie");
