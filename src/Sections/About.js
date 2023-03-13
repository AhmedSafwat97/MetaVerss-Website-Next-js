import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import {
  fadeIn,
  staggerContainer,
  textContainer,
  textVariant,
  textVariant2,
} from "@/pages/utils/motion";

const About = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <motion.p className={`font-normal text-[14px] text-secondary-white`}>
          <motion.span>| About Metverse</motion.span>
        </motion.p>
        <motion.p
          variants={textVariant}
          className="mt-[8px] font-normal sm:text-[32px] 
        text-[20px] text-center text-secondary-white"
        >
          <span className="font-extrabold text-white mx-2">Metaverse</span>
          is new thing in the future , where you can enjoy the virtual world by
          feelings like it's really real, you can feel whhat you feel in this
          metaverse world , beacuse this really the
          <span className="font-extrabold text-white mx-2">
            madness of the metaverse
          </span>
          of today , using only
          <span className="font-extrabold text-white mx-2">VR</span>
          devices you can easily
          <span className="font-extrabold text-white mx-2">explore</span>
          the metaverse world you want , turn your dreams into reality . let's
          explore the madness of the metaverse by scrolling down
        </motion.p>
        <motion.img
        variants={textVariant2}
        src="../../arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain 
        mt-[25px]
        "
        />
      </motion.div>
    </section>
  );
};

export default About;
