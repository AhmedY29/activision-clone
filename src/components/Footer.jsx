import React from "react";
import { Link } from "react-router";

// React Icons
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function Footer() {
  let popular = [
    {
      title: "CALL OF DUTY",
    },
    {
      title: "TONY HAWK PRO SKATER",
    },
    {
      title: "CRASH BANDICOOT",
    },
    {
      title: "SPYRO",
    },
    {
      title: "SEKIRO",
    },
  ];

  let company = [
    {
      title: "PRESS",
    },
    {
      title: "RESEARCH",
    },
    {
      title: "ACTIVISION BLIZZARD",
    },
    {
      title: "CONTACT US",
    },
  ];

  let legal = [
    {
      title: "TERMS OF USE",
    },
    {
      title: "PRIVACY POLICY",
    },
    {
      title: "COOKIE POLICY",
    },
    {
      title: "ONLINE SAFETY",
    },
    {
      title: "APPLICANT PRIVACY POLICY",
    },
  ];
  return (
    <footer className="footer-section flex justify-center items-center w-full ">
      <div className="footer-content flex flex-col  gap-6  p-5 w-[78%]">
        <div className="footer-links-logo flex flex-col lg:flex-row justify-between ">
          <div className="footer-logo flex-col">
            <img
              src="https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691550348681_v-1673519590327-header_logo.png"
              alt="footer-logo"
            />
            <div className="follow-us flex flex-col gap-3">
              <h1 className="text-2xl">Follow us</h1>
              <div className="social-btns flex gap-4">
                <FaFacebookF className="border-1 border-white rounded-4xl text-white w-11 h-11 p-2.5 cursor-pointer" />
                <FaXTwitter className="border-1 border-white rounded-4xl text-white w-11 h-11 p-2.5 cursor-pointer" />
                <FaLinkedinIn className="border-1 border-white rounded-4xl text-white w-11 h-11 p-2.5 cursor-pointer" />
                <FaYoutube className="border-1 border-white rounded-4xl text-white w-11 h-11 p-2.5 cursor-pointer" />
                <RiInstagramFill className="border-1 border-white rounded-4xl text-white w-11 h-11 p-2.5 cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="links flex flex-col lg:flex-row gap-10">
            <div className="popular-links flex flex-col gap-3">
              <h1 className=" font-medium">POPULAR GAMES</h1>
              <ul className="flex flex-col  ml-6">
                {popular.map((item, index) => (
                  <Link
                    key={index}
                    className="text-white uppercase font-bold text-sm opacity-65 hover:opacity-100"
                  >
                    <li>{item.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="company-links flex flex-col gap-3">
              <h1 className=" font-medium">COMPANY</h1>
              <ul className="flex flex-col ml-6">
                {company.map((item, index) => (
                  <Link
                    key={index}
                    className="text-white uppercase text-sm font-bold opacity-65 hover:opacity-100"
                  >
                    <li>{item.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="legal-links flex flex-col gap-3">
              <h1 className=" font-medium">LEGAL</h1>
              <ul className="flex flex-col ml-6">
                {legal.map((item, index) => (
                  <Link
                    key={index}
                    className="text-white uppercase text-sm font-bold opacity-65 hover:opacity-100"
                  >
                    <li>{item.title}</li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copy border-t-1 border-[#0768af]">
          <h1 className="text-lg font-light">
            COPYRIGHT © 2023 ACTIVISION PUBLISHING,INC.
          </h1>
          <h1 className="flex items-center gap-2 uppercase text-2xl">
            Made By{" "}
            <a
              className="font-bold text-[#0768af] hover:text-[#0768afb3] transition-all duration-100"
              href="https://github.com/AhmedY29"
              target="_blank"
            >
              Ahmed Alsaleh
            </a>
          </h1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
