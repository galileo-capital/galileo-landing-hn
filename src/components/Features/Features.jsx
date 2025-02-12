import { useRef, useState } from 'react';
import Element from './Element';
import './Features.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
export default () => {
    const app = useRef(null); // Создаем массив ссылок на элементы

    useGSAP(
        () => {
            for (let i = 0; i < 8; i++) {
                const modifier = 12;
                gsap.fromTo(`.Fel_${i}`, {
                    y: i % 2 ? 200 : -200,
                    opacity: 0
                },
                    {
                        y: 0,
                        opacity: 1,
                        ease: "linear",
                        scrollTrigger: {
                            trigger: `.Features`,
                            scrub: 1,
                            // markers: true,
                            start: `${modifier * i}% 80%`,
                            end: `${modifier * (i + 1)}% 80%`,
                        }
                    }
                );
            }
        },
        { scope: app }
    )


    return (
        <div className='Features_wrapper' ref={app}>
            <div className='Features'
                id='Features' >
                <p className='About__title'>/ Features /</p>

                <div className='Features__top'>
                    {
                        [
                            {
                                img: 'round',
                                title: 'Digital Assets* and Fiat Transactions',
                                content: 'Seamless on-ramps, off-ramps, and payments',
                            },
                            {
                                img: 'rounds',
                                title: 'Customizable POS',
                                content: 'Flexible for brick-and-mortar and e-commerce businesses with digital assets/fiat options',
                            },
                            {
                                img: 'planet',
                                title: 'Digital Assets* Card',
                                content: 'Spend digital assets anywhere, instantly',
                            },
                            {
                                img: 'star',
                                title: 'International US Account',
                                content: 'Access global financial opportunities with ease',
                            },
                        ].map((el, index) => {
                            return <Element index={index} top={index % 2} small img={el.img} title={el.title} content={el.content} />
                        })
                    }
                </div>
                <div className='Features__bottom'>
                    {
                        [
                            {
                                img: 'folder',
                                title: 'Yield Accounts',
                                content: 'Earn returns while keeping funds liquid',
                                soon: false
                            },
                            {
                                img: 'setting',
                                title: 'Business Tools',
                                content: 'Integrated payroll, utilities, and World Wide payments',
                                soon: false
                            },
                            {
                                img: 'sol',
                                title: 'Pay with your Solana Memes through your prepaid debit card',
                                content: 'Coming soon',
                                soon: true
                            }
                        ].map((el, index) => {
                            return <Element index={index + 5} top={(index + 1) % 2} soon={el.soon} img={el.img} title={el.title} content={el.content} />
                        })
                    }
                </div>
            </div>
        </div>

    )
}