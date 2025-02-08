import './Features.scss';
    export default () => {return (
        <div className='Features' id='Features'>
            <div className='Features__top'>
                <div className='Features__top-item Features__top-item-bottom'>
                    <div className='Features__top-desc'>
                        <img src="./img/Features/round.svg" alt="" />
                        <p className='Features__top-desc-title'>Digital Assets* and Fiat Transactions</p>
                        <p className='Features__top-desc-description'>Seamless on-ramps, off-ramps, and payments</p>
                    </div>
                </div>
                <div className='Features__top-item Features__top-item-top'>
                    <div className='Features__top-desc'>
                        <img src="./img/Features/rounds.svg" alt="" />
                        <p className='Features__top-desc-title'>Customizable POS</p>
                        <p className='Features__top-desc-description'>Flexible for brick-and-mortar and e-commerce businesses with digital assets/fiat options</p>
                    </div>
                </div>
                <div className='Features__top-item Features__top-item-bottom'>
                    <div className='Features__top-desc'>
                        <img src="./img/Features/planet.svg" alt="" />
                        <p className='Features__top-desc-title'>Digital Assets* Card</p>
                        <p className='Features__top-desc-description'>Spend digital assets anywhere, instantly</p>
                    </div>
                </div>
                <div className='Features__top-item Features__top-item-top'>
                    <div className='Features__top-desc'>
                        <img src="./img/Features/star.svg" alt="" />
                        <p className='Features__top-desc-title'>International US Account</p>
                        <p className='Features__top-desc-description'>Access global financial opportunities with ease</p>
                    </div>
                </div>
            </div>
            <div className='Features__bottom'>
                <div className='Features__bottom-item top'>
                    <div className='Features__bottom-item-container'>
                        <img src="./img/Features/folder.svg" alt="" />
                        <p className='Features__bottom-item-container-title'>Yield Accounts</p>
                        <p className='Features__bottom-item-container-description'>Earn returns while keeping funds liquid</p>
                    </div>
                </div>
                <div className='Features__bottom-item bottom'>
                    <div className='Features__bottom-item-container'>
                        <img src="./img/Features/setting.svg" alt="" />
                        <p className='Features__bottom-item-container-title'>Business Tools</p>
                        <p className='Features__bottom-item-container-description'>Integrated payroll, utilities, and World Wide payments</p>
                    </div>
                </div>
                <div className='Features__bottom-item'>
                    <div className='Features__bottom-item-container soon'>
                        <img src="./img/Features/sol.svg" alt="" />
                        <p className='Features__bottom-item-container-title'>Pay with your Solana Memes through your prepaid debit card </p>
                        <p className='Features__bottom-item-container-description'>Coming soon</p>
                    </div>
                </div>
            </div>
        </div>
    )}