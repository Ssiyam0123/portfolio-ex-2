import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  FaTools
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const iconMap = {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDocker,
  IoLogoJavascript,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  RiTailwindCssFill
};

export const getIconComponent = (iconName) => {
  const IconComp = iconMap[iconName];
  return IconComp ? <IconComp /> : <FaTools />;
};

export const getRawIconComponent = (iconName) => {
  return iconMap[iconName] || FaTools;
};
