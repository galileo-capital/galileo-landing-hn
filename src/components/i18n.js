import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18n
    .use(HttpBackend) // загрузка переводов из файлов
    .use(LanguageDetector) // определение языка
    .use(initReactI18next)
    .init({
        fallbackLng: 'en', // язык по умолчанию
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: `${import.meta.env.VITE_APP_BASE_PATH}/locales/{{lng}}/translation.json`,
        },
    });

export default i18n;
