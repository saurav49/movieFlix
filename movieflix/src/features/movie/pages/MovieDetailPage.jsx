import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import { BannerIcons } from "../../../components/Hero/Hero";

const MovieDetailPage = () => {
  const [currentVideo, setCurrentVideo] = useState("");
  const [genres, setGenres] = useState([]);
  let { selectedVideo } = useSelector((state) => state.movie);
  if (selectedVideo.hasOwnProperty("id")) {
    if (localStorage.getItem("selected__video__codemancers") !== undefined) {
      selectedVideo = JSON.parse(
        localStorage.getItem("selected__video__codemancers")
      );
    }
  }
  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/${
            selectedVideo?.media_type === "tv" ? "tv" : "movie"
          }/${selectedVideo?.id}?api_key=${
            process.env.REACT_APP_TMDB_API_KEY
          }&language=en-US&append_to_response=videos`
        );
        if (data?.videos.results.length > 0) {
          console.log("{ idx }");
          const idx = data?.videos.results.findIndex(
            (vid) => vid.type === "Trailer"
          );
          console.log(idx);
          setCurrentVideo(data?.videos.results[idx]?.key);
        }
        if (data?.genres) {
          setGenres(data.genres);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [selectedVideo, currentVideo]);

  console.log({ currentVideo });
  return (
    <div className="mt-20 mr-10">
      <button
        className="flex items-center space-x-2 px-4 py-2 mb-6 rounded-md border-2 text-white border-white transition duration-500 hover:bg-white hover:text-black hover:border-black"
        onClick={() => navigate(-1)}
      >
        {MovieDetailPageIcons["back"]}
        back
      </button>
      <div className="relative pt-[56.25%]">
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${currentVideo}`}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0", left: "0" }}
          playing
        />
      </div>
      <div className="flex space-x-16 rounded-b-md bg-[#181818] text-white px-10 py-8">
        <div className="space-y-6 text-lg">
          <div className="flex items-center space-x-2 text-sm">
            <p className="font-semibold text-green-400">
              {selectedVideo?.vote_average * 10}% Match
            </p>
            <p className="font-light">
              {selectedVideo?.release_date || selectedVideo?.first_air_date}
            </p>
            <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
              HD
            </div>
          </div>
          <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
            <p className="w-5/6">{selectedVideo?.overview}</p>
            <div className="flex flex-col space-y-3 text-sm">
              {genres && Array.isArray(genres) && genres.length > 0 && (
                <div>
                  <span className="text-[gray] mr-2">Genres:</span>
                  {genres.map((genre) => genre.name).join(", ")}
                </div>
              )}

              <div>
                <span className="text-[gray] mr-2">Original language:</span>
                {selectedVideo?.original_language}
              </div>

              <div>
                <span className="text-[gray] mr-2">Total votes:</span>
                {selectedVideo?.vote_count}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MovieDetailPage };

export const MovieDetailPageIcons = {
  back: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 mr-2"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"
      />
    </svg>
  ),
  thumbsUp: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
      />
    </svg>
  ),
};
