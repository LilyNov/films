import { useState } from "react";
import { useDispatch } from "react-redux";
import { ImSearch } from "react-icons/im";
import style from "./SearchMoviesApp.module.css";
import SearchMovies from "../redux/movies/movies-operations";

const SearchMoviesApp = () => {
  const [movie, setMovie] = useState("");
  const dispatch = useDispatch();

  setTimeout(() => {
    dispatch(SearchMovies({ movie }));
  }, 1000);
  const handleSubmit = (e) => {
    setMovie(e.currentTarget.value.toLowerCase());
    console.log(movie);
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

      {/* {isSearching && <div>Searching ...</div>} */}
    </>
  );
};

export default SearchMoviesApp;
