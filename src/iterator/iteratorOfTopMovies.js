// import numbers from "../imdb-top250";

export const iteratorOfTopMovies = (array, i) => {
  let index = 0 + i;

  return () => {
    const value = array[index];

    if (index < array.length) {
      index++;
    }

    return value;
  };
};

// const nextMovie = iteratorOfTopMovies(
//   arrayOfAllMovies,
//   indexOfLastPost + nextMovieIndex
// );
// console.log(nextMovie());
// console.log("nextMovieIndex", nextMovieIndex);
