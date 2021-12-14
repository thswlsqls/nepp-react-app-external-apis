import axios from "axios";

export const getMovieList = async (params) => {
  const result = await axios.get("http://localhost:8080/movie", {
    params,
  });
  return result.data;
};
