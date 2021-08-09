import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
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
          {movies?.map(({ Title, Poster }) => (
            <li key={uuidv4()} className={style.imageGalleryItem}>
              <img
                src={Poster}
                alt={Title}
                className={style.imageGalleryItemImage}
              />
              <div className={style.about}>
                <p className={style.text}>{Title}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Not found any movies. Try change query of search</p>
      )}
    </>
  );
};

export default SearchMoviesPage;
