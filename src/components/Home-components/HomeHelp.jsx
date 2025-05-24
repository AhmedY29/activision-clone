import React from "react";

function HomeHelp() {
  return (
    <div className="flex flex-col lg:flex-row gap-3 justify-center  items-center border-t border-b border-white/35">
      <div className="text flex flex-col gap-5 w[30%] p-2 md:pl-40">
        <h1 className="uppercase font-bold text-2xl">We're here to help!</h1>
        <p className="text-lg font-medium">
          Get answers to frequently asked questions, check server status, and
          engage with a support expert
        </p>
        <button className=" border hover:bg-[#0768afb3] w-[50%]  p-2 px-3 uppercase rounded-4xl">
          Visit Support
        </button>
      </div>
      <div className="img ">
        <img
          className=""
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/support-banner-v3.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default HomeHelp;
