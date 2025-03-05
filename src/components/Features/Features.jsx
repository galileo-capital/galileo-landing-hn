import { useEffect, useRef, useState } from 'react';
import Element from './Element';
import './Features.scss';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import langStore from '../../store/langStore';
export default observer(() => {
    const app = useRef(null); // Создаем массив ссылок на элементы

    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(langStore.lang);
    }, [langStore.lang])
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
                <p className='About__title'>/ {t('Features')} /</p>

                <div className='Features__top'>
                    {
                        [
                            {
                                img: 'round',
                                title: t('Digital Assets* and Fiat Transactions'),
                                content: t('Seamless on-ramps, off-ramps, and payments'),
                            },
                            {
                                img: 'rounds',
                                title: t('Customizable POS'),
                                content: t('Flexible for brick-and-mortar and e-commerce businesses with digital assets/fiat options'),
                            },
                            {
                                img: 'planet',
                                title: t('Digital Assets, USD and Local Currency Card. (coming soon)'),
                                content: t('Spend your digital assets anywhere, instantly. No digital assets? No problem, you can also use it with your USD and Local Currency.'),
                            },
                            {
                                img: 'star',
                                title: t('International US Account. (coming soon)'),
                                content: t('Access global financial opportunities with ease'),
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
                                title: t('Yield Accounts'),
                                content: t('Earn returns while keeping funds liquid'),
                                soon: false
                            },
                            {
                                img: 'setting',
                                title: t('Business Tools'),
                                content: t('Integrated payroll, utilities, and World Wide payments'),
                                soon: false
                            },
                            {
                                img: 'tourists',
                                title: t('Tourist Accounts'),
                                content: t('Integrate within the Costa Rican Banking ecosystem, make transfers and use your digital assets / USD with our Digital Assets card'),
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
})