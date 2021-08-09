import { useSelector } from "react-redux";
import {
  getSerchMovies,
  isFetchSearchOfMovies,
} from "../../redux/movies/movies-selectors";
import Loader from "../Loader/Loader";
import style from "../SearchMoviesPage/SearchMoviesPage.module.css";

const SearchMoviesPage = () => {
  const movies = useSelector(getSerchMovies);
  const isLoadingForMovies = useSelector(isFetchSearchOfMovies);

  return (
    <>
      {isLoadingForMovies && <Loader />}
      {movies ? (
        <ul className={style.itemList}>
          {movies?.map(({ Title, Poster, imdbID }) => (
            <li key={imdbID} className={style.imageGalleryItem}>
              <img
                src={Poster}
                alt={Title}
                className={style.imageGalleryItemImage}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Not found any movies. Try to change query of search</p>
      )}
    </>
  );
};

export default SearchMoviesPage;
