import React from "react";
import AllExperiences from "./AllExperiences";
import ExperienceText from "./ExperienceText";
import ExperienceTop from "./ExperienceTop";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ExperienceMain = () => {
  return (
    <section id="experience" className="py-20 max-w-[1200px] mx-auto px-6">
      <motion.div
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <ExperienceText />
      </motion.div>
      
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        <ExperienceTop />
      </motion.div>
      
      <div className="w-full h-[1px] my-10 bg-gradient-to-r from-transparent via-white/10 to-transparent hidden lg:block"></div>
      
      <div className="mt-8">
        <AllExperiences />
      </div>
    </section>
  );
};

export default ExperienceMain;
