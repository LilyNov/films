import { useState } from "react";
import Modal from "../Modal/Modal";
import style from "../TopMoviesPageItem/TopMoviesPageItem.module.css";

const TopMoviesPageItem = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <li className={style.imageGalleryItem} onClick={toggleModal}>
        <img
          src={movie.Poster}
          alt={movie.Title}
          className={style.imageGalleryItemImage}
        />
        <div className={style.about}>
          <p className={style.text}>{movie.Title}</p>
        </div>
        {showModal && <Modal onClose={toggleModal} movie={movie} />}
      </li>
    </>
  );
};

export default TopMoviesPageItem;
