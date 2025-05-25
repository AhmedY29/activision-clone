import React from "react";

// React Icon
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function HomeHeroTony() {
  return (
    <div className="text-center w-full">
      <video
        playsInline
        autoPlay
        loop
        muted
        className="h-screen w-screen object-cover relative"
        src="https://video.activision.com/activision/cdn/videos/THPS3+4_Reveal_15_Channel_ESRB_16x9_ATVI_Header.mp4"
      ></video>
      {/* <div className="bg-linear-90 from-black/80 to-transparent absolute top-0 w-full h-full"></div> */}
      <div className="absolute top-10 flex flex-col justify-center gap-5 items-center p-10 ">
        <img
          src="https://www.activision.com/content/dam/atvi/tony-hawk/chicago/common/PC_LOGO_PRIMARY_NEG_241121.svg"
          className="w-40"
          alt=""
        />
        <h1 className="text-3xl font-bold">
          Available for Xbox Series X|S, Xbox One, PlayStation 4 and 5, Steam,
          Battle.net, Microsoft PC Store, and Nintendo Switch.
        </h1>
        <div className="btns flex flex-col lg:flex-row gap-5 lg:gap-10 w-[80%]">
          <button className="cursor-pointer uppercase bg-[#0768af80] rounded-3xl p-3 w-full font-bold border-[#0768af] border-1 hover:bg-[#0768afb3] transition-all duration-100">
            Pre-Order Now
          </button>
          <button className=" border hover:bg-[#0768afb3]  p-3 w-full uppercase  rounded-4xl">
            visit site
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeHeroTony;
