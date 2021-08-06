import {
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesError,
} from "./topMovies-actions";
import { getMoviesApi } from "../../service/movies-api";

export const getTopMovies = (currentPosts) => async (dispatch) => {
  dispatch(getMoviesRequest());
  let arrMovies = [];
  try {
    for (let i = 0; i < currentPosts.length; i++) {
      const { data } = await getMoviesApi(currentPosts[i]);
      arrMovies.push(data);
    }
    dispatch(getMoviesSuccess(arrMovies));
  } catch (error) {
    dispatch(getMoviesError(error));
  }
};
