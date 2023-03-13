import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import {
  fadeIn,
  staggerContainer,
  planetVariants,
  textVariant2,
} from "@/pages/utils/motion";
import { startingFeatures } from "@/pages/api";

const GetStarted = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex 
            lg:flex-row flex-col gap-8
            `}
      >
        <motion.div
          variants={planetVariants("left")}
          className={`${styles.flexCenter} flex-1`}
        >
          <img
            src="../../get-started.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex flex-[0.75] justify-center flex-col font-normal text-[14px] text-secondary-white"
        >
          <motion.span>| How Metaversus Works ?</motion.span>
          <motion.h3
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className="mt-[8px] font-bold md:text-[30px] text-[30px] text-white"
          >
            Get Started with just a Few Clicks
          </motion.h3>
          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <div key={feature} className={`${styles.flexCenter} flex-row`}>
                <div
                  className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
                >
                  <p className="font-bold text-[20px] text-white">
                   0{index + 1}
                  </p>
                </div>
                <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
