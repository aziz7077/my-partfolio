import React from "react";
import s from "./Sidebar.module.scss";
import cl from "classnames";
import { motion } from "framer-motion";

const SideBar = ({ showNav, setShowNav, openMenu, setOpenMenu }) => {
  const handleClick = () => {
    setShowNav(!showNav), setOpenMenu(!openMenu);
  };

  return (
    // Burger menu navbar
    <motion.div
      initial={{
        x: "100%",
        opacity: 0,
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["100%", "100%", "50%", "50%", "0"],
      }}
      whileInView={{
        x: 0,
        opacity: 1,
        borderRadius: 0,
        type: "spring",
        stiffness: 500,
      }}
      transition={{ delay: 0.2, duration: 1 }}
      className={showNav ? cl(s.sideNav, s.show) : s.sideNav}
    >
      <ul>
        <motion.li
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.7 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#home" onClick={handleClick}>
            Главная
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.5 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#aboutUs" onClick={handleClick}>
            Обо мне
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.4 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#services" onClick={handleClick}>
            Навыки
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -20, opacity: -100 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.2 }}
          whileHover={{ scale: 1.1, transition: "0" }}
        >
          <a href="#projects" onClick={handleClick}>
            Проекты
          </a>
        </motion.li>
        <motion.li
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          whileHover={{ scale: 1.1, transition: "0.4s" }}
        >
          <a href="#contacts" onClick={handleClick}>
            Контакты
          </a>
        </motion.li>
      </ul>
    </motion.div>
  );
};

export default SideBar;
