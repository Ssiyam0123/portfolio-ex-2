import React from "react";
import AboutMeImage from "./AboutMeImage";
import AboutMeText from "./AboutMeText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <section id="about" className="py-20 max-w-[1200px] mx-auto px-6">
      <div className="flex lg:flex-row flex-col gap-12 lg:gap-16 justify-between items-center w-full">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="lg:w-1/2 w-full"
        >
          <AboutMeText />
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="lg:w-1/2 w-full flex justify-center"
        >
          <AboutMeImage />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMeMain;
