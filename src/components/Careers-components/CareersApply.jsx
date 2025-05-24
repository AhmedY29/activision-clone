import React from "react";

// React Icon
import { FaRegHeart } from "react-icons/fa";

function CareersApply() {
  let jobsInfo = [
    {
      jobTitle: "Senior Gameplay Engineer - High Moon Studios",
      jobCategory: "Category :Programming/Software Engineering",
      jobId: "R024108",
      jobDesc:
        "Collaborate with designers and animators to create new gameplay systems and expand existing ones. Spearhead the development of innovative gameplay experiences. Proficiency in 3D math, related to game...",
    },
    {
      jobTitle: "Lead Analytics Engineer",
      jobCategory: "Data Analytics",
      jobId: "R024154",
      jobDesc:
        "You'll work closely with engineers, product managers, and analytics peers to build a foundational data layer that helps derive meaningful insights and recommendations, as well as furthering self-servi...",
    },
    {
      jobTitle: "Expert Animation Engineer - Infinity Ward",
      jobCategory: "Programming/Software Engineering",
      jobId: "R024307",
      jobDesc:
        "Infinity Ward is looking for a dedicated Expert Animation Engineer with a strong interest in crafting high fidelity, scalable animation systems and behaviors. Develop and upgrade workflows to allow th...",
    },
    {
      jobTitle: "Senior AI Animator - Infinity Ward",
      jobCategory: "Animation",
      jobId: "R022959",
      jobDesc:
        "Use motion capture and hand-keyed techniques to create high-fidelity NPC Animations that are genre-defining. A strong ability in hand-keyed animation. Strong Maya animation experience. A strong passio...",
    },
    {
      jobTitle: "Level Designer",
      jobCategory: "Game/Level Design",
      jobId: "R025221",
      jobDesc:
        "Work with design leadership, artists, and other level designers to deliver environments that embody the creative vision of the game. Work alongside other designers, artists, animators and engineers to...",
    },
  ];
  return (
    <section className="flex flex-col gap-3 my-20 justify-center w-[78%]">
      <h1 className="text-2xl font-bold">Be the First to Apply</h1>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {jobsInfo.map((item, index) => (
          <div className="apply-card flex flex-col gap-3 bg-white rounded-xl p-10 text-black">
            <div className="job-title flex justify-between text-lg font-bold">
              <h1 className=" hover:text-[#0768af] cursor-pointer">
                {item.jobTitle}
              </h1>
              <FaRegHeart className="text-2xl" />
            </div>
            <div className="jop-category flex gap-3 text-sm font-light">
              <h1>{item.jobCategory}</h1>
              <h2>{item.jobId}</h2>
            </div>
            <div className="job-desc">
              <p>{item.jobDesc}</p>
            </div>
            <button className="bg-[#2b2b2b] border border-[#3e8909] font-bold p-3 px-5 cursor-pointer hover:bg-[#3e8909] transition-all duration-100 w-40 text-white ">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareersApply;
