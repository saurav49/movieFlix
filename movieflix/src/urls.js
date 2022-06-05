const API__KEY = process.env.REACT_APP_TMDB_API_KEY;
const TMDB__API = `https://api.themoviedb.org/3/movie/550?api_key=${API__KEY}`;

const POPULAR__API = `https://api.themoviedb.org/3/movie/popular?api_key=${API__KEY}&language=en-US&page=1`;
const TOP__RATED__API = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API__KEY}&language=en-US&page=1`;
const TRENDING__API = `https://api.themoviedb.org/3/movie/popular?api_key=${API__KEY}&language=en-US&page=2`;
const HORROR__API = `https://api.themoviedb.org/3/search/movie?api_key=${API__KEY}&language=en-US&query=horror&page=1&include_adult=false`;
const UPCOMDING__API = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API__KEY}&language=en-US&page=1`;
const endpoints = [
  POPULAR__API,
  TOP__RATED__API,
  TRENDING__API,
  HORROR__API,
  UPCOMDING__API,
];
export {
  TMDB__API,
  POPULAR__API,
  TOP__RATED__API,
  TRENDING__API,
  HORROR__API,
  UPCOMDING__API,
  endpoints,
};
