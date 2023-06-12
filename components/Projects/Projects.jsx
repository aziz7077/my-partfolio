import React, { useState } from "react";
import s from "./Projects.module.scss";
import cn from "classnames";
import { motion } from "framer-motion";

import ProjectSlider from "../ProjectSlider/ProjectSlider";

const Projects = () => {
  return (
    <div className={s.projects} id="projects">
      <motion.h1
        initial="hidden"
        transition={{ duration: 0.5 }}
        whileInView="visible"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1 },
        }}
      >
        НАСЛАЖДАЙТЕСЬ МОИМИ <br /> ПОСЛЕДНИМИ <span>ПРОЕКТАМИ</span>
      </motion.h1>
      <motion.div className={s.work_tag}>
        <motion.hr
          initial="hidden"
          transition={{ duration: 0.7 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        />
        <motion.p
          initial="hidden"
          transition={{ duration: 0.5 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          Кликните чтобы посмотреть
        </motion.p>
        <motion.hr
          initial="hidden"
          transition={{ duration: 0.8 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        />
      </motion.div>
      <motion.div
      
        className={s.slider}
      >
        <ProjectSlider/>
      </motion.div>
    </div>
  );
};

export default Projects;
