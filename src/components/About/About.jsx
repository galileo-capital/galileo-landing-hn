import gsap from 'gsap';
import './About.scss';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
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
            gsap.to('.About__description',
                {
                    text: t('Galileo is a fin'),
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
                    <p className='About__title'>/ {t('What is Galileo?')} /</p>
                    <p className='About__description'></p>
                </div>
            </div>
        </div>
    )
})