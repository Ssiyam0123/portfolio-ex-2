import React, { useEffect, useState } from "react";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { getSkills } from "../../api";
import { getIconComponent } from "./IconMapper";

const AllSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills()
      .then((data) => {
        if (data) setSkills(data);
      })
      .catch((err) => console.error("Error loading skills:", err));
  }, []);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 min-[370px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6 justify-center justify-items-center max-w-[1100px] mx-auto px-4">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index % 8}`)} // Responsive delay animation loop
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              key={item._id || index}
              className="w-full flex justify-center"
            >
              <SingleSkill
                text={item.name}
                imgSvg={getIconComponent(item.iconName)}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;
