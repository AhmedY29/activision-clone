import React from "react";

// React icon
import { BsFillPauseCircleFill } from "react-icons/bs";
function CareersHero() {
  return (
    <section className="careers-hero w-full flex justify-center items-center">
      <video
        autoPlay
        playsInline
        muted
        loop
        className="h-screen w-full object-cover relative"
        src="https://assets.phenompeople.com/CareerConnectResources/prod/ACPUUS/videos/EVPCareersiteherovideo5-1710271231185.mp4"
      ></video>
      <BsFillPauseCircleFill className="absolute top-12 right-0 text-6xl m-4 cursor-pointer " />
      <button className="bg-[#2b2b2b] border border-[#3e8909] uppercase p-3 px-5 cursor-pointer hover:bg-[#3e8909] transition-all duration-100 absolute ">
        Search Jobs
      </button>
    </section>
  );
}

export default CareersHero;
