import React from "react";
import HomeHero from "../components/Home-components/HomeHero";
import AboutHaveFun from "../components/About-components/AboutHaveFun";
import HomeHelp from "../components/Home-components/HomeHelp";
import HomeLatestNews from "../components/Home-components/HomeLatestNows";

function Home() {
  return (
    <section className="home-section flex flex-col w-full">
      <HomeHero />
      <div className="home-content flex flex-col items-center">
        <HomeLatestNews />
      </div>
      <HomeHelp />
      <AboutHaveFun />
    </section>
  );
}

export default Home;
