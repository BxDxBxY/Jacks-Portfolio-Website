import React from "react";
// import {Tilt} from 'react-tilt'
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { textVariant, fadeIn } from "./../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  const ServiceCard = ({ title, index, icon }) => {
    return (
      <div className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] px-12 py-5 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img
              src={icon}
              alt={title}
              className={"object-contain w-16 h-16"}
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </div>
    );
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h1 className={styles.sectionHeadText}>Overview.</h1>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary max-w-3xl text-[17px] leading-[30px]"
      >
        I'm a skilled sofware developer with experience in JavaScript, and
        expertise in frameworks like React, Next.js, and Three.js. I'm a quick
        learner and collaborate closely with clients to create efficient
        scalable and user friendly solutions that solve real-world problems.
        Let's work together to bring your ideas to life!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services?.map((service, i) => (
          <ServiceCard key={service.title} index={i} {...service}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
