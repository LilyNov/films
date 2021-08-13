export const iteratorOfTopMovies = (array, i, indexOfLastPost) => {
  let index = 0 + i + indexOfLastPost;

  return () => {
    const value = array[index];
    index++;

    if (index < array.length) {
      index++;
    }
    console.log("indexII", index);
    return value;
  };
};
