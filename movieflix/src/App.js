import { useEffect } from "react";
import "./App.css";
import { Navbar, Hero } from "./components/index";
import { MovieList, MovieDetailPage } from "./features/movie/index";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllMovie } from "./features/movie/movieSlice";
import { Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <section className="flex flex-col space-y-2 sm:space-y-10">
                  <MovieList title="Popular" movieList={popularMovieList} />
                  <MovieList title="Top Rated" movieList={topRatedMovieList} />
                  <MovieList title="Trending" movieList={trendingMovieList} />
                  <MovieList title="Horror" movieList={horrorMovieList} />
                  <MovieList title="Upcoming" movieList={upcomingMovieList} />
                </section>
              </>
            }
          />
          <Route path="/watch/:id" element={<MovieDetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
