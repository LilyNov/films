import axios from "axios";
// import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesError,
} from "./topMovies-actions";

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "a81b612c";

export const getTopMovies = (currentPosts) => async (dispatch) => {
  console.log("currentPosts-operations", currentPosts);
  dispatch(getMoviesRequest());

  let arrMovies = [];
  try {
    for (let i = 0; i < currentPosts.length; i++) {
      let id = currentPosts[i];
      const { data } = await axios.get(
        `${BASE_URL}?&apikey=${API_KEY}&i=${id}&r=json`
      );
      arrMovies.push(data);
    }
    dispatch(getMoviesSuccess(arrMovies));
  } catch (error) {
    dispatch(getMoviesError(error));
  }
};
