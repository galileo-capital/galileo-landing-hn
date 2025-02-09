import './Team.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useRef } from "react";
export default () => {
    const swiperRef = useRef(null);
    return (
        <div className='Team' id='Team'>
            <div className='Team__container'>
                <div className='Team__title'>
                    <p className='Team__title-title'>/ Team /</p>
                    <div className='Team__btn'>
                        <button className='Team__title-btn Team__title-btn-left' onClick={() => swiperRef.current?.slidePrev()}><img src="/img/arrowvio.png" alt="" /></button>
                        <button className='Team__title-btn Team__title-btn-right' onClick={() => swiperRef.current?.slideNext()}><img src="/img/arrowvio.png" alt="" /></button>
                    </div>
                </div>
                <div className='Team__member'>
                    <Swiper
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            650: { slidesPerView: 2 },
                            880: { slidesPerView: 3 },
                            1200: { slidesPerView: 4 },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={50} slidesPerView={4}>
                        <SwiperSlide><div className='Team__member-item Team__member-item-bottom'>
                            <div className='Team__member-item-container'>
                                <img src="/img/teammember.png" alt="" className='Team__member-item-img' />
                                <p className='Team__member-item-name'>Max Xiques</p>
                                <p className='Team__member-item-position'>CEO</p>
                                <button className='Team__member-item-btn'><img src="/img/tg.png" alt="" /></button>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='Team__member-item Team__member-item-top'>
                            <div className='Team__member-item-container'>
                                <img src="/img/teammember.png" alt="" className='Team__member-item-img' />
                                <p className='Team__member-item-name'>Alberto Castro</p>
                                <p className='Team__member-item-position'>COO</p>
                                <button className='Team__member-item-btn'><img src="/img/tg.png" alt="" /></button>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='Team__member-item Team__member-item-bottom'>
                            <div className='Team__member-item-container'>
                                <img src="/img/teammember.png" alt="" className='Team__member-item-img' />
                                <p className='Team__member-item-name'>Andres Barboza</p>
                                <p className='Team__member-item-position'>CTO</p>
                                <button className='Team__member-item-btn'><img src="/img/tg.png" alt="" /></button>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='Team__member-item Team__member-item-top'>
                            <div className='Team__member-item-container'>
                                <img src="/img/teammember.png" alt="" className='Team__member-item-img' />
                                <p className='Team__member-item-name'>Jose Quesada</p>
                                <p className='Team__member-item-position'>COO</p>
                                <button className='Team__member-item-btn'><img src="/img/tg.png" alt="" /></button>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='Team__member-item Team__member-item-bottom'>
                            <div className='Team__member-item-container'>
                                <img src="/img/teammember.png" alt="" className='Team__member-item-img' />
                                <p className='Team__member-item-name'>Daniel Ureña</p>
                                <p className='Team__member-item-position'>CMO</p>
                                <button className='Team__member-item-btn'><img src="/img/tg.png" alt="" /></button>
                            </div>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}