import React from "react";

function AboutTeamCard() {
  let team = [
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/rob-kostich.jpg",
      name: "Rob Kostich",
      role: "President",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/josh-taub.jpg",
      name: "Josh Taub",
      role: "Chief Operating Officer",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/suzie-carr.jpg",
      name: "Suzie Carr",
      role: "Chief People Officer",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/terri-durham.jpg",
      name: "Terri Durham",
      role: "SVP & General Counsel",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/dave-stohl.jpg",
      name: "David Stohl",
      role: "Head of Development, Call of Duty",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/patt-kelly.jpg",
      name: "Pat Kelly",
      role: "Head of Creative, Call of Duty",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/tyler-bahl.jpg",
      name: "Tyler Bahl",
      role: "SVP, Head of Marketing",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/natasha.jpg",
      name: "Natasha Tatarchuk",
      role: "SVP, Chief Technology Officer",
    },
    {
      img: "https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/leadership/matt-cox.jpg",
      name: "Matt Cox",
      role: "GM, Call of Duty",
    },
  ];
  return (
    <div className="team-cards grid grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-items-center">
      {team.map((item, index) => (
        <div key={index} className="card text-center ">
          <img
            className="rounded-full"
            src={item.img}
            width={217}
            alt="img-team"
          />
          <h1 className="font-bold">{item.name}</h1>
          <h1>{item.role}</h1>
        </div>
      ))}
    </div>
  );
}

export default AboutTeamCard;
