import { useSelector } from "react-redux";
import { getAllTopMovies } from "../../redux/topMovies/topMovies-selectors";
import TopMoviesPageItem from "../TopMoviesPageItem/TopMoviesPageItem";
import Loader from "../Loader/Loader";
import style from "../TopMoviesPage/TopMoviesPage.module.css";

const TopMoviesPage = ({ indexOfLastPost }) => {
  const movies = useSelector(getAllTopMovies);

  return (
    <>
      {movies && (
        <ul className={style.itemList}>
          {movies.map((movie) => (
            <TopMoviesPageItem
              key={movie.imdbID}
              movie={movie}
              indexOfLastPost={indexOfLastPost}
            />
          ))}
        </ul>
      )}
      {movies.length < 10 && <Loader />}
    </>
  );
};

export default TopMoviesPage;
