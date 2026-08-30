import React from "react";
import { Link } from "react-scroll";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="sm:px-4 sm:py-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold font-body text-white border border-cyan/20 bg-cyan/5 hover:bg-cyan hover:text-black hover:border-cyan transition-all duration-300 hover:shadow-cyanShadow cursor-pointer flex items-center gap-1 sm:gap-1.5 whitespace-nowrap">
      <Link spy={true} smooth={true} duration={500} offset={-120} to="contact">
        Hire Me
      </Link>
      <LuArrowDownRight className="text-xs sm:text-sm" />
    </button>
  );
};

export default NavbarBtn;
