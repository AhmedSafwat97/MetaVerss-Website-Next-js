import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer, textVariant2 } from "@/pages/utils/motion";
import { exploreWorlds } from "@/pages/api";

const Explore = ({ id, imgUrl, title, index}) => {
  const [Active, setActive] = useState("world-5");
  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <motion.div className={`font-normal text-[14px] text-secondary-white text-center` }>
          <motion.span>| The World</motion.span>
          <motion.h1
          variants={textVariant2}
          initial="hidden"
          whileInView="show"
          className="mt-[8px] font-bold md:text-[64px] text-[48px] text-white"
          >Choose The World you want <br className="md:block hidden"/>To Explore
          </motion.h1>

          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
         <motion.div
         key={index}
         variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
         className={`relative ${
           Active === world.id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
         } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
         onClick={() => {
          setActive(world.id)
         }}
       >
         <img
           src={world.imgUrl}
           alt="planet-04"
           className="absolute w-full h-full object-cover rounded-[24px]"
         />
         {Active !== world.id ? (
           <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
             {world.title}
           </h3>
         ) : (
           <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
             <div
               className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
             >
               <img
                 src="/headset.svg"
                 alt="headset"
                 className="w-1/2 h-1/2 object-contain"
               />
             </div>
             <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
               Enter Metaverse
             </p>
             <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
               {world.title}
             </h2>
           </div>
         )}
       </motion.div>
          ))}
        </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Explore;
