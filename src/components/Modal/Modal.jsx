import { observer } from "mobx-react-lite";
import './Modal.scss';
import { modalStore } from "../../store/modal";
import Media from "../Media/Media";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import langStore from "../../store/langStore";
const Modal = observer(() => {
    if (!modalStore.isOpen) return null;
    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(langStore.lang);
    }, [langStore.lang])

    return (
        <div className="Modal">
            <img src="/img/logo.svg" alt="" className="Modal__logo" />
            <a>{t('About Galileo')}</a>
            <a>{t('Features')}</a>
            <a>{t('Contacts')}</a>
            <a>{t('Terms & Privacy')}</a>
            <div className="Modal__social">
                <Media />

            </div>
        </div>
    );
});

export default Modal;