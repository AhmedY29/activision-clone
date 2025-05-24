import React from "react";
import CareersHero from "../components/Careers-components/CareersHero";
import CareersJobs from "../components/Careers-components/CareersJobs";
import CareersExplore from "../components/Careers-components/CareersExplore";
import CareersVidSlider from "../components/Careers-components/CareersVidSlider";
import CareersOurStudios from "../components/Careers-components/CareersOurStudios";
import CareersApply from "../components/Careers-components/CareersApply";
import CareersFooter from "../components/Careers-components/CareersFooter";

function Careers() {
  return (
    <section className="careers-section flex flex-col justify-center items-center w-full">
      <CareersHero />
      <div className="careers-content flex flex-col items-center">
        <CareersJobs />
        <CareersExplore />
        <CareersVidSlider />
        <CareersOurStudios />
        <CareersApply />
        <CareersFooter />
      </div>
    </section>
  );
}

export default Careers;
