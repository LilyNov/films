import { createSlice } from "@reduxjs/toolkit";
import getTopMovies from "./topMovies-operations";
import { deleteMovie } from "../topMovies/topMovies-operations";

const initialState = {
  topMovies: [],
  error: "",
  isFetch: false,
};

const topMoviesReducer = createSlice({
  name: "topMovies",
  initialState,
  extraReducers: {
    [getTopMovies.fulfilled](state, { payload }) {
      state.topMovies = payload;
      state.isFetch = true;
    },
    [getTopMovies.pending](state) {
      state.isFetch = false;
    },
    [getTopMovies.rejected](state, { payload }) {
      state.error = payload;
      state.isFetch = false;
    },
    [deleteMovie](state, { payload }) {
      console.log("initialState", initialState);

      state.topMovies = state.topMovies.filter(({ id }) => id !== payload);
    },
  },
});

export default topMoviesReducer.reducer;
