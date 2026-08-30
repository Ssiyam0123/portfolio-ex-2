import React from "react";

const ExperienceTopRight = () => {
  return (
    <div className="w-full max-w-[280px] lg:max-w-none lg:w-[30%] xl:w-[25%] bg-white/5 border border-white/5 p-6 rounded-2xl backdrop-blur-md shadow-xl">
      <p className="text-sm text-center text-slate-400 leading-relaxed">
        I specialize in{" "}
        <span className="font-bold text-white">
          React and modern JavaScript
        </span>
        , leveraging best practices to create scalable and maintainable
        solutions. <br className="my-2" />
        My experience spans working on diverse projects, from small business
        websites to{" "}
        <span className="font-bold text-white">complex front-end systems</span>,
        always aiming for clean code and exceptional user experiences.
      </p>
    </div>
  );
};

export default ExperienceTopRight;
