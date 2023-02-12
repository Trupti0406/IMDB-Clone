import React from "react";
import BannerImage from "./banner.jpg";
import "./Banner.css";
const Banner = () => {
  return (
    <>
      <img src={BannerImage} alt="Banner of most trending movie" />
      <div className="banner-head">
        <div className="bg-gray-900 text-white text-3xl py-9 bg-opacity-40 text-center font-bold">
          Megan
        </div>
      </div>
    </>
  );
};

export default Banner;
