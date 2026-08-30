import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-4 w-[280px] p-6 bg-white/5 border border-white/5 rounded-2xl backdrop-blur-md shadow-xl">
      <p className="text-orange font-extrabold uppercase text-xl font-special text-center tracking-wider">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4 my-2">
        <ExperienceInfo number="8" text="Months" />
        <p className="font-bold text-3xl text-slate-600">-</p>
        <ExperienceInfo number="10+" text="Projects" />
      </div>
      <p className="text-center text-xs text-slate-400 leading-relaxed">
        Building high-performance, dynamic, and user-friendly web applications.
      </p>
    </div>
  );
};

export default ExperienceTopLeft;
