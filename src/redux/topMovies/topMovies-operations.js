import {
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesError,
  fetchOneMovieRequest,
  fetchOneMovieSuccess,
  fetchOneMovieError,
} from "./topMovies-actions";
import { getMoviesApi } from "../../service/movies-api";

// all Top Movies
export const getTopMovies = (currentPosts) => async (dispatch) => {
  dispatch(getMoviesRequest());
  let arrMovies = [];
  try {
    for (let i = 0; i < currentPosts.length; i++) {
      const { data } = await getMoviesApi(currentPosts[i]);
      arrMovies.push(data);
      console.log("data", data);
    }
    dispatch(getMoviesSuccess(arrMovies));
  } catch (error) {
    dispatch(getMoviesError(error));
  }
};

// one Top Movie
export const fetchOneMovie = (movie) => async (dispatch) => {
  dispatch(fetchOneMovieRequest());
  try {
    const { data } = await getMoviesApi(movie);
    dispatch(fetchOneMovieSuccess(data));
  } catch (error) {
    dispatch(fetchOneMovieError(error));
  }
};
