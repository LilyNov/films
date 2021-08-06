import { useSelector } from "react-redux";
import { getTopMovies } from "../../redux/topMovies/topMovies-selectors";
import TopMoviesPageItem from "../TopMoviesPageItem/TopMoviesPageItem";
import Loader from "../Loader/Loader";
import style from "../TopMoviesPage/TopMoviesPage.module.css";

const TopMoviesPage = () => {
  const movies = useSelector(getTopMovies);

  return (
    <>
      {movies && (
        <ul className={style.itemList}>
          {movies.map((movie) => (
            <TopMoviesPageItem key={movie.imdbID} movie={movie} />
          ))}
        </ul>
      )}
      {movies.length < 10 && <Loader />}
    </>
  );
};

export default TopMoviesPage;
