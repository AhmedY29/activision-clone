import React from "react";

function AboutHaveFun() {
  return (
    <div className="relative flex justify-center items-center gap-5">
      <div className="relative">
        <img
          className=""
          src="https://www.activision.com/content/dam/atvi/activision/atvi-touchui/activision/home/assets/joinus-banner-img-spyro.png"
          alt="banner"
        />
        <div className="lg:absolute top-0 flex justify-center mt-0 xl:mt-10 w-full z-10">
          <div className=" flex justify-between flex-col lg:flex-row items-center w-[78%] z-10 gap-10">
            <div className="text">
              <h1 className="text-5xl text-[#0768af] font-bold uppercase">
                Have Fun
              </h1>
              <h1 className="mb-4">Learn more about job opportunities</h1>
              <button className=" border hover:bg-[#0768afb3]  p-2 px-3 uppercase w-[50%] rounded-4xl">
                Join us
              </button>
            </div>
            <div className="">
              <h1 className="text-3xl font-bold uppercase my-2">Our Team </h1>
              <div className="flex gap-5 text-sm ">
                <ul className="list-disc flex flex-col gap-2 uppercase">
                  <li>Game Design</li>
                  <li>Art & Animation</li>
                  <li>Brand Management</li>
                  <li>Production</li>
                  <li>Quality Assurance</li>
                </ul>
                <ul className="list-disc flex flex-col gap-2 uppercase">
                  <li>Customer Support</li>
                  <li>Studio Operations</li>
                  <li>Programming</li>
                  <li>Finance & Accounting</li>
                  <li>Human Resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            background:
              "linear-gradient(60deg, #000000 0%, rgba(0, 0, 0, 0.863773) 11.91%, rgba(0, 0, 0, 0) 50%, #000000 68%)",
          }}
          className="mask absolute w-full h-full top-0"
        ></div>
      </div>
    </div>
  );
}

export default AboutHaveFun;
