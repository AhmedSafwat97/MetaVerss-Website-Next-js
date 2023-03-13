import React from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, textVariant2 } from "@/utils/motion";
import Image from "next/image";

const World = () => {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <motion.div
          variants={fadeIn("left", "tween", 0.2, 1)}
          className="flex flex-[0.75] justify-center flex-col font-normal text-[14px] text-secondary-white text-center"
        >
          <motion.span>| People on the World</motion.span>
          <motion.h3
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className="mt-[8px] font-bold md:text-[30px] text-[30px] text-white"
          >
            Track friends around you and invite them to play together in the
            same world
          </motion.h3>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <Image
            width={1080}
            height={1920}
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <Image
              width={1080}
              height={1920}
              src="/people-01.png"
              alt="people"
              className="w-full h-full"
            />
          </div>

          <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <Image
              width={1080}
              height={1920}
              src="/people-02.png"
              alt="people"
              className="w-full h-full"
            />
          </div>

          <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5D6680]">
            <Image
              width={1080}
              height={1920}
              src="/people-03.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
