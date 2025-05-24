import React from "react";

function CareersOurStudios() {
  let studios = [
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691575580503_logo_treyarch-1666638610775.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691575949128_logo_infinityward-1666638609622.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576204660_logo_highmoon-studios-1666638608448.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576477943_logo_sledgehammer-1666639102046.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576731685_logo_raven-1666639100736.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691576931380_logo_atvi-shanghai-studio-1666639104346.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691577081915_logo_demonware-1666639103123.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691577163163_ss-logo-labeled-1670261765680.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/DLE-Logo-White2-1709023761211.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/central_tech_text_7201-1709023955618.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/Beenox3-1710257100788.png",
    },
  ];
  return (
    <section className="flex flex-col gap-20 my-20 justify-center w-[78%]">
      <h1 className="title-section text-3xl font-bold text-center uppercase">
        Our Studios
      </h1>
      <div className="careers-studio">
        <div className="studio grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
          {studios.map((item, index) => (
            <img
              className="cursor-pointer max-w-[80%]"
              key={index}
              src={item.img}
              alt="job-img"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CareersOurStudios;
