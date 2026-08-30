const SingleContactSocial = ({ Icon, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xl h-12 w-12 border border-orange/40 hover:border-orange bg-orange/5 hover:bg-orange hover:text-[#030205] text-orange rounded-full flex items-center justify-center transition-all duration-300 shadow-md shadow-orange/10 hover:shadow-orange/20 cursor-pointer"
    >
      <Icon />
    </a>
  );
};

export default SingleContactSocial;
