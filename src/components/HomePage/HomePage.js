import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Pagination from "@material-ui/lab/Pagination";
import { Container } from "@material-ui/core";
import { getQueryOfMovies } from "../../redux/movies/movies-selectors";
import getMoviesId from "../../imdb-top250";
import { getTopMovies } from "../../redux/topMovies/topMovies-operations";
import TopMoviesPage from "../TopMoviesPage/TopMoviesPage";
import SearchMoviesPage from "../SearchMoviesPage/SearchMoviesPage";
import style from "../HomePage/HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  // const moviesSearch = useSelector(getSerchMovies);
  const querySearch = useSelector(getQueryOfMovies);

  const [movies] = useState(getMoviesId);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (currentPosts) {
      dispatch(getTopMovies(currentPosts));
    }
  }, [currentPosts]);

  return (
    <>
      <Container maxWidth="lg" className={style.container}>
        {querySearch.length <= 1 ? (
          <>
            <TopMoviesPage
              indexOfLastPost={indexOfLastPost}
              getCurrentPage={setCurrentPage}
              postsPerPage={postsPerPage}
              arrOfTopMovies={movies}
            />
          </>
        ) : (
          <SearchMoviesPage />
        )}
      </Container>
    </>
  );
};

export default HomePage;
