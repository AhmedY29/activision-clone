import React from "react";
import HomeNewsCard from "./HomeNewsCard";

function HomeLatestNews() {
  return (
    <>
      <div className="flex flex-col items-center justify-center  w-[78%] my-10 border-b border-white">
        <h1 className="text-4xl font-bold border-b border-white text-center pb-4 w-full uppercase">
          Latest News & Articles
        </h1>
        <div className="categories flex gap-5 ">
          <button className="uppercase font-bold p-4 bg-[#0768af80] border-b-5 border-blue-500 transition-all duration-250">
            All News
          </button>
          <button className="uppercase grayscale hover:grayscale-0 scale-105 hover:scale-100 font-bold p-4 hover:bg-[#0768af80] hover:border-b-5 hover:border-blue-500 transition-all duration-250">
            <img
              src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo-small.svg"
              alt=""
              width={120}
            />
          </button>
          <button className="uppercase grayscale hover:grayscale-0 scale-105 hover:scale-100  font-bold p-4 hover:bg-[#0768af80] hover:border-b-5 hover:border-blue-500 transition-all duration-250">
            <img
              src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-logo.svg"
              alt=""
              width={120}
            />
          </button>
          <button className="uppercase grayscale hover:grayscale-0 scale-105 hover:scale-100 font-bold p-4 hover:bg-[#0768af80] hover:border-b-5 hover:border-blue-500 transition-all duration-250">
            <img
              src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/THPS3+4_Logo.svg"
              alt=""
              width={120}
            />
          </button>
          <button className="uppercase grayscale hover:grayscale-0 scale-105 hover:scale-100 font-bold p-4 hover:bg-[#0768af80] hover:border-b-5 hover:border-blue-500 transition-all duration-250">
            <img
              src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/crash-bandicoot-logo.png"
              alt=""
              width={120}
            />
          </button>
        </div>
      </div>
      <HomeNewsCard />
    </>
  );
}

export default HomeLatestNews;
