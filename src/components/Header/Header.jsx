import './Header.scss';
    export default () => {return (
        <div className='Header'>
            <div className='Header__item left'>
                <img src="./img/logo.svg" alt="" />
            </div>
            <div className='Header__item center'>
                <a href='#'>/ About /</a>
                <a href='#'>/ Features /</a>
                <a href='#'>/ aartners /</a>
                <a href='#'>/ Team /</a>
                <a href='#'>/ Contacts /</a>
            </div>
            <div className='Header__item right'>
                <button>Get the App <img src="./img/arrow.png" alt="" /></button>
            </div>
        </div>
    )}