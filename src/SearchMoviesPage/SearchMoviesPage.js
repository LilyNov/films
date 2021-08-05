import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { getSerchMovies } from "../redux/movies/movies-selectors";
import style from "../SearchMoviesPage/SearchMoviesPage.module.css";

const SearchMoviesPage = () => {
  const movies = useSelector(getSerchMovies);
  console.log("movies", movies);

  return (
    <ul className={style.itemList}>
      {movies.map(({ Title, Poster }) => (
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
  );
};

export default SearchMoviesPage;
