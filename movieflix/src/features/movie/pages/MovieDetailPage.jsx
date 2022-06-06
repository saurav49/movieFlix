import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";

const MovieDetailPage = () => {
  const [currentVideo, setCurrentVideo] = useState("");
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
              {/* <div>
                <span className="text-[gray]">Genres:</span>
                {genres.map((genre) => genre.name).join(", ")}
              </div> */}

              <div>
                <span className="text-[gray]">Original language:</span>
                {selectedVideo?.original_language}
              </div>

              <div>
                <span className="text-[gray]">Total votes:</span>
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

const MovieDetailPageIcons = {
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
};
