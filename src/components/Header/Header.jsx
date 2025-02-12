import { observer } from "mobx-react-lite";
import './Header.scss';
import { modalStore } from "../../store/modal";
const Header = observer(() => {
    return (
        <div className='Header'>
            <div className='Header__item left'>
                <img src="/img/logo.svg" alt="" style={{ opacity: modalStore.isOpen ? 0 : 1, transition: "opacity 0.3s ease" }} />
            </div>
            <div className='Header__item center'>
                <a href='#About'><span>/</span> About <span>/</span></a>
                <a href='#Features'><span>/</span> Features <span>/</span></a>
                <a href='#Partners'><span>/</span> Partners <span>/</span></a>
                <a href='#Team'><span>/</span> Team <span>/</span></a>
                <a href='#Footer'><span>/</span> Contacts <span>/</span></a>
            </div>
            <div className='Header__item right'>
                <a>Get the App <img src="/img/arrow.png" alt="" /></a>
                <div className={`Header__item-burger ${modalStore.isOpen ? "active" : ""}`}
                    onClick={modalStore.toggleModal} >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    );
});

export default Header;