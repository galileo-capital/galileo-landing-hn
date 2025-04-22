import './Team.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import langStore from '../../store/langStore';

export default observer(() => {
    const [showControls, setShowControls] = useState(true);
    const swiperRef = useRef(null);

    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(langStore.lang);
    }, [langStore.lang]);

    useEffect(() => {
        const handleResize = (e) => setShowControls(!e.matches);
        const matcher = window.matchMedia('(min-width: 1200px)');
        matcher.addEventListener('change', handleResize );
        setShowControls(!matcher.matches);
        return () => matcher.removeEventListener('change', handleResize );
    }, []);

    return (
        <div className='Team' id='Team'>
            <div className='Team__container'>
                <div className='Team__title'>
                    <p className='Team__title-title'>/ {t('Team')} /</p>
                    { showControls && <div className='Team__btn'>
                        <button className='Team__title-btn Team__title-btn-left' onClick={() => swiperRef.current?.slidePrev()}><img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/arrowvio.png`} alt="" /></button>
                        <button className='Team__title-btn Team__title-btn-right' onClick={() => swiperRef.current?.slideNext()}><img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/arrowvio.png`} alt="" /></button>
                    </div> }
                </div>
                <div className='Team__member'>
                    <Swiper
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            650: { slidesPerView: 2 },
                            880: { slidesPerView: 3 },
                            1200: { slidesPerView: 4, },
                        }}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={50} slidesPerView={4}
                        loop={true}
                        >
                        <SwiperSlide><div className='Team__member-item Team__member-item-bottom'>
                            <div className='Team__member-item-container'>
                                <div className='Team__member-item-img_wrapper'>
                                    <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Team/max.webp`} alt="" className='Team__member-item-img' />
                                </div>
                                <p className='Team__member-item-name'>{t('Max Xiques')}</p>
                                <p className='Team__member-item-position'>CEO</p>
                                <a href='https://www.linkedin.com/in/max-xiques/' target='_blank' className='Team__member-item-btn'><img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/tg.svg`} alt="" /></a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='Team__member-item Team__member-item-top'>
                            <div className='Team__member-item-container'>
                                <div className='Team__member-item-img_wrapper'>
                                    <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Team/alberto.webp`} alt="" className='Team__member-item-img' />
                                </div>
                                <p className='Team__member-item-name'>{t('Alberto Castro')}</p>
                                <p className='Team__member-item-position'>COO</p>
                                <a href='https://www.linkedin.com/in/albertocastroalfaro' target='_blank' className='Team__member-item-btn'><img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/tg.svg`} alt="" /></a>
                            </div>
                        </div></SwiperSlide>
                        {/*<SwiperSlide><div className='Team__member-item Team__member-item-top'>
                            <div className='Team__member-item-container'>
                                <div className='Team__member-item-img_wrapper'>
                                    <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Team/jose.webp`} alt="" className='Team__member-item-img' />
                                </div>
                                <p className='Team__member-item-name'>{t('Jose Quesada')}</p>
                                <p className='Team__member-item-position'>CCO</p>
                                <button className='Team__member-item-btn'><img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/tg.svg`} alt="" /></button>
                            </div>
                        </div></SwiperSlide>*/}
                        <SwiperSlide><div className='Team__member-item Team__member-item-bottom'>
                            <div className='Team__member-item-container'>
                                <div className='Team__member-item-img_wrapper'>
                                    <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Team/andres.webp`} alt="" className='Team__member-item-img' />
                                </div>
                                <p className='Team__member-item-name'>{t('Andres Barboza')}</p>
                                <p className='Team__member-item-position'>CTO</p>
                                <a href='https://www.linkedin.com/in/joseandresbarboza/' target='_blank' className='Team__member-item-btn'><img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/tg.svg`} alt="" /></a>
                            </div>
                        </div></SwiperSlide>
                        <SwiperSlide><div className='Team__member-item Team__member-item-bottom'>
                            <div className='Team__member-item-container'>
                                <div className='Team__member-item-img_wrapper'>
                                    <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/Team/daniel.webp`} alt="" className='Team__member-item-img' />
                                </div>
                                <p className='Team__member-item-name'>{t('Daniel Ureña')}</p>
                                <p className='Team__member-item-position'>CMO</p>
                                <a href='https://www.linkedin.com/in/danielurenaz/' target='_blank' className='Team__member-item-btn'><img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/tg.svg`} alt="" /></a>
                            </div>
                        </div></SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
})