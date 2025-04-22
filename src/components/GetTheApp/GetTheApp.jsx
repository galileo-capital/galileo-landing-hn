import { useTranslation } from "react-i18next";
import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import "./GetTheApp.scss";

export default function GetTheApp({ onRequestClose }) {
  const { t } = useTranslation();
  return (
    <Modal visible={true} onRequestClose={onRequestClose}>
      <div className="GetTheApp">
        <div className="GetTheApp_item">
          <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/app-store.svg`} alt="" width={48} height={48}/>
          <Button as='a' href="https://www.apple.com/app-store/" target="_blank">{t("Download App Appstore")}</Button>
        </div>
        <div className="GetTheApp_item">
          <img src={`${import.meta.env.VITE_APP_BASE_PATH}/img/play-store.svg`} alt="" width={48} height={48}/>
          <Button as='a' target="_blank" href='https://play.google.com/store/'>{t("Download App Playstore")}</Button>
        </div>
      </div>
      
    </Modal>
  )
}

GetTheApp.propTypes = Modal.propTypes;