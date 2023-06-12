import React from "react";
import s from "./OurService.module.scss";
import { motion } from "framer-motion";
import OurServiceCard from "./../OurServiceCard/OurServiceCard";
const OurService = () => {
  return (
    <div className={s.container} id="services">
      <motion.div className={s.title_content}>
        <motion.h1
          initial="hidden"
          transition={{ duration: 0.5 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          мои навыки / my skills
        </motion.h1>
        <motion.h2
          initial="hidden"
          transition={{ duration: 0.7 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          разнообразие,<br />  <b>профессионализм.</b>
        </motion.h2>
        <motion.hr
          initial="hidden"
          transition={{ duration: 0.8 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        />
        <motion.p
          initial="hidden"
          transition={{ duration: 0.6 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          HTML , CSS , SASS ,SCSS , JAVASCRIPT, REACT , REACT-NATIVE , NEXT.JS,
          REDUX, REDUX-TOOLKIT, REACT-ROUTER, MATERIAL-UI,AXIOS, GIT, NPM , YARN,
          FRAMER-MOTION, ANTD,CSS-MODULES, EXPO, SWIPER, VERSEL ...
        </motion.p>
        <a href="#projects">
          <motion.button
            initial="hidden"
            transition={{ duration: 0.7 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            VIEW ALL
          </motion.button>
        </a>
      </motion.div>
      <motion.div
        initial="hidden"
        transition={{ duration: 0.6 }}
        whileInView="visible"
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1 },
        }}
        className={s.service_cards}
      >
        <OurServiceCard />
      </motion.div>
    </div>
  );
};

export default OurService;
