import { useState, useEffect } from "react";

const BrandIcon = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={props.height}
      width={props.width}
      viewBox="-153.6 -69.1855 1331.2 415.113"
    >
      <path
        fill="#d81f26"
        d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676L44.051 119.724v151.073C28.647 272.418 14.594 274.58 0 276.742V0h41.08l56.212 157.021V0h43.511zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461V0h119.724v43.241h-76.482zm237.284-58.104h-44.862V242.15c-14.594 0-29.188 0-43.239.539V43.242h-44.862V0H463.22zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433V0h120.808v43.241h-78.375zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676V0h43.24zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242V0h-42.43zM1024 0l-54.863 131.615L1024 276.742c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75L871.576 0h46.482l28.377 72.699L976.705 0z"
      />
    </svg>
  );
};

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScreenScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScreenScroll);

    return () => {
      window.removeEventListener("scroll", handleScreenScroll);
    };
  }, []);

  return (
    <nav className={`${isScroll && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-4 md:space-x-2">
        <BrandIcon width="100" height="100" />
        <ul className="hidden md:flex items-center space-x-4">
          <li className="navlink">Home</li>
          <li className="navlink">TV Shows</li>
          <li className="navlink">Movies</li>
          <li className="navlink">New & Popular</li>
          <li className="navlink">My List</li>
        </ul>
      </div>
      <div className="flex items-center text-sm">
        <ul className="hidden sm:flex items-center space-x-4">
          <li className="navlink">{Icons["search"]}</li>
          <li className="navlink">{Icons["bell"]}</li>
          <li className="navlink">
            <img
              src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbixeApBW3-Nl2SD40H-NBGKmv-eneU73h6hBcupBZNKnIWKbGO_18HrX2MQBnAL0_JYocPH62UHd58T1ZGF-l0Yoil7sHE.png?r=f71"
              alt="user-acc"
              className="rounded-md"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export { Navbar };

export const Icons = {
  search: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#fff"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  ),
  bell: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#fff"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      />
    </svg>
  ),
};
