// import numbers from "../imdb-top250";

export const iteratorOfTopMovies = (array, i) => {
  let index = 0 + i;

  return () => {
    const value = array[index];
    index++;

    // if (index < array.length) {
    //   index++;
    // }
    console.log("indexII", index);
    return value;
  };
};
