import React from "react";

// React Icon
import { IoMdArrowDropright } from "react-icons/io";

function HomeNewsCard() {
  let cardsInfo = [
    {
      title: "Stitch Returns in Season 04",
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
      date: "May 20, 2025",
      desc: "Following a daring jailbreak conducted by his former adversary, Stitch’s clandestine resurrection is achieved and he returns to the fray with orders to crack the codes needed to uncover the Pantheon moles. Get the backstory on his intense rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving in the Season 04 Battle Pass.",
    },
    {
      title: "Support C.O.D.E. Military Appreciation Month with USAA",
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
      date: "May 15, 2025",
      desc: "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack and the C.O.D.E. Got Your Six Event",
    },
    {
      title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
      img: "https://www.activision.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
      date: "May 09, 2025",
      desc: "THPS Fest at the El Rey Theater in Los Angeles celebrated the return of Tony Hawk’s Pro Skater 3 + 4 by providing a closer look at some of the levels, skaters, and other new features coming to the game. See what the event was all about, including previously revealed content arriving at launch on July 11.",
    },
    {
      title: "#TeamRICOCHET Season 03 Recap for Black Ops 6 and Warzone",
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/ricochet/bo6-season-03-ricochet/COD-BO6-RICOCHET-S03R-TOUT-A.webp",
      date: "May 07, 2025",
      desc: "#TeamRICOCHET Season 03 Recap and Update",
    },
    {
      title: "C.O.D.E. celebrates Military Appreciation Month with USAA",
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-2025-IMAGE-TOUT.webp",
      date: "May 01, 2025",
      desc: "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack, the C.O.D.E. Got Your Six Event, Kane Brown High Road Challenge, and more.",
    },
    {
      title: "Black Ops 6 Season 03 Reloaded: All the Details",
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/bo6/BO6-S03R-ANNOUNCEMENT-TOUT.webp",
      date: "Apr 29, 2025",
      desc: "Season 03 Reloaded brings two new Multiplayer maps, Directed Mode for Shattered Veil, and new updates to Verdansk. Get new Loadout items like the Vendetta Perk and the Ladra SMG and participate in new events and more when the mid-season update launches on May 1!",
    },
  ];
  return (
    <>
      <div className="cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-5 justify-items-center mb-10 w-[78%]">
        {cardsInfo.map((item, index) => (
          <div className="card transition-all duration-200 bg-radial from-white/20 to-[#121212] overflow-hidden rounded-t-lg">
            <div className="md:w-100 overflow-hidden ">
              <img
                src={item.img}
                alt="card-img"
                className="scale-110 transition-all duration-200"
              />
            </div>
            <div className="px-5 py-2">
              <h1 className="text-sm ">{item.date}</h1>
              <h1 className="text-title text-lg font-bold pb-3 border-b border-white/20 transition-all duration-200">
                {item.title}
              </h1>
              <p className="hidden text-sm my-2 transition duration-200">
                {item.desc}
              </p>
              <h1 className="read-more flex gap-1 items-center text-sm font-bold uppercase cursor-pointer py-3">
                Read more <IoMdArrowDropright className="text-lg" />
              </h1>
            </div>
          </div>
        ))}
      </div>
      <button className=" border hover:bg-[#0768afb3] w-[50%] md:w-[40%] lg:w-[20%] p-2 px-3 uppercase rounded-4xl my-5">
        View All
      </button>
    </>
  );
}

export default HomeNewsCard;
