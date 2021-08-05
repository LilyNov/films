import React from "react";
import { AppBar, Toolbar, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SearchMoviesApp from "../SearchMoviesApp/SearchMoviesApp";

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
    <AppBar position="fixed">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            IMDB
          </Typography>
          <SearchMoviesApp />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
