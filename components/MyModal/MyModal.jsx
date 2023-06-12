import React from "react";
import s from "./MyModal.module.scss";
import cn from "classnames";


const MyModal = ({ slide, indexSlide, index, handleClick }) => {
  return (
    <div className={indexSlide === index ? cn(s.modal, s.show) : s.modal}>
      <div className={s.modal__gradient}>
        <button className={s.modal__close} onClick={() => handleClick(null)}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.9404 4.05835C14.2282 4.3461 14.2282 4.81264 13.9404 5.1004L5.09832 13.9425C4.81057 14.2303 4.34402 14.2303 4.05627 13.9425C3.76852 13.6547 3.76852 13.1882 4.05627 12.9005L12.8984 4.05835C13.1861 3.77059 13.6527 3.77059 13.9404 4.05835Z"
              fill="white"
            ></path>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4.05627 4.05835C4.34402 3.77059 4.81057 3.77059 5.09832 4.05835L13.9404 12.9005C14.2282 13.1882 14.2282 13.6547 13.9404 13.9425C13.6527 14.2303 13.1861 14.2303 12.8984 13.9425L4.05627 5.1004C3.76852 4.81264 3.76852 4.3461 4.05627 4.05835Z"
              fill="white"
            ></path>
          </svg>
        </button>
        <div className={s.modal__text}>
          <div>
            <h1>{slide.title}</h1>
            <div className={s.modal__text__description}>
            <p>{slide.description}</p>
            </div>
          </div>
          <a href={slide.link} target="_blank">Перейти по этой ссылке</a>
        </div>
        <div className={s.modal__image}>
          <img src={slide.image} alt="modal image" />
        </div>
      </div>
    </div>
  );
};

export default MyModal;
