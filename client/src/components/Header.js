import React from "react";
import logo from "../images/logo.png"
import logoSmall from "../images/LogoSample_ByTailorBrands_3-removebg-preview.png"
import headshot from "../images/istockphoto-1034357476-612x612.jpg";
import { SearchIcon, HomeIcon, ChatAlt2Icon, CogIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="sticky z-50 shadow-md  bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center py-5 px-8 sm:px-16  md:px-20 lg:px-24 md:gap-4">
        <Link className="cursor-pointer" to="/">
          <img className="h-8 hidden md:inline-block" src={logo} alt="" />
          <img className="h-8 md:hidden" src={logoSmall} alt="" />
        </Link>

        {/* middle */}
        <div>
          <div className="bg-gray-100 md:flex gap-3 items-center  rounded-full sm:rounded-3xl py-2 px-2 sm:px-3 hidden">
            <SearchIcon className="h-6 cursor-pointer" />
            <input
              className="bg-transparent outline-none w-full "
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* right */}
        <div className="flex gap-2 justify-around sm:justify-evenly items-center">
          <div className="flex items-center gap-2">
            <Link className="cursor-pointer" to="/">
              <HomeIcon className="h-6" />
            </Link>

            <Link className="cursor-pointer" to="/">
              <ChatAlt2Icon className="h-6" />{" "}
            </Link>
          </div>
          <div
            className="flex
        gap-4 items-center "
          >
            <Link
              to="/profile"
              className="flex gap-2 items-center cursor-pointer"
            >
              <img
                className="h-8 w-8 object-cover rounded-full"
                src={headshot}
                alt=""
              />
              <p className="font-semibold hidden lg:inline-block">
                Mrityunjoy Bora
              </p>
            </Link>
            <Link
              to="/setting"
              className="flex gap-2 items-center cursor-pointer"
            >
              <CogIcon className="h-6 hidden sm:inline-block flex-shrink-0 " />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
