import React from "react";
import SupportHero from "../components/Support-components/SupportHero";
import SupportCard from "../components/Support-components/SupportCard";

function Support() {
  return (
    <section className="support-section flex flex-col w-full">
      <div className="support-content flex flex-col items-center">
        <SupportHero />
        <SupportCard />
      </div>
    </section>
  );
}

export default Support;
