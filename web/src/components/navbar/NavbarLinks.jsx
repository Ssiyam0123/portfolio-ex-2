import React from "react";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { closeMenu } from "../../state/menuSlice";
import { LuArrowDownRight } from "react-icons/lu";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  const dispatch = useDispatch();

  const handleLinkClick = () => {
    dispatch(closeMenu());
  };

  return (
    <ul className="flex lg:flex-row flex-col gap-6 lg:gap-8 text-white font-body text-center bg-transparent lg:bg-transparent backdrop-blur-2xl border border-white/10 lg:border-none rounded-2xl p-6 lg:p-0 w-full shadow-2xl lg:shadow-none transition-all duration-300">
      {links.map((link, index) => {
        return (
          <li key={index} className="relative group py-1">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-120}
              to={link.section}
              onClick={handleLinkClick}
              className="cursor-pointer text-slate-300 group-hover:text-cyan font-medium transition-all duration-300 text-sm tracking-wide uppercase"
            >
              {link.link}
            </Link>
            <div className="absolute -bottom-1.5 left-[50%] -translate-x-[50%] bg-cyan w-0 group-hover:w-full h-[2px] transition-all duration-300 rounded-full"></div>
          </li>
        );
      })}
      
      {/* Mobile-only Hire Me CTA inside drawer */}
      <li className="lg:hidden mt-2 pt-4 border-t border-white/5 flex justify-center">
        <button className="w-full py-2.5 rounded-xl text-xs font-semibold text-white border border-cyan/20 bg-cyan/5 hover:bg-cyan hover:text-black hover:border-cyan transition-all duration-300 hover:shadow-cyanShadow cursor-pointer flex items-center justify-center gap-1">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="contact"
            onClick={handleLinkClick}
            className="w-full text-center"
          >
            Hire Me
          </Link>
          <LuArrowDownRight className="text-sm shrink-0" />
        </button>
      </li>
    </ul>
  );
};

export default NavbarLinks;
