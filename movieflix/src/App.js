import { useEffect } from "react";
import "./App.css";
import { Navbar, Hero } from "./components/index";
import { MovieList } from "./features/movie/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovie } from "./features/movie/movieSlice";

function App() {
  const dispatch = useDispatch();
  const {
    popularMovieList,
    topRatedMovieList,
    trendingMovieList,
    horrorMovieList,
    upcomingMovieList,
  } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(fetchAllMovie());
  }, [dispatch]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900/10 to-[#040814] lg:h-[140vh]">
      <Navbar />
      <main className="relative pl-6 lg:pl-12 pb-24 lg:space-y-24">
        <Hero />
        <section className="flex flex-col space-y-2 sm:space-y-10">
          <MovieList title="Popular" movieList={popularMovieList} />
          <MovieList title="Top Rated" movieList={topRatedMovieList} />
          <MovieList title="Trending" movieList={trendingMovieList} />
          <MovieList title="Horror" movieList={horrorMovieList} />
          <MovieList title="Upcoming" movieList={upcomingMovieList} />
        </section>
      </main>
    </div>
  );
}

export default App;
