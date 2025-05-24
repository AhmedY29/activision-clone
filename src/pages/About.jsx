import React from "react";
import AboutHero from "../components/About-components/AboutHero";
import AboutTitles from "../components/About-components/AboutTitles";
import AboutTeamCard from "../components/About-components/AboutTeamCard";
import AboutGamesCard from "../components/About-components/AboutGamesCard";
import AboutStudios from "../components/About-components/AboutStudios";
import AboutHaveFun from "../components/About-components/AboutHaveFun";

function About() {
  return (
    <section className="about-section flex flex-col w-full">
      <div className="about-content flex flex-col items-center">
        <AboutHero />
        <AboutTitles title={"Our Mission"}>
          <p>
            At Activision, we strive to create the most iconic brands in gaming
            and entertainment. We’re driven by our mission to deliver unrivaled
            gaming experiences for the world to enjoy, together. Home to iconic
            franchises like Call of Duty®, Crash Bandicoot™, and Tony Hawk’s™
            Pro Skater™, we're a global leader in interactive entertainment. Our
            goal? Delight millions with innovative, fun, and engaging games.
            With a legacy of success, we're pushing boundaries with cutting-edge
            technology and inclusive practices. Join us in delivering
            unforgettable entertainment and seize the chance to level up your
            career.
          </p>
        </AboutTitles>
        <AboutTitles title={"Activate Your Future"}>
          <h1>
            We unite our global player community with epic entertainment,
            focusing on three core pillars:
          </h1>
          <h1>People - fostering talent and learning opportunities.</h1>
          <h1>Innovation - consistently pushing to iterate and evolve.</h1>
          <h1>
            Excellence - delivering high-quality games, consistently year in and
            year out.
          </h1>
          <h1>
            Join us at Activision, where inclusivity thrives, and together we
            shape the future of entertainment for our players. Explore open
            roles now!
          </h1>
        </AboutTitles>
        <AboutTitles title={"Our Values"}>
          <img
            src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/company/about/values/atvi-values.png"
            alt="values-img"
          />
          <button className="cursor-pointer uppercase bg-[#0768af80] rounded-3xl p-3 px-5 font-bold border-[#0768af] border-1 hover:bg-[#0768afb3] transition-all duration-100">
            Learn more
          </button>
        </AboutTitles>
        <AboutTitles title={"Our Leadership Team"}>
          <AboutTeamCard />
        </AboutTitles>
        <AboutTitles title={"Our Games"}>
          <AboutGamesCard />
        </AboutTitles>
        <AboutTitles title={"Our studios"}>
          <AboutStudios />
        </AboutTitles>
        <AboutHaveFun />
      </div>
    </section>
  );
}

export default About;
