import React from "react";

const SingleSkill = ({ imgSvg, text }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-white/5 border border-white/5 hover:border-cyan/35 rounded-2xl p-5 w-[110px] h-[110px] md:w-[130px] md:h-[130px] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cyanShadow group relative overflow-hidden cursor-pointer">
      <div className="text-4xl md:text-5xl text-slate-400 group-hover:text-cyan transition duration-300 mb-3">
        {imgSvg}
      </div>
      <p className="text-slate-300 group-hover:text-white font-semibold text-xs tracking-wide uppercase text-center transition duration-300">
        {text}
      </p>
      {/* Ambient background glow hover accent */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
    </div>
  );
};

export default SingleSkill;
