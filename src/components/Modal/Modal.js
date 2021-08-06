import { createPortal } from "react-dom";
import { useEffect } from "react";
import { GrClose } from "react-icons/gr";
import style from "../Modal/Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ movie, onClose }) => {
  const {
    Poster,
    Title,
    Year,
    Released,
    Runtime,
    Genre,
    Director,
    Writer,
    Actors,
    Plot,
    Language,
    Country,
    Awards,
  } = movie;

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDownCloseModal);
    return () => {
      window.removeEventListener("keydown", handleKeyDownCloseModal);
    };
  }, []);

  const handleKeyDownCloseModal = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleCloseModal = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={style.overlay} onClick={handleCloseModal}>
      <div className={style.modal}>
        <GrClose onClick={handleCloseModal} className={style.iconClose} />
        <img className={style.modalImg} src={Poster} alt={Title} />
        <div>
          <p>{Title}</p>
          <p>
            <span> Year:</span> {Year}
          </p>
          <p>
            <span>Released:</span> {Released}
          </p>
          <p>
            <span>Runtime:</span> {Runtime}
          </p>
          <p>
            <span>Genre:</span> {Genre}
          </p>
          <p>
            <span>Director:</span> {Director}
          </p>
          <p>
            <span>Writer:</span> {Writer}
          </p>
          <p>
            <span>Actors:</span> {Actors}
          </p>
          <p>
            <span>Plot:</span> {Plot}
          </p>
          <p>
            <span>Language:</span> {Language}
          </p>
          <p>
            <span>Country:</span> {Country}
          </p>
          <p>
            <span>Awards:</span> {Awards}
          </p>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
