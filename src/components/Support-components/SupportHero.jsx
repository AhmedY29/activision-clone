import React from "react";

// React Icon
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";

function SupportHero() {
  return (
    <div>
      <div className="hero-banner relative  flex items-center  ">
        <img
          src="https://support.activision.com/content/dam/atvi/support/home/carousel/hero/BO6_S3R_hero.jpg"
          alt="hero-banner"
          className=" relative h-[70vh] object-cover"
        />
        <RiArrowLeftSLine className=" hidden md:block absolute left-0 text-8xl opacity-50 hover:opacity-100 hover:shadow-2xl " />
        <div className="game-banner absolute p-5 md:ml-40 flex flex-col gap-5">
          <img
            className=" w-70 lg:w-[100%]"
            src="https://support.activision.com/content/dam/atvi/support/home/carousel/hero/BO6-S3R-logo-lockup.png"
            alt=""
          />
          <div className="game flex gap-3 items-center">
            <img
              src="https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_game.png"
              alt=""
            />
            <h1 className="uppercase hover:scale-105 transition-all duration-200">
              CHECK OUT WHAT'S NEW IN SEASON 03 RELOADED
            </h1>
          </div>
          <div className="game flex gap-3 items-center">
            <img
              src="https://support.activision.com/content/dam/atvi/support/home/carousel/icons/icon_support.png"
              alt=""
            />
            <h1 className="uppercase hover:scale-105 transition-all duration-200">
              Browse the support page
            </h1>
          </div>
        </div>
        <RiArrowRightSLine className=" hidden md:block absolute right-0 text-8xl opacity-50 hover:opacity-100 hover:shadow-2xl " />
        <span className="flex gap-4 items-center justify-center absolute bottom-0 text-center w-full h-10">
          <span className="w-3 h-3 border border-white rounded-full cursor-pointer"></span>
          <span className="w-3 h-3 border border-white rounded-full cursor-pointer"></span>
          <span className="w-3 h-3 border border-white rounded-full cursor-pointer"></span>
          <span className="w-3 h-3 bg-white rounded-full cursor-pointer"></span>
        </span>
      </div>
    </div>
  );
}

export default SupportHero;
