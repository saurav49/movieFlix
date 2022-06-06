import React from "react";

const MovieList = ({ title, movieList }) => {
  return (
    <div className="h-40 space-y-0.5 md:space-y-2">
      <h2 className="text-md md:text-md lg:text-xl text-[#e5e5e5]">{title}</h2>
      <div className="group relative md:-ml-2">
        {movieListIcons["left"]}
        {movieListIcons["right"]}
      </div>
    </div>
  );
};

export { MovieList };

export const movieListIcons = {
  left: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 absolute top-0 left-0 transition cursor-pointer 
      opacity-0 hover:scale-125 group-hover:opacity-100"
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
      className="h-6 w-6 absolute top-0 left-0 transition cursor-pointer 
      opacity-0 hover:scale-125 group-hover:opacity-100"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#e5e5e5"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  ),
};
