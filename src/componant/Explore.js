import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer} from "@/pages/utils/motion";
import ExploreCard from "./ExploreCard";
import { exploreWorlds } from "@/pages/api";

const Explore = () => {
  return (
    <section className={`${styles.paddings}`}
    id="explore"
    >
      <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false , amount : 0.25}}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
>

      </motion.div>
    </section>
  );
}

export default Explore;
