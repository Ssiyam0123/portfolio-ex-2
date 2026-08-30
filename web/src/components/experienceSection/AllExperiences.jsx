import React, { useEffect, useState } from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { getExperiences } from "../../api";

const AllExperiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getExperiences()
      .then((data) => {
        if (data) setExperiences(data);
      })
      .catch((err) => console.error("Error loading experiences:", err));
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={experience._id || index}>
            <SingleExperience experience={experience} />
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className="hidden lg:block"
              >
                <FaArrowRightLong className="text-3xl text-orange" />
              </motion.div>
            ) : (
              ""
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperiences;
