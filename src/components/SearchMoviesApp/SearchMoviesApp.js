import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import style from "./SearchMoviesApp.module.css";
import SearchMovies from "../../redux/movies/movies-operations";

const SearchMoviesApp = () => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movie) {
      return;
    }
    setTimeout(() => {
      dispatch(SearchMovies({ movie }));
    }, 1500);
  }, [movie]);

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
      {movie.length < 3 && movie !== "" && (
        <p className={style.textError}>Not enough characters to find</p>
      )}
    </>
  );
};

export default SearchMoviesApp;
