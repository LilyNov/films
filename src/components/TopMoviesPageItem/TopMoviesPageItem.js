import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTopMovie } from "../../redux/topMovies/topMovies-actions";
import { fetchOneMovie } from "../../redux/topMovies/topMovies-operations";
import Modal from "../Modal/Modal";
import { iteratorOfTopMovies } from "../../iterator/iteratorOfTopMovies";
import arrayOfAllMovies from "../../imdb-top250";
import style from "../TopMoviesPageItem/TopMoviesPageItem.module.css";

const TopMoviesPageItem = ({ movie, indexOfLastPost }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const nextMovie = iteratorOfTopMovies(arrayOfAllMovies, indexOfLastPost);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onDeleteMovie = (id) => {
    dispatch(deleteTopMovie(id));
    dispatch(fetchOneMovie(nextMovie()));
    console.log(nextMovie());
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
              onDeleteMovie(movie.imdbID);
            }}
          >
            Delete
          </button>
        </div>

        {showModal && <Modal onClose={toggleModal} movie={movie} />}
      </li>
    </>
  );
};

export default TopMoviesPageItem;
