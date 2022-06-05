import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovie } from "../../features/movie/movieSlice";

const Hero = () => {
  const dispatch = useDispatch();
  const {
    popularMoviesList,
    topRatedMoviesList,
    trendingMoviesList,
    horrorMoviesList,
    upcomingMoviesList,
  } = useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(fetchAllMovie());
  }, [dispatch]);

  console.log(
    { popularMoviesList },
    { topRatedMoviesList },
    { trendingMoviesList },
    { horrorMoviesList },
    { upcomingMoviesList }
  );

  return <div>Hero</div>;
};

export { Hero };
