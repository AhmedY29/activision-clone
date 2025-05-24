import React, { useState } from "react";
import HomeNewsCard from "./HomeNewsCard";

function HomeLatestNews() {
  const [openCategory, setOpenCategory] = useState(false);
  const [category, setCategory] = useState("all");
  return (
    <>
      <div className="flex flex-col items-center justify-center  w-[78%] my-10 border-b border-white">
        <h1 className="text-4xl font-bold border-b border-white text-center pb-4 w-full uppercase">
          Latest News & Articles
        </h1>
        <div
          className={`categories flex flex-col lg:flex-row gap-5 lg:h-full  ${
            openCategory ? "h-full" : "h-15"
          }  overflow-hidden`}
        >
          <button
            onClick={() => setCategory("all")}
            className={`uppercase hidden lg:block font-bold hover:font-extrabold p-4 hover:scale-100  hover:bg-[#0768af80] hover:border-b-5 hover:border-blue-500 ${
              category == "all"
                ? "bg-[#0768af80] border-b-5 border-blue-500"
                : ""
            }  transition-all duration-250 cursor-pointer`}
          >
            All News
          </button>
          <button
            onClick={() => setOpenCategory(!openCategory)}
            className="uppercase lg:hidden block font-bold p-4 cursor-pointer"
          >
            All News
          </button>
          <button
            onClick={() => (setCategory("activision"), setOpenCategory(false))}
            className={`uppercase grayscale hover:grayscale-0 scale-105 hover:scale-100 font-bold p-4 ${
              category == "activision"
                ? "bg-[#0768af80] border-b-5 border-blue-500 grayscale-0"
                : ""
            }  hover:bg-[#0768af80] hover:border-b-5 hover:border-blue-500 transition-all duration-250 cursor-pointer`}
          >
            <img
              src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/activision-logo-small.svg"
              alt=""
              width={120}
            />
          </button>
          <button
            onClick={() => (
              setCategory("call-of-duty"), setOpenCategory(false)
            )}
            className={`uppercase grayscale hover:grayscale-0 scale-105 hover:scale-100 font-bold p-4 ${
              category == "call-of-duty"
                ? "bg-[#0768af80] border-b-5 border-blue-500 grayscale-0"
                : ""
            } hover:bg-[#0768af80] hover:border-b-5 hover:border-blue-500 transition-all duration-250 cursor-pointer`}
          >
            <img
              src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/cod-logo.svg"
              alt=""
              width={120}
            />
          </button>
          <button
            onClick={() => (
              setCategory("tony-hawks-pro-skater"), setOpenCategory(false)
            )}
            className={`uppercase grayscale hover:grayscale-0 scale-105 hover:scale-100 font-bold p-4 ${
              category == "tony-hawks-pro-skater"
                ? "bg-[#0768af80] border-b-5 border-blue-500 grayscale-0"
                : ""
            } hover:bg-[#0768af80] hover:border-b-5 hover:border-blue-500 transition-all duration-250 cursor-pointer`}
          >
            <img
              src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/THPS3+4_Logo.svg"
              alt=""
              width={120}
            />
          </button>
          <button
            onClick={() => (setCategory("crash"), setOpenCategory(false))}
            className={`uppercase grayscale hover:grayscale-0 scale-105 hover:scale-100 font-bold p-4 ${
              category == "crash"
                ? "bg-[#0768af80] border-b-5 border-blue-500 grayscale-0"
                : ""
            } hover:bg-[#0768af80] hover:border-b-5 hover:border-blue-500 transition-all duration-250 cursor-pointer`}
          >
            <img
              src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/crash-bandicoot-logo.png"
              alt=""
              width={120}
            />
          </button>
        </div>
      </div>
      <HomeNewsCard category={category} />
    </>
  );
}

export default HomeLatestNews;
