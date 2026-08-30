import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import NavbarToggler from "./NavbarToggler";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-2 sm:px-4 max-w-[1200px] mx-auto w-full">
      <div className="flex justify-between items-center bg-black/60 border border-white/5 backdrop-blur-md p-3 sm:p-4 px-3 sm:px-6 md:px-8 rounded-2xl w-full shadow-2xl relative">
        <NavbarLogo />
        <div className={`${menuOpen ? "block" : "hidden"} lg:block absolute lg:relative top-[115%] lg:top-auto left-0 lg:left-auto right-0 lg:right-auto z-50 w-full lg:w-auto`}>
          <NavbarLinks />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden lg:block">
            <NavbarBtn />
          </div>
          <NavbarToggler />
        </div>
      </div>
    </header>
  );
};

export default NavbarMain;
