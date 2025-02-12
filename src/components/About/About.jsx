import gsap from 'gsap';
import './About.scss';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
export default () => {
    const app = useRef(null); // Создаем массив ссылок на элементы

    useGSAP(
        () => {
            gsap.to('.About__description',
                {
                    text: `Galileo is a financial platform designed to bridge the gap between digital assets* and traditional banking. Whether it's managing payments, investing, or accepting digital assets* at your business, Galileo provides the tools to make finance accessible and secure for everyone.`,
                    ease: "linear",
                    scrollTrigger: {
                        trigger: `.About`,
                        scrub: 3,
                        // markers: true,
                        start: `0px 80%`,
                        end: `400px 80%`,
                    }
                }
            );
        },
        { scope: app }
    )


    return (
        <div className='About_wrapper' ref={app}>
            <div className='About' id='About' >
                <div className='About__container'>
                    <p className='About__title'>/ What is Galileo? /</p>
                    <p className='About__description'></p>
                </div>
            </div>
        </div>
    )
}