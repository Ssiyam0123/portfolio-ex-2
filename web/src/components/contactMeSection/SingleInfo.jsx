const SingleInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-3 sm:gap-4 items-center justify-start">
      <Image className="text-xl sm:text-2xl text-cyan shrink-0" />
      <p className="text-sm sm:text-base text-slate-300 break-all">{text}</p>
    </div>
  );
};

export default SingleInfo;
