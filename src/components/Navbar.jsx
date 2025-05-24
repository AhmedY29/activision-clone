import React, { useState } from "react";
import { Link } from "react-router";

// React Icon
import { IoMenu } from "react-icons/io5";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  let navItems = [
    {
      pageName: "Home",
      path: "/",
    },
    {
      pageName: "About",
      path: "/about",
    },
    {
      pageName: "Careers",
      path: "/careers",
    },
    {
      pageName: "Support",
      path: "/Support",
    },
  ];
  return (
    <>
      <nav className="nav-section flex justify-center items-center w-full bg-black/70 border-b-1 border-white fixed top-0 z-10">
        <div className="nav-content flex justify-between items-center w-[78%]">
          <div className="logo-img flex gap-5 items-center">
            <div className="img w-[120px]">
              <Link to={"/"}>
                <img
                  src="https://cdn.phenompeople.com/CareerConnectResources/ACPUUS/images/1691550348681_v-1673519590327-header_logo.png"
                  alt="activision-logo"
                  className=""
                />
              </Link>
            </div>

            <ul className="hidden lg:flex gap-10">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-white uppercase font-bold opacity-65 hover:opacity-100"
                >
                  <li>{item.pageName}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="nav-btns hidden lg:flex gap-3">
            <button className="cursor-pointer uppercase bg-[#0768af80] rounded-3xl p-1 px-2 border-[#0768af] border-1 hover:border-3 hover:bg-[#0768afb3] transition-all duration-100">
              Sign up
            </button>
            <button className="cursor-pointer uppercase">Login</button>
          </div>
          <IoMenu
            className=" lg:hidden text-3xl cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
      </nav>
      {openMenu ? (
        <div className="text-center z-10 fixed top-13 w-full bg-black  p-4 border-b">
          <ul className=" flex flex-col gap-5 border-b border-white/40 pb-2 ">
            {navItems.map((item, index) => (
              <Link
                onClick={() => setOpenMenu(false)}
                key={index}
                to={item.path}
                className="text-white uppercase font-bold opacity-65 hover:opacity-100"
              >
                <li>{item.pageName}</li>
              </Link>
            ))}
          </ul>
          <div className="nav-btns flex flex-col  gap-3 mt-2">
            <button className="cursor-pointer uppercase bg-[#0768af80] rounded-3xl p-1 px-2 border-[#0768af] border-1 hover:border-3 hover:bg-[#0768afb3] transition-all duration-100">
              Sign up
            </button>
            <button className="cursor-pointer uppercase">Login</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
