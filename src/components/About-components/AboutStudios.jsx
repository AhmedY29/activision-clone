import React from "react";

function AboutStudios() {
  let studioInfo = [
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_treyarch.png",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_infinityward.png",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_highmoon-studios.png",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_beenox.png",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_sledgehammer.png",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_raven.png",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo-toysforbob.png",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_atvi-shanghai-studio.png",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/studios/logo_demonware.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-5 w-full">
      {studioInfo.map((item, index) => (
        <div key={index} className="cursor-pointer">
          <img
            className=" object-cover opacity-50 hover:opacity-100 transition-all duration-200"
            src={item.img}
            alt="game-img"
          />
        </div>
      ))}
    </div>
  );
}

export default AboutStudios;
