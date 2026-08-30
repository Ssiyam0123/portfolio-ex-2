import React from "react";

const AboutMeImage = () => {
  return (
    <div className="relative flex items-center justify-center p-4 group">
      {/* Subtle background glow */}
      <div className="absolute w-[220px] h-[220px] bg-cyan/10 rounded-full blur-3xl -z-10"></div>

      <div className="h-[360px] w-[260px] md:h-[420px] md:w-[300px] relative">
        {/* Main image container */}
        <div className="absolute inset-0 rounded-[32px] overflow-hidden border border-white/10 shadow-2xl z-10 bg-white/5">
          <img
            src="/images/about-me.jpg"
            alt="About Me Image"
            className="h-full w-full object-cover filter grayscale hover:grayscale-0 transition duration-700 ease-out"
          />
        </div>
        {/* Decorative dynamic background frame */}
        <div className="absolute -bottom-4 -right-4 inset-0 border-2 border-orange/20 rounded-[32px] -z-10 group-hover:-translate-x-1 group-hover:-translate-y-1 transition duration-500"></div>
      </div>
    </div>
  );
};

export default AboutMeImage;
