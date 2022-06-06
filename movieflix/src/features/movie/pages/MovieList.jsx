import { useRef, useState, useEffect } from "react";
import { Thumbnail } from "./Thumbnail";

const MovieList = ({ title, movieList }) => {
  const rowEl = useRef(null);
  const [isScrollX, setIsScrollX] = useState(false);

  const handleCarouselArrowClick = (arrowType) => {
    setIsScrollX(true);
    console.log("hello", rowEl.current);
    if (rowEl.current) {
      const { scrollLeft, clientWidth } = rowEl.current;

      const scroll =
        arrowType === "LEFT"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      console.log({ scroll });

      rowEl.current.scrollTo({ left: scroll, behavior: "smooth" });
    }
  };

  return (
    <div className="h-48 space-y-0.5 md:space-y-1">
      <h2 className="text-md md:text-md lg:text-xl text-slate-200 hover:">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <button onClick={() => handleCarouselArrowClick("LEFT")}>
          {movieListIcons["left"]}
        </button>
        <div
          className="flex items-center scrollbar-hide
        space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2"
          ref={rowEl}
        >
          {movieList.map((movie, idx) => {
            return <Thumbnail key={idx} movie={movie} />;
          })}
        </div>
        <button onClick={() => handleCarouselArrowClick("RIGHT")}>
          {movieListIcons["right"]}
        </button>
      </div>
    </div>
  );
};

export { MovieList };

export const movieListIcons = {
  left: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 bottom-0 left-2 z-40 m-auto h-10 w-10 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#e5e5e5"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  ),
  right: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 bottom-0 right-2 z-40 m-auto h-10 w-10 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#e5e5e5"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  ),
};
