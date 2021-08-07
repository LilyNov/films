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
import style from "../HomePage/HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const moviesSearch = useSelector(getSerchMovies);
  const [movies] = useState(getMoviesId);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = movies.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (!currentPosts) {
      return;
    }
    dispatch(getTopMovies(currentPosts));
  }, [currentPosts]);

  return (
    <>
      <Container maxWidth="lg" className={style.container}>
        {moviesSearch ? (
          <SearchMoviesPage />
        ) : (
          <>
            <TopMoviesPage indexOfLastPost={indexOfLastPost} />
            <div className={style.pagination}>
              <Pagination
                count={Math.ceil(movies.length / postsPerPage)}
                onChange={(_, value) => setCurrentPage(value)}
              />
            </div>
          </>
        )}
      </Container>
    </>
  );
};

export default HomePage;
