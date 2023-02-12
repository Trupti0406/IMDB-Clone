import React from "react";
import BannerImage from "./banner.jpg";

const Movies = () => {
  return (
    <div className="mt-8">
      <div className="mb-8 font-bold text-2xl text-center">Trending Movies</div>
      <div className="flex justify-center flex-wrap gap-4">
        <div className="bg-[url(https://image.tmdb.org/t/p/original//dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg)] w-[160px] h-[30vh] md:w-[180px] md:h-[40vh] rounded-xl hover:scale-110 duration-300 cursor-pointer bg-center bg-cover flex items-end">
          <div className="font-bold text-white bg-gray-900 bg-opacity-80 p-2 text-center w-full rounded-b-xl">
            M3GAN
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;
