import { useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import { getAllTopMovies } from "../../redux/topMovies/topMovies-selectors";
import { isLoading } from "../../redux/topMovies/topMovies-selectors";
import Loader from "../Loader/Loader";
import TopMoviesPageItem from "../TopMoviesPageItem/TopMoviesPageItem";
import style from "../TopMoviesPage/TopMoviesPage.module.css";

const TopMoviesPage = ({
  indexOfLastPost,
  getCurrentPage,
  postsPerPage,
  arrOfTopMovies,
}) => {
  const movies = useSelector(getAllTopMovies);
  const isLoadingForMovies = useSelector(isLoading);

  return (
    <>
      {isLoadingForMovies && <Loader />}
      <ul className={style.itemList}>
        {movies?.map((movie) => (
          <TopMoviesPageItem
            key={movie.imdbID}
            movie={movie}
            indexOfLastPost={indexOfLastPost}
          />
        ))}
      </ul>

      <div className={style.pagination}>
        <Pagination
          count={Math.ceil(arrOfTopMovies.length / postsPerPage)}
          onChange={(_, value) => getCurrentPage(value)}
        />
      </div>
    </>
  );
};

export default TopMoviesPage;
