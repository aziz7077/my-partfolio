import React, { useRef } from "react";
import s from "./Connect.module.scss";
import ConnectForm from "./../ConnectForm/ConnectForm";
import { motion, useAnimationFrame } from "framer-motion";

const Connect = () => {
  return (
    <div className={s.container} id="contacts">
      <motion.div className={s.connect}>
        <motion.h1
          initial="hidden"
          transition={{ duration: 0.5 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
        >
          СВЯЗАТЬСЯ <b> СО МНОЙ</b>
        </motion.h1>
        <motion.hr
          initial="hidden"
          transition={{ duration: 0.5 }}
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
          Обращайтесь ко мне, и я помогу <br/> вам создать превосходный продукт   <br/> и
        добиться успеха в вашем бизнесе!
        </motion.p>
        <ul>
          <motion.li
            initial="hidden"
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            <img src="/phone.png" alt="phone" />
            <h2>
              Контакты <b>+996 554 505 449</b>
            </h2>
          </motion.li>
          <motion.li
            initial="hidden"
            transition={{ duration: 0.5 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            <img src="/email.png" alt="email" />
            <h2>
              Gmail <b>azizchik261@gmail.com</b>
            </h2>
          </motion.li>
        </ul>
      </motion.div>

      <motion.div className={s.form}>
        <ConnectForm />
      </motion.div>
    </div>
  );
};

export default Connect;
