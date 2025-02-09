import { observer } from "mobx-react-lite";
import './Modal.scss';
import { modalStore } from "../../store/modal";
const Modal = observer(() => {
    if (!modalStore.isOpen) return null;
  
    return (
      <div className="Modal">
        <img src="./img/logo.svg" alt="" className="Modal__logo"/>
        <a>About Galileo</a>
        <a>Features</a>
        <a>Contact Us</a>
        <a>Terms & Privacy</a>
        <div className="Modal__social">
            <div className="Modal__social-item">
                <img src="./img/social/twitter.png" alt="" />
                </div>
            <div className="Modal__social-item">
                <img src="./img/social/insta.png" alt="" />
            </div>
            <div className="Modal__social-item">
                <img src="./img/social/face.png" alt="" />
            </div>
            <div className="Modal__social-item">
                <img src="./img/social/link.png" alt="" />
            </div>            
        </div>
      </div>
    );
  });
  
  export default Modal;