import React from "react";
import AboutHaveFun from "../components/About-components/AboutHaveFun";
import HomeHelp from "../components/Home-components/HomeHelp";
import HomeLatestNews from "../components/Home-components/HomeLatestNews";
import HomeHeroCallOfDuty from "../components/Home-components/HomeHeroCallOfDuty";
import HomeHeroTony from "../components/Home-components/HomeHeroTony";
import HomeHeroCrash from "../components/Home-components/HomeHeroCrash";
import HomeHeroCODM from "../components/Home-components/HomeHeroCODM";
import HomeHeroTony2 from "../components/Home-components/HomeHeroTony2";

// React Icon
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";

function Home() {
  return (
    <section className="home-section flex flex-col  ">
      <div className="heroes">
        <HomeHeroCallOfDuty className=" w-screen" />
        {/* <HomeHeroTony className=" w-screen" />
        <HomeHeroCrash className="w-screen" />
        <HomeHeroCODM className="w-screen" />
        <HomeHeroTony2 className="w-screen" /> */}
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
      <div className="home-content flex flex-col items-center">
        <HomeLatestNews />
      </div>
      <HomeHelp />
      <AboutHaveFun />
    </section>
  );
}

export default Home;
