import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import { Container } from "@material-ui/core";
import { getSerchMovies } from "../../redux/movies/movies-selectors";

import getMoviesId from "../../imdb-top250";
import { getTopMovies } from "../../redux/topMovies/topMovies-operations";
import TopMoviesPage from "../TopMoviesPage/TopMoviesPage";
import SearchMoviesPage from "../SearchMoviesPage/SearchMoviesPage";
import Loader from "../Loader/Loader";
import style from "../HomePage/HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const moviesSearch = useSelector(getSerchMovies);

  const [movies] = useState(getMoviesId);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(getTopMovies(currentPosts));
  }, [currentPosts, dispatch]);

  const onPaginationClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2200);
  };

  return (
    <>
      {" "}
      {loading && <Loader />}
      <Container maxWidth="lg" className={style.container}>
        {moviesSearch ? (
          <SearchMoviesPage />
        ) : (
          <>
            <TopMoviesPage />
            <div className={style.pagination}>
              <Pagination
                color="secondary"
                count={Math.ceil(movies.length / postsPerPage)}
                onChange={(_, value) => setCurrentPage(value)}
                onClick={onPaginationClick}
              />
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default HomePage;
