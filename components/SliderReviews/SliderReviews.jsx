import React from 'react';
import logo from '../../public/Strelka.png'

import { Swiper, SwiperSlide } from "swiper/react";
import s from './SliderReviews.module.scss'

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Image from 'next/image';

const SliderReviews = ({ info }) => {
	return (
		<>
			<Swiper pagination={true} modules={[Pagination]} className="ReviewsSlider">
				{
					info.map((item  => {
						return (
							<SwiperSlide key={item.id}>
								<div className={s.slider_block}>
									<h4 className={s.slider_block_title}>
										{item.text}
									</h4>
									<div className={s.slider_user}>
										<Image src={item.img} alt="img" />
										<div className={s.slider_user_title}>
											<p>{item.name}</p>
											<p>{item.email}</p>
										</div>
										<Image src={logo} alt="img" />
									</div>
								</div>
							</SwiperSlide>
						)
					}))
				}

			</Swiper >
		</>
	);
};

export default SliderReviews;