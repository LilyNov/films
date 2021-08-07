import { useSelector } from "react-redux";
import { getAllTopMovies } from "../../redux/topMovies/topMovies-selectors";
import { isLoading } from "../../redux/topMovies/topMovies-selectors";
import Loader from "../Loader/Loader";
import TopMoviesPageItem from "../TopMoviesPageItem/TopMoviesPageItem";
import style from "../TopMoviesPage/TopMoviesPage.module.css";

const TopMoviesPage = ({ indexOfLastPost }) => {
  const movies = useSelector(getAllTopMovies);
  const isLoadingForMovies = useSelector(isLoading);
  console.log("isLoading", isLoadingForMovies);
  console.log("movies", movies);

  return (
    <>
      {isLoadingForMovies && <Loader />}
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
    </>
  );
};

export default TopMoviesPage;
