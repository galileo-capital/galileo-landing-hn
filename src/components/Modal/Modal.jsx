import { observer } from "mobx-react-lite";
import './Modal.scss';
import { modalStore } from "../../store/modal";
import Media from "../Media/Media";
const Modal = observer(() => {
    if (!modalStore.isOpen) return null;

    return (
        <div className="Modal">
            <img src="/img/logo.svg" alt="" className="Modal__logo" />
            <a>About Galileo</a>
            <a>Features</a>
            <a>Contact Us</a>
            <a>Terms & Privacy</a>
            <div className="Modal__social">
                {/* <div className="Modal__social-item">
                    <img src="/img/social/x.svg" alt="" />
                </div>
                <div className="Modal__social-item">
                    <img src="/img/social/inst.svg" alt="" />
                </div>
                <div className="Modal__social-item">
                    <img src="/img/social/f.svg" alt="" />
                </div>
                <div className="Modal__social-item">
                    <img src="/img/social/ln.svg" alt="" />
                </div> */}
                <Media />

            </div>
        </div>
    );
});

export default Modal;