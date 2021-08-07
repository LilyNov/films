import React from "react";
import { AppBar, Toolbar, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchMoviesApp from "../SearchMoviesApp/SearchMoviesApp";
import style from "../NavBar/NavBar.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

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
