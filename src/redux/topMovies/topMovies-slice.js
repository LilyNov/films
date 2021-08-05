import { createSlice } from "@reduxjs/toolkit";
import getTopMovies from "./topMovies-operations";

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
  },
});

export default topMoviesReducer.reducer;
