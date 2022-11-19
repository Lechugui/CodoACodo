import { TMDB } from "../../config/TMDB"; 
import { moviesAdapter } from "../adapter/adapter";

export const getPopularMovies = async (page = 1) => {
  const res = await TMDB.api.get(TMDB.paths.movies.popular, {
    params: {
      page,
    },
  });
  console.log(res.data.results[0]);
  console.log(moviesAdapter(res.data.results));
  return moviesAdapter(res.data.results);
};
