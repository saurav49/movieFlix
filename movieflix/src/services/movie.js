import { endpoints } from "../urls";
import axios from "axios";

const getAllMovies = async () => {
  try {
    return await axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then(
        axios.spread((popular, topRated, trending, horror, upcoming) => {
          return {
            popularMoviesList: {
              data: popular.data.results,
              status: popular.status,
            },
            topRatedMoviesList: {
              data: topRated.data.results,
              status: topRated.status,
            },
            trendingMoviesList: {
              data: trending.data.results,
              status: trending.status,
            },
            horrorMoviesList: {
              data: horror.data.results,
              status: horror.status,
            },
            upcomingMoviesList: {
              data: upcoming.data.results,
              status: upcoming.status,
            },
          };
        })
      )
      .catch((err) => console.log(err));
  } catch (error) {}
};

export { getAllMovies };
