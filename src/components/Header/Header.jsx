import './Header.scss';
    export default () => {return (
        <div className='Header'>
            <div className='Header__item left'>
                <img src="./img/logo.svg" alt="" />
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
            </div>
        </div>
    )}