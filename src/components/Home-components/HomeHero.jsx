import React from "react";

// React Icon
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function HomeHero() {
  return (
    <div className="text-center">
      <video
        playsInline
        autoPlay
        loop
        muted
        className="h-screen w-full object-cover relative"
        src="https://www.callofduty.com/cdn/bo6/bo6-gameplay-reveal-trailer-atvi.mp4"
      ></video>
      <div className="bg-linear-90 from-black/80 to-transparent absolute top-0 w-full h-full"></div>
      <div className="absolute top-30 lg:top-50 flex flex-col justify-center gap-5 items-center p-10 ">
        <img
          src="https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blackops6/common/black-ops-6-full-logo.png"
          alt=""
        />
        <h1 className="text-3xl font-bold">
          Forced to go rogue. Hunted from Within.{" "}
        </h1>
        <div className="btns flex flex-col lg:flex-row gap-5 lg:gap-10 w-[80%]">
          <button className="cursor-pointer uppercase bg-[#0768af80] rounded-3xl p-3 w-full font-bold border-[#0768af] border-1 hover:bg-[#0768afb3] transition-all duration-100">
            Play with game pass
          </button>
          <button className=" border hover:bg-[#0768afb3]  p-3 w-full uppercase  rounded-4xl">
            visit site
          </button>
        </div>
      </div>
      <div className="div w-full flex justify-center">
        <div className="div absolute bottom-20 h-[25px] flex items-center p-5 gap-5 bg-black/55 rounded-2xl  ">
          <IoIosArrowRoundBack className="text-7xl opacity-50 hover:opacity-100 transition-all duration-200 cursor-pointer" />

          <span className="flex gap-4 items-center justify-center text-center w-full h-3 ">
            <span className="w-3 h-3 bg-white rounded-full cursor-pointer"></span>
            <span className="w-3 h-3 border border-white rounded-full cursor-pointer"></span>
            <span className="w-3 h-3 border border-white rounded-full cursor-pointer"></span>
            <span className="w-3 h-3 border border-white rounded-full cursor-pointer"></span>
          </span>
          <IoIosArrowRoundForward className="text-7xl opacity-50 hover:opacity-100 transition-all duration-200 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default HomeHero;
