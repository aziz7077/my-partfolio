import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./ProjectSlider.module.scss";
import { slides } from "@/constants/slides";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, EffectCoverflow } from "swiper";
import MyModal from "../MyModal/MyModal";
import useBodyScrollLock from "@/hooks/useBodyScrollLock";

export default function ProjectSlider() {
  // Состояние - для индекса слайдера
  const [indexSlide, setIndexSlide] = useState(null);

  // Состояние - для запрета прокрутки когда модалка открыто
  const [isLocked, setIsLocked] = useBodyScrollLock();

  // Function - для showModal и isLocked
  const handleClick = (index) => {
    setIndexSlide(index);
    setIsLocked(!isLocked);
  };
  return (
    <>
      {slides.map((slide, index) => {
        return (
          <MyModal
            key={slide.id}
            slide={slide}
            indexSlide={indexSlide}
            index={index}
            handleClick={handleClick}
          />
        );
      })}
      <Swiper
        loop={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 1,
          stretch: 0,
          depth: 140,
          modifier: 2.5,
        }}
        slidesPerView={1}
        centeredSlides={4}
        spaceBetween={20}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, EffectCoverflow]}
        breakpoints={{
          link: "",
          600: {
            slidesPerView: 3,
          },
        }}
        className="Project_slider"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className={s.blackout}>
              <h1>{slide.title}</h1>
              <button onClick={() => handleClick(index)}>Подробнее...</button>
            </div>
            <img className="slide_img" src={slide.image} alt="slides" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </>
  );
}
