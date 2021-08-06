import { createAsyncThunk } from "@reduxjs/toolkit";
import { searchMovieApi } from "../../service/movies-api";

const searchMovies = createAsyncThunk("movie", async ({ movie }, thunkAPI) => {
  try {
    const { data } = await searchMovieApi(movie);
    return data;
  } catch (error) {
    alert(new Error("Not found any movies, please change input variant"));
    return thunkAPI.rejectWithValue();
  }
});

export default searchMovies;
