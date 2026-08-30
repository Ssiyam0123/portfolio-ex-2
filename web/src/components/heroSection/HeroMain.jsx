import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 lg:pt-36 pb-12">
      <div className="flex lg:flex-row flex-col-reverse max-w-[1200px] mx-auto justify-between items-center relative px-6 w-full gap-12 lg:gap-0">
        <HeroText />
        <HeroPic />
      </div>
    </section>
  );
};

export default HeroMain;
