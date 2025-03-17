import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center w-[90%] mx-auto">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I'm a passionate software developer with a love for creating dynamic and responsive web applications. With a strong foundation in JavaScript and React, I enjoy building user-friendly interfaces and solving complex problems. When I'm not coding, you can find me exploring new technologies, reading tech blogs, or contributing to open-source projects. Let's build something amazing together!
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
