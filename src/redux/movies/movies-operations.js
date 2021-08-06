import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "a81b612c";

const searchMovies = createAsyncThunk("movie", async ({ movie }, thunkAPI) => {
  try {
    const { data } = await axios.post(
      `${BASE_URL}?s=${movie}&apikey=${API_KEY}&r=json`
    );
    return data;
  } catch (error) {
    alert(new Error("Not found any movies, please change input variant"));
    return thunkAPI.rejectWithValue();
  }
});

export default searchMovies;
