import React, { useEffect, useRef, useState } from 'react';
import s from './Statistics.module.scss'
import happyClients from '../../public/happyClients.png'
import executedWork from '../../public/executedWork.png'
import specoalists from '../../public/specialists.png'
import startups from '../../public/startups.png'
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion'
import SwiperCore, { Autoplay, Navigation } from 'swiper/core';
SwiperCore.use([Autoplay, Pagination, Navigation]);

import "swiper/css";

import { Pagination } from "swiper";

const Statistics = () => {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const { innerHeight, pageYOffset } = window;

			if (ref.current && ref.current.offsetTop <= innerHeight + pageYOffset - 50) {
				setInView(true);
			} else {
				setInView(false);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [ref]);

	return (
		<motion.section
			ref={ref}
			style={{
				background: "linear-gradient(	270deg, rgba(255, 0, 0, 0.732) -127.55%,rgba(21, 21, 21, 0.35) 55.97%)"
			}}
			animate={{
				background: [
					"linear-gradient(	270deg, rgba(255, 0, 0, 0.732) -10%,rgba(21, 21, 21, 0.35) -10%)",
					"linear-gradient(	270deg, rgba(255, 0, 0, 0.732) -127.55%,rgba(21, 21, 21, 0.35) 55.97%)",
				]
			}}
			transition={{ duration: 2 }}
			initial='hidden'
			whileInView="visible"
			variants={
				{
					hidden: { background: "linear-gradient(	270deg, rgba(255, 0, 0, 0.732) -10%,rgba(21, 21, 21, 0.35) -10%)", opacity: 0 },
					visible: { background: "linear-gradient(	270deg, rgba(255, 0, 0, 0.732) -127.55%,rgba(21, 21, 21, 0.35) 55.97%)", opacity: 1 }
				}
			}
			className={s.statistics_section} >
			{inView && (
				<div className={s.statistics_section_blocks}>
					<Swiper
						spaceBetween={80}
						autoplay={{ delay: 2000 }}
						pagination={{ clickable: true }}
						modules={[Pagination]}
						breakpoints={{
							420: {
								slidesPerView: 1,
								spaceBetween: 10,
							},
							820: {
								slidesPerView: 2,
								spaceBetween: 30,
							},
							1159: {
								slidesPerView: 3,
								spaceBetween: 50,
							},
							1400: {
								slidesPerView: 4,
							}
						}}
						className="StatisticsSlider">
						<SwiperSlide >
							<motion.div
								initial="hidden"
								transition={{ duration: 0.1 }}
								whileInView="visible"
								variants={
									{
										hidden: { scale: 0 },
										visible: { scale: 1 }

									}
								}
								className={s.statistics_section_block}>
								<Image src={specoalists} alt='img_specoalists' />
								<div style={{ display: 'flex' }}>
									<div className={`${s.__num} ${s.__num1}`}>
									</div>
									<span>+</span>
								</div>
								<p >Элитных отзывов</p>
							</motion.div>
						</SwiperSlide>
						<SwiperSlide>
							<motion.div
								initial="hidden"
								transition={{ duration: 0.2 }}
								whileInView="visible"
								variants={
									{
										hidden: { scale: 0 },
										visible: { scale: 1 }

									}
								}
								className={s.statistics_section_block}>
								<Image src={executedWork} alt='img_executedWork' />
								<div style={{ display: 'flex' }}>
									<div className={`${s.__num} ${s.__num2}`}>
									</div>
									<span>+</span>
								</div>
								<p>выполненных работ</p>
							</motion.div>
						</SwiperSlide>
						<SwiperSlide>
							<motion.div
								initial="hidden"
								transition={{ duration: 0.3 }}
								whileInView="visible"
								variants={
									{
										hidden: { scale: 0 },
										visible: { scale: 1 }
									}
								}
								className={s.statistics_section_block}>
								<Image src={happyClients} alt='img_happyClients' />
								<div style={{ display: 'flex' }}>
									<div className={`${s.__num} ${s.__num3}`}>
									</div>
									<span>+</span>
								</div>
								<p>счастливых клиентов</p>
							</motion.div>
						</SwiperSlide>
						<SwiperSlide>
							<motion.div
								initial="hidden"
								transition={{ duration: 0.4 }}
								whileInView="visible"
								variants={
									{
										hidden: { scale: 0 },
										visible: { scale: 1 }
									}
								}
								className={s.statistics_section_block}>
								<Image src={startups} alt='img_startups' />
								<div style={{ display: 'flex' }}>
									<div className={`${s.__num} ${s.__num4}`}>
									</div>
									<span>%</span>
								</div>
								<p>доходы в фрилансе</p>
							</motion.div>
						</SwiperSlide>
					</Swiper>
				</div>
			)}

		</motion.section >
	);
};

export default Statistics;