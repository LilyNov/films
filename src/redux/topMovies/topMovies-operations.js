import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

const BASE_URL = "http://www.omdbapi.com/";
const API_KEY = "a81b612c";

let id;

const getTopMovies = createAsyncThunk(
  "topMovies",
  async ({ currentPosts }, thunkAPI) => {
    let arr = [];
    try {
      for (let i = 0; i < currentPosts.length; i++) {
        id = currentPosts[i];
        const { data } = await axios.post(
          `${BASE_URL}?&apikey=${API_KEY}&i=${id}&r=json`
        );
        arr.push(data);
      }
      return arr;
    } catch (error) {
      alert(new Error("Error"));
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteMovie = createAction("movie/delete");

export default getTopMovies;
