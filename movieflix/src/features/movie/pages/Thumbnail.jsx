import { IMAGE__API } from "../../../urls";
import { useDispatch } from "react-redux";
import { handleSelectedVideo } from "../movieSlice";
import { useNavigate } from "react-router-dom";

const Thumbnail = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleThumbnailClick = (video) => {
    dispatch(handleSelectedVideo(video));
    navigate(`/watch/${movie?.id}`);
    // setTimeout(() => {
    // }, 1500);
  };
  return (
    <div
      className="flex flex-col items-center transition ease-out duration-300 hover:scale-125 hover:z-50"
      onClick={() => handleThumbnailClick(movie)}
    >
      <div
        className="relative h-28 min-w-[180px] cursor-pointer transition
      duration-200 ease-out md:h-36 md:min-w-[260px]
      "
      >
        <img
          src={`${IMAGE__API}${movie?.backdrop_path || movie?.poster_path}`}
          alt="thumbnail"
          className="rounded-sm object-cover md:rounded"
        />
      </div>
      <p className="text-slate-400/80 m-w-[90%] py-2">
        {movie?.overview.length > 50
          ? movie?.overview.slice(0, 50)
          : movie?.overview}
        ...
      </p>
      <div className="flex items-center justify-start text-slate-400/80 w-full space-x-6 text-sm">
        <p className="flex items-center">
          <span>{movie?.vote_average}</span>
          {ThumbnailIcons["star"]}
        </p>
        <p>{movie?.release_date.split("-")[0]}</p>
      </div>
    </div>
  );
};

export { Thumbnail };

export const ThumbnailIcons = {
  star: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  ),
};
