import React, { useEffect, useRef, useState } from "react";
import s from "./Header.module.scss";
import cn from "classnames";
import { motion } from "framer-motion";
import Burger from "../BurgerMenu/BurgerMenu";
import SideBar from "../Sidebar/Sidebar";

const Header = () => {
  // Состояние - для анимирование бургер меню
  const [openMenu, setOpenMenu] = useState(true);

  // Состояние - для header (для цвета)
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  // Состояние - для burger menu
  const [showNav, setShowNav] = useState(false);

  // Состояние - для navbar (для линии)
  const [navBarPosition, setNavBarPosition] = useState({
    width: 0,
    left: 0,
  });

  // Состояние - для изменение цвета навигации
  const [navColor, setNavColor] = useState(null);

  // С помощю useRef получаем размер и позицию элемента
  const blockRefFirst = useRef(null);
  const blockRefSecond = useRef(null);
  const blockRefThree = useRef(null);
  const blockRefFour = useRef(null);
  const blockRefFive = useRef(null);

  // Жизненный цикл изменяет цвет и позицию линии
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsHeaderActive(false);
      }
      if (window.scrollY > 1) {
        setIsHeaderActive(!false);
        setNavColor(1);
        setNavBarPosition({
          width: blockRefFirst.current.offsetWidth,
          left: blockRefFirst.current.offsetLeft,
        });
      }
      if (window.scrollY >= 630) {
        setNavColor(2);
        setNavBarPosition({
          width: blockRefSecond.current.offsetWidth,
          left: blockRefSecond.current.offsetLeft,
        });
      }
      if (window.scrollY >= 1600) {
        setNavColor(3);
        setNavBarPosition({
          width: blockRefThree.current.offsetWidth,
          left: blockRefThree.current.offsetLeft,
        });
      }
      if (window.scrollY >= 2600) {
        setNavColor(4);
        setNavBarPosition({
          width: blockRefFour.current.offsetWidth,
          left: blockRefFour.current.offsetLeft,
        });
      }
      if (window.scrollY >= 4600) {
        setNavColor(5);
        setNavBarPosition({
          width: blockRefFive.current.offsetWidth,
          left: blockRefFive.current.offsetLeft,
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={s.container}>
        <header
          className={
            isHeaderActive
              ? cn(s.header, s.headerActive)
              : s.header
          }
        >
          <div className={s.header__content}>
            <a href="#">
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 10, duration: 2 }}
                whileHover={{ scale: 1.04, transition: "0.4s" }}
                className={s.header__logoTitle}
              >
                <h1 className={s.header__title}>muhammad-aziz</h1>
              </motion.div>
              {/* header__title */}
            </a>

            <motion.ul className={s.header__nav}>
              <motion.li
                ref={blockRefFirst}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 10, duration: 2 }}
              >
                <a
                  href="#"
                  style={navColor === 1 ? { color: "#6d95fc" } : null}
                >
                  Главная
                </a>
              </motion.li>
              <motion.li
                ref={blockRefSecond}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 10, duration: 2 }}
              >
                <a
                  href="#aboutUs"
                  style={navColor === 2 ? { color: "#6d95fc" } : null}
                >
                  Обо мне
                </a>
              </motion.li>
              <motion.li
                ref={blockRefThree}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 10, duration: 2 }}
              >
                <a
                  href="#services"
                  style={navColor === 3 ? { color: "#6D95FC" } : null}
                >
                  Навыки
                </a>
              </motion.li>
              <motion.li
                ref={blockRefFour}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 10, duration: 2 }}
              >
                <a
                  href="#projects"
                  style={navColor === 4 ? { color: "#6d95fc" } : null}
                >
                  Проекты
                </a>
              </motion.li>
              <motion.li
                ref={blockRefFive}
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 10, duration: 2 }}
              >
                <a
                  href="#contacts"
                  style={navColor === 5 ? { color: "#6D95FC" } : null}
                >
                  Контакты
                </a>
              </motion.li>
              <span
                className={s.animateLine}
                style={{
                  left: navBarPosition.left,
                  width: navBarPosition.width,
                }}
              ></span>
            </motion.ul>
            {/* header__nav */}

            <motion.div
              className={s.burgerMenu}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setShowNav(!showNav)}
            >
              <Burger
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                text="Invert"
                isHeaderActive={isHeaderActive}
                setIsHeaderActive={setIsHeaderActive}
                variantsTop={{
                  open: {
                    d: [
                      "M 36.512,64 C 36.512,64 31.574667,59.333333 29.156,57 26.737333,54.666667 22,50 22,50",
                      "M 30.675309,61.997011 C 30.675309,61.997011 27.029542,56.299823 25.716,48.687 24.402458,41.074177 25.284612,33.754 25.284612,33.754",
                      "M 23.468201,54.62812 C 23.468201,54.62812 23.937102,47.647804 29.011384,37.561483 34.085666,27.475162 38.953463,22.368743 38.953463,22.368743",
                      "M 18.674,42.74729 C 18.674,42.74729 27.488374,33.670956 38.632031,27.274699 49.775688,20.878442 60.991989,17.62628 60.991989,17.62628",
                      "M 22,34 C 22,34 40.666667,34.001 50,34.001 59.333333,34.001 78,34 78,34",
                    ],
                  },
                  closed: {
                    d: [
                      "M 22,34 C 22,34 40.666667,34.001 50,34.001 59.333333,34.001 78,34 78,34",
                      "M 18.674,42.74729 C 18.674,42.74729 27.488374,33.670956 38.632031,27.274699 49.775688,20.878442 60.991989,17.62628 60.991989,17.62628",
                      "M 23.468201,54.62812 C 23.468201,54.62812 23.937102,47.647804 29.011384,37.561483 34.085666,27.475162 38.953463,22.368743 38.953463,22.368743",
                      "M 30.675309,61.997011 C 30.675309,61.997011 27.029542,56.299823 25.716,48.687 24.402458,41.074177 25.284612,33.754 25.284612,33.754",
                      "M 36.512,64 C 36.512,64 31.574667,59.333333 29.156,57 26.737333,54.666667 22,50 22,50",
                    ],
                  },
                }}
                variantsMiddle={{
                  open: {
                    d: [
                      "M 78,50 22,50",
                      "M 69.79899,69.79899 30.20101,30.20101",
                      "M 50,78 50,22",
                      "M 30.20101,69.79899 69.79899,30.20101",
                      "M 22,50 78,50",
                    ],
                  },
                  closed: {
                    d: [
                      "M 22,50 78,50",
                      "M 30.20101,69.79899 69.79899,30.20101",
                      "M 50,78 50,22",
                      "M 69.79899,69.79899 30.20101,30.20101",
                      "M 78,50 22,50",
                    ],
                  },
                }}
                variantsBottom={{
                  open: {
                    d: [
                      "M 36.512,36 C 36.512,36 31.675667,40.666667 29.257,43 26.838333,45.333333 22,50 22,50",
                      "M 64.177416,24.338446 C 64.177416,24.338446 56.983312,22.572393 49.317883,22.905 41.652454,23.237607 33.958392,25.503899 33.958392,25.503899",
                      "M 74.594753,53.363542 C 74.594753,53.363542 73.317711,43.556093 70.530796,36.520591 67.743882,29.485088 60.599,22.000161 60.599,22.000161",
                      "M 53.280235,81.285906 C 53.280235,81.285906 63.361556,72.520643 69.626995,64.540091 75.892434,56.55954 80.105915,44.169553 80.105915,44.169553",
                      "M 22,66 C 22,66 40.666667,66.001 50,66.001 59.333333,66.001 78,66 78,66",
                    ],
                  },
                  closed: {
                    d: [
                      "M 22,66 C 22,66 40.666667,66.001 50,66.001 59.333333,66.001 78,66 78,66",
                      "M 53.280235,81.285906 C 53.280235,81.285906 63.361556,72.520643 69.626995,64.540091 75.892434,56.55954 80.105915,44.169553 80.105915,44.169553",
                      "M 74.594753,53.363542 C 74.594753,53.363542 73.317711,43.556093 70.530796,36.520591 67.743882,29.485088 60.599,22.000161 60.599,22.000161",
                      "M 64.177416,24.338446 C 64.177416,24.338446 56.983312,22.572393 49.317883,22.905 41.652454,23.237607 33.958392,25.503899 33.958392,25.503899",
                      "M 36.512,36 C 36.512,36 31.675667,40.666667 29.257,43 26.838333,45.333333 22,50 22,50",
                    ],
                  },
                }}
              />
            </motion.div>
            {/* Burger */}
          </div>
          {/* header_content */}
        </header>
      </div>
      {/* header_main */}

      {/* Burger menu navbar */}
      {showNav && (
        <SideBar
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          showNav={showNav}
          setShowNav={setShowNav}
        />
      )}
    </>
  );
};

export default Header;