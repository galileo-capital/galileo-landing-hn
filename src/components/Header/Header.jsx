import { observer } from "mobx-react-lite";
import './Header.scss';
import { modalStore } from "../../store/modal";
const Header = observer(() => {
    return (
        <div className='Header'>
            <div className='Header__item left'>
                <img src="./img/logo.svg" alt="" style={{ opacity: modalStore.isOpen ? 0 : 1, transition: "opacity 0.3s ease" }}/>
            </div>
            <div className='Header__item center'>
                <a href='#about'>/ About /</a>
                <a href='#Features'>/ Features /</a>
                <a href='#Action'>/ Partners /</a>
                <a href='#Team'>/ Team /</a>
                <a href='#Footer'>/ Contacts /</a>
            </div>
            <div className='Header__item right'>
                <button>Get the App <img src="./img/arrow.png" alt="" /></button>
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