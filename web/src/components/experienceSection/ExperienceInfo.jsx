const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-extrabold text-5xl md:text-6xl text-cyan leading-none">{number}</p>
      <p className="font-bold text-xs text-slate-400 uppercase tracking-widest mt-2">{text}</p>
    </div>
  );
};

export default ExperienceInfo;
