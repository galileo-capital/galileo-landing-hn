import gsap from 'gsap';
import './About.scss';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { useEffect, useRef } from 'react';
import langStore from '../../store/langStore';

export default observer(() => {
    const app = useRef(null);
    const { t, i18n } = useTranslation();
    const textRef = useRef(null);

    useEffect(() => {
        i18n.changeLanguage(langStore.lang);
    }, [langStore.lang]);

    useEffect(() => {
        if (!i18n.isInitialized) return;

        // Анимация появления текста как печатание
        const anim = gsap.fromTo(textRef.current, {
            text: "", // Начинаем с пустого текста
        }, {
            text: t('Galileo is a fin'), // Конечный текст
            duration: 2, // Скорость анимации
            ease: "power1.out",
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
        return <div>Cargando traducciones...</div>;
    }

    return (
        <div className='About_wrapper' ref={app}>
            <div className='About' id='About'>
                <div className='About__container'>
                    <p className='About__title'>/ {t('What is Galileo?')} /</p>
                    <p className='About__description' ref={textRef}>/ {t('Galileo is a fin')} /</p>
                </div>
            </div>
        </div>
    );
});
