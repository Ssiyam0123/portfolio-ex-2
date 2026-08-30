import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { getSkills } from "../../api";
import { getRawIconComponent } from "./IconMapper";

const AllSkillsSM = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills()
      .then((data) => {
        if (data) setSkills(data);
      })
      .catch((err) => console.error("Error loading mobile skills:", err));
  }, []);

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        const IconComponent = getRawIconComponent(item.iconName);
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={item._id || index}
            className="flex flex-col items-center"
          >
            <IconComponent className="text-7xl text-orange" />
            <p className="text-center mt-4">{item.name}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;
