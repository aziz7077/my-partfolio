import React from "react";
import s from "./Footer.module.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <motion.div
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(109, 149, 252, 0.67) -53.12%,  rgba(109, 149, 252, 0) 30.39% )",
        }}
        animate={{
          backgroundImage: [
            "linear-gradient(0deg, rgba(109, 149, 252, 0.67) -10%,  rgba(109, 149, 252, 0) -10% )",
            "linear-gradient(0deg, rgba(109, 149, 252, 0.67) -53.12%,  rgba(109, 149, 252, 0) 40.39% )",
          ],
        }}
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {
            background:
              "linear-gradient(0deg, rgba(109, 149, 252, 0.67) -10%,  rgba(109, 149, 252, 0) -10% )",
            opacity: 0,
          },
          visible: {
            background:
              "linear-gradient(0deg, rgba(109, 149, 252, 0.67) -53.12%,  rgba(109, 149, 252, 0) 40.39% )",
            opacity: 1,
          },
        }}
        transition={{ duration: 2.3 }}
        className={s.back}
      >
        <div className={s.footer_container}>
          <motion.h1>muhammad-aziz</motion.h1>
          <motion.hr />
          <nav>
          </nav>
          <motion.p>
            "Технологии что делают бизнес" <br /> "Я делаю ваш бизнес проще"{" "}
            <br />
            "Сила инноваций в IT компании - <br /> Моя главная
            конкурентоспособное преимущество"
            <br /> "Современные технологии что меняют мир"
          </motion.p>
          <motion.nav>
            <a href="">
              <img src="/facebook.png" alt="facebook" />
            </a>
            <a href="">
              <img src="/instagram.png" alt="instagram" />
            </a>
            <a href="">
              <img src="/whatsapp.png" alt="whatsapp" />
            </a>
            <a href="">
              <img src="/linkedin.png" alt="linkedin" />
            </a>
          </motion.nav>
        </div>
      </motion.div>
    </>
  );
};

export default Footer;
