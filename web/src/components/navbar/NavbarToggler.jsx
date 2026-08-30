import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../state/menuSlice";

const NavbarToggler = () => {
  const dispatch = useDispatch();
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <button
      className="lg:hidden flex items-center justify-center p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan/30 text-slate-300 hover:text-cyan transition duration-300 focus:outline-none cursor-pointer"
      onClick={() => dispatch(toggleMenu())}
      aria-label="Toggle menu"
    >
      {menuOpen ? <FaTimes className="text-sm sm:text-base" /> : <FaBars className="text-sm sm:text-base" />}
    </button>
  );
};

export default NavbarToggler;
