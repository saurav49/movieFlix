import { IMAGE__API } from "../../../urls";

const Thumbnail = ({ movie }) => {
  return (
    <div
      className="relative h-28 min-w-[180px] cursor-pointer transition
    duration-200 ease-out md:h-36 md:min-w-[260px] hover:scale-150
    "
    >
      <img
        src={`${IMAGE__API}${movie?.backdrop_path || movie?.poster_path}`}
        alt="thumbnail"
        className="rounded-sm object-cover md:rounded"
      />
    </div>
  );
};

export { Thumbnail };
