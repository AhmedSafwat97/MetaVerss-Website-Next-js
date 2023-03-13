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
import { newFeatures } from "@/pages/api";
import Image from "next/image";
const WhatsNew = () => {
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
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex flex-[0.75] justify-center flex-col font-normal text-[14px] text-secondary-white"
        >
          <motion.span>| What&apos;s new ?</motion.span>
          <motion.h3
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className="mt-[8px] font-bold md:text-[30px] text-[30px] text-white"
          >
            What&apos;s new about Metaversus ?
          </motion.h3>
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <div
                key={feature}
                className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]"
              >
                <div
                  className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
                >
                  <Image
                    width={1080}
                    height={1920}
                    src={feature.imgUrl}
                    alt="icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
                <h1 className="mt-[26px] font-bold text-[24px] leading-[30.24px] text-white">
                  Title {feature.title}
                </h1>
                <p className="flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={planetVariants("right")}
          className={`${styles.flexCenter} flex-1`}
        >
          <Image
            width={1080}
            height={1920}
            src="/whats-new.png"
            alt="get-started"
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
