import React from "react";
import AllSkills from "./AllSkills";
import SkillsText from "./SkillsText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SkillsMain = () => {
  return (
    <section id="skills" className="py-20 max-w-[1200px] mx-auto px-6">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <SkillsText />
      </motion.div>
      <div className="mt-12 w-full">
        <AllSkills />
      </div>
    </section>
  );
};

export default SkillsMain;
