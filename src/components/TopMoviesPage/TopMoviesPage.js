import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getTopMovies } from "../../redux/topMovies/topMovies-selectors";
import TopMoviesPageItem from "../TopMoviesPageItem/TopMoviesPageItem";
import Loader from "../Loader/Loader";
import style from "../TopMoviesPage/TopMoviesPage.module.css";

const TopMoviesPage = () => {
  const movies = useSelector(getTopMovies);

  return (
    <>
      {movies.length === 10 && (
        <ul className={style.itemList}>
          {movies.map((movie) => (
            <TopMoviesPageItem key={uuidv4()} movie={movie} />
          ))}
        </ul>
      )}
      {movies.length < 10 && <Loader />}
    </>
  );
};

export default TopMoviesPage;
