import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTopMovie } from "../../redux/topMovies/topMovies-actions";
import { fetchOneMovie } from "../../redux/topMovies/topMovies-operations";
import Modal from "../Modal/Modal";
import { iteratorOfTopMovies } from "../../iterator/iteratorOfTopMovies";
import arrayOfAllMovies from "../../imdb-top250";
import style from "../TopMoviesPageItem/TopMoviesPageItem.module.css";

const TopMoviesPageItem = ({ movie, index }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onDeleteMovie = (indexEl, id) => {
    const next = iteratorOfTopMovies(arrayOfAllMovies, indexEl);
    dispatch(deleteTopMovie(id));
    dispatch(fetchOneMovie(next()));
  };

  return (
    <>
      <li className={style.imageGalleryItem}>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className={style.imageGalleryItemImage}
        />
        <div className={style.btnBox}>
          <button className={style.button} onClick={toggleModal}>
            Details
          </button>
          <button
            className={style.button}
            onClick={() => {
              onDeleteMovie(index, movie.imdbID);
            }}
          >
            Remove
          </button>
        </div>

        {showModal && <Modal onClose={toggleModal} movie={movie} />}
      </li>
    </>
  );
};

export default TopMoviesPageItem;
