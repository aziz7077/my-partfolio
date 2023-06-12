import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import s from "./BurgerMenu.module.scss";

const BurgerMenu = ({
  openMenu,
  setOpenMenu,
  setIsHeaderActive,
  variantsTop,
  variantsMiddle,
  variantsBottom,
}) => {
  const controls = useAnimation();

 useEffect(() => {
  controls.start(openMenu ? "open" : "closed");
 },[openMenu])
 
  return (
    <button
      className={s.burger}
      onClick={() => {
        setOpenMenu(!openMenu);
        setIsHeaderActive(true);
      }}
    >
      <svg viewBox="0 0 100 100" width="55px" height="80px">
        <motion.path
          className={s.burger__line}
          d={variantsTop.closed.d[0]}
          animate={controls}
          variants={variantsTop}
          transition={{
            ease: "linear",
            duration: 0.35,
          }}
        />
        <motion.path
          className={s.burger__line}
          d={variantsMiddle.closed.d[0]}
          animate={controls}
          variants={variantsMiddle}
          transition={{
            ease: "linear",
            duration: 0.35,
          }}
        />
        <motion.path
          className={s.burger__line}
          d={variantsBottom.closed.d[0]}
          animate={controls}
          variants={variantsBottom}
          transition={{
            ease: "linear",
            duration: 0.35,
          }}
        />
      </svg>
    </button>
  );
};

export default BurgerMenu;
