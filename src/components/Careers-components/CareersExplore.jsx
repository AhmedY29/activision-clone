import React from "react";

function CareersExplore() {
  let cardInfo = [
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566582196_PenFactory-1665997299565.jpg",
      title: "Our Locations",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566670572_PenFactory2-1665997596145.jpg",
      title: "DE&I",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691566841083_EarlyCareersAP-1666643219491.jpg",
      title: "Early Careers",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Capture4-1716042103068.png",
      title: "Mission & Talent Brand ",
    },
  ];
  return (
    <section className="flex flex-col gap-20 my-20 justify-center w-[78%]">
      <h1 className="text-2xl font-bold">EXPLORE OUR WORLD</h1>
      <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cardInfo.map((item, index) => (
          <div
            key={index}
            className="card flex flex-col justify-between items-center pb-5  gap-4 rounded-2xl overflow-hidden bg-black shadow-xl hover:shadow transition-all duration-150 shadow-[#1b1b1b]"
          >
            <img
              src={item.img}
              height={212}
              className="object-contain w-full rounded-2xl"
              alt=""
            />
            <h1>{item.title}</h1>
            <button className=" border hover:bg-[#0768afb3]  p-2 px-3 uppercase w-[50%] rounded-4xl">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CareersExplore;
