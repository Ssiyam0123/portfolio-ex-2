import React, { useEffect, useState } from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { getProjects } from "../../api";

const ProjectsMain = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => {
        if (data) setProjects(data);
      })
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={project._id || index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
              github={project.github}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
