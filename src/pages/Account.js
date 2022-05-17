import React from "react";
import { SavedShows } from "../components";

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ebff1e0f-5704-423f-b4c6-94914dabe25b/3da08d3b-8797-4590-b402-8ab52179e592/BD-en-20220509-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          className="w-full h-[400px] object-cover"
          alt="Razu Islam"
        />
        {/* Overlay */}
        <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px]"></div>
        <div className="absolute top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl">My Shows</h1>
        </div>
      </div>
      <SavedShows />
    </>
  );
};

export default Account;
