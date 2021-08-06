import axios from "axios";

const BASE_URL = "https://www.omdbapi.com/";
const API_KEY = "a81b612c";

export const getMoviesApi = (id) =>
  axios.get(`${BASE_URL}?&apikey=${API_KEY}&i=${id}&r=json`);
