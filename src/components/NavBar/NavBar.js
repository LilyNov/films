import React from "react";
import SearchMoviesApp from "../SearchMoviesApp/SearchMoviesApp";
import style from "../NavBar/NavBar.module.css";

export default function NavBar() {
  return (
    <header className={style.header}>
      <div className={style.headerBackground}>
        <div className={style.container}>
          <p className={style.logo}>IMDB movies</p>
          <div className={style.homeSearch}>
            <SearchMoviesApp />
          </div>
        </div>
      </div>
    </header>
  );
}
