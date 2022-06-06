import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { IMAGE__API } from "../../urls";

const Hero = () => {
  const { popularMovieList } = useSelector((state) => state.movie);

  const [movieBanner, setMovieBanner] = useState("");

  useEffect(() => {
    if (
      popularMovieList.length > 0 &&
      !movieBanner.hasOwnProperty("backdrop_path")
    ) {
      setMovieBanner(
        popularMovieList[Math.floor(Math.random() * popularMovieList.length)]
      );
    }
  }, [popularMovieList, movieBanner]);

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] md:justify-end lg:justify-center lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen ">
        {movieBanner && movieBanner.hasOwnProperty("backdrop_path") && (
          <img
            src={`${IMAGE__API}${
              movieBanner?.backdrop_path || movieBanner?.poster_path
            }`}
            alt="banner"
            className="bg-cover"
          />
        )}
      </div>
      {movieBanner && movieBanner.hasOwnProperty("title") && (
        <h1 className="font-bold text-2xl lg:text-5xl md:text-3xl text-white">
          {movieBanner?.original_title || movieBanner?.title}
        </h1>
      )}
      {movieBanner && movieBanner.hasOwnProperty("overview") && (
        <p className="drop-shadow-md text-white max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
          {movieBanner?.overview}
        </p>
      )}
      <div className="flex items-center space-x-2">
        <button className="herobtn heroBtnWhite">
          {BannerIcons["play"]}
          <span>Play</span>
        </button>
        <button className="herobtn heroBtnGray">
          {BannerIcons["info"]}
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
};

export { Hero };

export const BannerIcons = {
  play: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-black md:h-7 md:w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  info: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-white md:h-7 md:w-7"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
};
