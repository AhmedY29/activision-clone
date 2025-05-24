import React from "react";

function SupportCard() {
  let gamesInfo = [
    {
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/BO6-home-tile2.jpg",
      title: "Call of Duty Black Ops 6",
    },
    {
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/account-security-en-silver-tall-2x.jpg",
      title: "ACCOUNT & SECURITY",
    },
    {
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/WZV-home-tile.jpg",
      title: "CALL OF DUTY: WARZONE",
    },
    {
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/codmobile-module.jpg",
      title: "CALL OF DUTY: MOBILE",
    },
    {
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/THPS34-home-tile.png",
      title: "TONY HAWK'S PRO SKATER 3 + 4",
    },
    {
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWIII-home-tile-1c.png",
      title: "CALL OF DUTY: MODERN WARFARE III",
    },
    {
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MWII-tall-tile.jpg",
      title: "CALL OF DUTY: MODERN WARFARE II",
    },
    {
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/MW_module_001.jpg",
      title: "CALL OF DUTY: MODERN WARFARE",
    },
    {
      img: "https://support.activision.com/content/dam/atvi/support/home/modules/tall/cold-war-home-page-tile.jpg",
      title: "CALL OF DUTY: BLACK OPS COLD WAR",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  justify-items-center gap-x-12 gap-y-5 my-5  w-[78%]">
      {gamesInfo.map((item, index) => (
        <div key={index} className="cursor-pointer">
          <h1 className="text-white opacity-50 hover:opacity-100 text-base transition-all duration-200 my-4 uppercase">
            {item.title}
          </h1>
          <div className="img w-[23rem] h-[25rem] overflow-hidden ">
            <img
              className=" object-contain hover:scale-105 transition-all duration-200"
              src={item.img}
              alt="game-img"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SupportCard;
