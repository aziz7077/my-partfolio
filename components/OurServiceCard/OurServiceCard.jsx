import React from "react";
import s from "./OurServiceCard.module.scss";
import { motion } from "framer-motion";

const OurServiceCard = () => {
  return (
    <>
      <div className={s.first}>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.6 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.card}
        >
          <img src="/nextjs.svg" alt="nextjs" />
          <h1>next.js</h1>
        </motion.div>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.7 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.card}
        >
             <img src="/react.png" alt="react" />
          <h1>react/react-native</h1>
        </motion.div>
      </div>

      <div className={s.second}>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.8 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.card}
        >
       <img src="/js.png" alt="js" />
          <h1>JAVASCRIPT</h1>

        </motion.div>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.8 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.card}
        >
          <img src="/redux.svg" alt="redux" />
          <h1>redux</h1>
        </motion.div>
      </div>
    </>
  );
};

export default OurServiceCard;
