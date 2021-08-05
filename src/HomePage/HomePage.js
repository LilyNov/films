import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "@material-ui/lab/Pagination";
import { Container } from "@material-ui/core";
import { getSerchMovies } from "../redux/movies/movies-selectors";
import getMoviesId from "../imdb-top250";
import getTopMovies from "../redux/topMovies/topMovies-operations";
import TopMoviesPage from "../TopMoviesPage/TopMoviesPage";
import SearchMoviesPage from "../SearchMoviesPage/SearchMoviesPage";
import Loader from "../Loader/Loader";

const HomePage = () => {
  const dispatch = useDispatch();
  const moviesSearch = useSelector(getSerchMovies);
  const [movies, setMovies] = useState(getMoviesId);
  const [moviesOnPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  console.log("moviesSearch", moviesSearch);

  useEffect(() => {
    dispatch(getTopMovies({ currentPosts }));
  }, [currentPosts]);

  const pagiClick = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  console.log(loading);

  return (
    <>
      {" "}
      {loading && <Loader />}
      <Container maxWidth="lg">
        {moviesSearch ? (
          <SearchMoviesPage />
        ) : (
          <>
            <TopMoviesPage />
            <Pagination
              color="secondary"
              count={Math.ceil(movies.length / moviesOnPage)}
              onChange={(_, value) => setCurrentPage(value)}
              onClick={pagiClick}
            />
          </>
        )}
      </Container>
    </>
  );
};

export default HomePage;
