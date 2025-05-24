import React from "react";

function AboutGamesCard() {
  let gamesInfo = [
    {
      img: "https://www.activision.com/content/dam/atvi/support/contact-us/BO6-FOB.jpg",
      title: "Call of Duty Black Ops 6",
      rating: "Mature 17+",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/callofduty/cod-touchui/warzone/common/wz-boxart.jpg",
      title: "Call of Duty®: Warzone",
      rating: "Mature 17+",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/games/call-of-duty/call-of-duty-modern-warfare-iii/mwiii-boxart.jpg",
      title: "Call of Duty Modern Warfare III",
      rating: "Mature 17+",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/crash-bandicoot/crash-team-rumble/CTRumble_KEYART_SEASON2_1080X1350_AVAILABLE_NOW.jpg",
      title: "Crash Team Rumble",
      rating: "Everyone 10+",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/tony-hawk/tony-hawk-pro-skater-1-2/thps-1-2-boxart.png",
      title: "Tony Hawk's™ Pro Skater™ 1 + 2",
      rating: "TEEN",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/call-of-duty/mobile/codm-boxart.jpg",
      title: "Call of Duty®: Mobile",
      rating: "Mature 17+",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/sekiro/shadows-die-twice/sekiro-boxart.jpg",
      title: "Sekiro®: Shadows Die Twice",
      rating: "Mature 17+",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/games/game-details/spyro/reignited-trilogy/spyro-boxart.png",
      title: "SPYRO® Reignited Trilogy",
      rating: "Everyone 10+",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-5  w-full">
      {gamesInfo.map((item, index) => (
        <div key={index} className="cursor-pointer">
          <div className="img w-[15rem] h-[20rem] overflow-hidden rounded-2xl">
            <img
              className=" object-cover hover:scale-105 transition-all duration-200"
              src={item.img}
              width={300}
              height={250}
              alt="game-img"
            />
          </div>

          <h1 className="text-base font-bold">{item.title}</h1>
          <h1 className="text-gray-400 uppercase">{item.rating}</h1>
        </div>
      ))}
    </div>
  );
}

export default AboutGamesCard;
