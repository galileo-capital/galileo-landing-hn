import { useGSAP } from '@gsap/react';
import './Hero.scss';
import gsap from 'gsap';
export default () => {

    return (
        <div className='Hero'>
            <p className='Hero__title'>Modern Finance for a Changing World</p>
            <p className='Hero__description'>Galileo bridges the gap between digital assets* and everyday financial needs, empowering individuals and businesses with innovative, accessible solutions</p>
            <div className='Hero__btn'>
                <a href='#' target='_blank' className='Hero__btn-item Hero__btn-item-left'>Learn More</a>
                <a href='#' target='_blank' className='Hero__btn-item Hero__btn-item-right'>Get Started <img src="/img/arrow.png" alt="" /></a>
            </div>
        </div>
    )
}