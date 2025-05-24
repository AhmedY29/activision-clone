import React from "react";

// React Icon
import { IoMdArrowDropright } from "react-icons/io";

function HomeNewsCard(props) {
  console.log(props.category);
  let allNews = [
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

  let activision = [
    {
      title: "Stitch Returns in Season 04",
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/blog/activision/feature/elsewhere-blog-hero.jpg",
      date: "May 16, 2024",
      desc: "",
    },
    {
      title: "Holiday Gift Guide: Crash Bandicoot",
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/blog/activision/feature/CRASH-HOLIDAYGIFTGUIDE-TOUT.jpg",
      date: "Dec 02, 2020",
      desc: "Searching for the perfect Holiday season gift? Look no further with new Crash Bandicoot™ themed apparel, an art book, collectibles, and more that’s sure to please your Crash-crazy friends and family.",
    },
    {
      title: "Holiday Gift Guide: Call of Duty",
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/blog/activision/feature/COD-HOLIDAYGIFTGUIDE-TOUT.jpg",
      date: "Dec 02, 2020",
      desc: "Get ready to execute the mission with Call of Duty® and Black Ops Cold War themed performance and apparel items this holiday season. So don’t miss out! Here is some awesome merch for you and the Tier One Operators in your life.",
    },
    {
      title: "Activision Blizzard Veterans Day of Service: 2020",
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/blog/activision/feature/AGB-VDOS-2020-TOUT.jpg",
      date: "Dec 01, 2020",
      desc: "Activision Blizzard continues annual volunteer initiative amidst a global pandemic.",
    },
    {
      title: "Finding Oneself in Service of Others",
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/blog/activision/feature/VDAY-RAMSEY-TOUT.jpg",
      date: "Nov 11, 2020",
      desc: "While some arrive at their calling as if by decree, others have to hustle and often persevere to get there. Captain Ramsey Abdulrahim’s journey to finding and securing his true north was anything but a foregone conclusion.",
    },
  ];

  let callOfDuty = [
    {
      title:
        "OpenUSD Caldera Data Set is available for download for academic and non-commercial use",
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/body/code/CODE-MAM-GY6-TOUT.jpg",
      date: "Jul 30, 2024",
      desc: "Access Call of Duty: Warzone Caldera OpenUSD Data Set",
    },
    {
      title: "Stitch Returns in Season 04",
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/BO6-SEASON-04-NARRATIVE-TOUT.jpg",
      date: "May 20, 2025",
      desc: "Following a daring jailbreak conducted by his former adversary, Stitch’s clandestine resurrection is achieved and he returns to the fray with orders to crack the codes needed to uncover the Pantheon moles. Get the backstory on his intense rivalry turned uneasy alliance with Russell Adler and deploy as the menacing ex-Perseus agent arriving in the Season 04 Battle Pass.",
    },
    {
      title: "Support C.O.D.E. Military Appreciation Month with USAA",
      img: "https://www.activision.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
      date: "May 15, 2025",
      desc: "The Call of Duty Endowment Military Appreciation Month 2025 presented by USAA honors veterans with the C.O.D.E. United Force: Tracer Pack and the C.O.D.E. Got Your Six Event.",
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

  let TonySkater = [
    {
      title: "Tony Hawk’s Pro Skater 3 + 4: THPS Fest at El Rey Theatre",
      img: "https://www.activision.com/content/dam/atvi/tony-hawk/blog/chicago/el-rey-blog/THPS-ELREY-IMAGE-TOUT.jpg",
      date: "May 09, 2025",
      desc: "THPS Fest at the El Rey Theater in Los Angeles celebrated the return of Tony Hawk’s Pro Skater 3 + 4 by providing a closer look at some of the levels, skaters, and other new features coming to the game. See what the event was all about, including previously revealed content arriving at launch on July 11.",
    },

    {
      title: "THPS 3 + 4 Bird’s Eye View Preview — Waterpark",
      img: "https://www.activision.com/content/dam/atvi/tony-hawk/blog/chicago/launch-map-guide-watermark/THPS-WATERPARK-TOUT.jpg",
      date: "Mar 04, 2025",
      desc: "For the first time in 10 years, new maps are joining the original THPS 3 + 4 lineup, and Waterpark leads the charge. Read on for a first Bird’s Eye preview!",
    },
  ];
  let crash = [
    {
      title:
        "Get all fired up for the winter season with new heroes, maps, and more.",
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/blog/crash-bandicoot/CRASH-TEAM-RUMBLE-S3-TOUT.jpg",
      date: "Dec 07, 2023",
      desc: "",
    },

    {
      title: "Get a sneak peek at what’s to come in Season 2",
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/blog/crash-bandicoot/feature/AGB-CRASH-TR-S02-ANNOUNCEMENT-TOUT.jpg",
      date: "Sep 12, 2023",
      desc: "",
    },
    {
      title: "Crash Team Rumble is Free for a Limited Time",
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/blog/crash-bandicoot/feature/CRASH-TEAM-RUMBLE-FREE-TRIAL.jpg",
      date: "Aug 09, 2023",
      desc: "The team at Toys for Bob is excited for players everywhere to have a chance to jump into the fun from August 11 – August 14!",
    },
    {
      title: "Get N. Sane with Crash Team Rumble - Live Now",
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/blog/crash-bandicoot/feature/CRASH-LAVA-TOUT.jpg",
      date: "Jun 20, 2023",
      desc: "Experience a whole new way to Crash in the all-new 4v4, cross-platform Crash Team Rumble. Jump, slide, smash and bash your way across nine wild arenas with eight unique characters all in pursuit of the delectable Wumpa Fruit. This is Crash like you’ve never played before.",
    },
    {
      title:
        "Get Ready for an N. Sane Rumble: Pre-Order Crash Team Rumble Online and at Select Retailers!",
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/blog/crash-bandicoot/feature/CRASH-PRE-ORDER-TEAM-RUMBLE-RETAIL.jpg",
      date: "Mar 30, 2023",
      desc: "While we eagerly await players to participate in the Closed Beta* on April 20-24, we thought we’d share more details on what to expect in the coming weeks..",
    },
    {
      title: "Crash Team Rumble™ — Coming Soon to Xbox and PlayStation",
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/blog/crash-bandicoot/feature/CRASH-LAVA-TOUT.jpg",
      date: "Dec 09, 2022",
      desc: "Rise as a hero or unleash your inner villain as Crash, Dingodile, and other heroes and villains of the Crash universe head to the arena in the all-new, team-based, 4v4, cross-platform Crash Team Rumble™, releasing in 2023.",
    },
  ];
  return (
    <>
      <div className="cards grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-20 gap-y-5 justify-items-center mb-10 w-[78%]">
        {props.category == "all"
          ? allNews.map((item, index) => (
              <div
                key={index}
                className="card transition-all duration-200 bg-radial from-white/20 to-[#121212] overflow-hidden rounded-t-lg"
              >
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
            ))
          : props.category == "activision"
          ? activision.map((item, index) => (
              <div
                key={index}
                className="card transition-all duration-200 bg-radial from-white/20 to-[#121212] overflow-hidden rounded-t-lg"
              >
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
            ))
          : props.category == "call-of-duty"
          ? callOfDuty.map((item, index) => (
              <div
                key={index}
                className="card transition-all duration-200 bg-radial from-white/20 to-[#121212] overflow-hidden rounded-t-lg"
              >
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
            ))
          : props.category == "tony-hawks-pro-skater"
          ? TonySkater.map((item, index) => (
              <div
                key={index}
                className="card transition-all duration-200 bg-radial from-white/20 to-[#121212] overflow-hidden rounded-t-lg"
              >
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
            ))
          : props.category == "crash"
          ? crash.map((item, index) => (
              <div
                key={index}
                className="card transition-all duration-200 bg-radial from-white/20 to-[#121212] overflow-hidden rounded-t-lg"
              >
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
            ))
          : ""}
      </div>
      <button className=" border hover:bg-[#0768afb3] w-[50%] md:w-[40%] lg:w-[20%] p-2 px-3 uppercase rounded-4xl my-5">
        View All
      </button>
    </>
  );
}

export default HomeNewsCard;
