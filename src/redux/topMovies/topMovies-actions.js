import { createAction } from "@reduxjs/toolkit";

export const getMoviesRequest = createAction("topMovies/getMoviesRequest");
export const getMoviesSuccess = createAction("topMovies/getMoviesSuccess");
export const getMoviesError = createAction("topMovies/getMoviesError");

export const deleteTopMovie = createAction("topMovies/deleteTopMovie");
