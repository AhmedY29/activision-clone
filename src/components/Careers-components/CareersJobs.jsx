import React from "react";

function CareersJobs() {
  let jobs = [
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem11-1710455685013.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem12-1710455727924.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem13-1710455855824.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem14-1710456001039.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem15-1710456129634.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem16-1710456257523.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem17-1710456307621.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem18-1710456364531.png",
    },
    {
      img: "https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/EVPIconssubitem19-1710456408214.png",
    },
  ];
  return (
    <section className="flex flex-col gap-20 my-20 justify-center w-[78%]">
      <h1 className="title-section text-3xl font-bold text-center">
        START YOUR GAME CHANGING CAREER
      </h1>
      <div className="careers-jobs">
        <div className="job grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((item, index) => (
            <img
              className="cursor-pointer"
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

export default CareersJobs;
