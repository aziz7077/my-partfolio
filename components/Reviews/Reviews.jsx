import React from "react";
import s from "./Reviews.module.scss";
import SliderReviews from "../SliderReviews/SliderReviews";
import { info } from "@/constants/reviews";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <motion.section className={s.reviews_section}>
      <div className={s.reviews_section_block}>
        <motion.div className={s.reviews_section_block_header}>
          <motion.h1
            initial="hidden"
            transition={{ duration: 0.6 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            ЧТО ГОВОРЯТ <br /> <span style={{ color: "#6D95FC" }}>НАШИ</span>{" "}
            КЛИЕНТЫ?
          </motion.h1>
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
            transition={{ duration: 0.6 }}
            whileInView="visible"
            variants={{
              hidden: { scale: 0 },
              visible: { scale: 1 },
            }}
          >
            TESTIMONIALS
          </motion.p>
        </motion.div>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.5 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.reviews_section_block_main}
        >
          <SliderReviews info={info} />
        </motion.div>
        <motion.div
          initial="hidden"
          transition={{ duration: 0.6 }}
          whileInView="visible"
          variants={{
            hidden: { scale: 0 },
            visible: { scale: 1 },
          }}
          className={s.reviews_section_block_btn}
        >
          <a href="#contacts">
            <button>VIEW ALL TESTIMONIALS </button>
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Reviews;
