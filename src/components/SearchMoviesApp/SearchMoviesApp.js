import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import style from "./SearchMoviesApp.module.css";
import SearchMovies from "../../redux/movies/movies-operations";
import { queryFromInput } from "../../redux/movies/movies-operations";

const SearchMoviesApp = () => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();

  const debounce = (fn, ms) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), ms);
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getMovie = useCallback(
    debounce((movie) => {
      dispatch(SearchMovies({ movie }));
    }, 1000)
  );

  useEffect(() => {
    if (movie) {
      getMovie(movie);
      dispatch(queryFromInput(movie));
    }
  }, [dispatch, getMovie, movie]);

  const handleSubmit = (e) => {
    setMovie(e.currentTarget.value.toLowerCase());
  };

  return (
    <>
      <input
        className={style.searchFormInput}
        type="text"
        autoComplete="off"
        placeholder="Search..."
        value={movie}
        onChange={handleSubmit}
      />
    </>
  );
};

export default SearchMoviesApp;
