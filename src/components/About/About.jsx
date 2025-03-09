import gsap from 'gsap';
import './About.scss';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import langStore from '../../store/langStore';

export default observer(() => {
    const app = useRef(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(langStore.lang);
    }, [langStore.lang]);

    useEffect(() => {
        if (!i18n.isInitialized) return; // Ждём инициализации i18n

        const anim = gsap.to('.About__description', {
            text: t('Galileo is a fin'),
            ease: "linear",
            scrollTrigger: {
                trigger: `.About`,
                scrub: 3,
                start: `0px 80%`,
                end: `400px 80%`,
            }
        });

        return () => anim.kill(); // Уничтожаем анимацию при смене языка
    }, [t]);

    if (!i18n.isInitialized) {
        return <div>Cargando traducciones...</div>; // Ожидание загрузки переводов
    }

    return (
        <div className='About_wrapper' ref={app}>
            <div className='About' id='About'>
                <div className='About__container'>
                    <p className='About__title'>/ {t('What is Galileo?')} /</p>
                    <p className='About__description'>/ {t('Galileo is a financial platform designed to bridge the gap between digital assets* and traditional banking. Whether it`s managing payments, investing, or accepting digital assets* at your business, Galileo provides the tools to make finance accessible and secure for everyone.')} /</p>
                </div>
            </div>
        </div>
    );
});