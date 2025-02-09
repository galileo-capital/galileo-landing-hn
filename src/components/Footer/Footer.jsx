import Media from '../Media/Media';
import './Footer.scss';
export default () => {
    return (
        <div className='Footer' id='Footer'>
            <div className='Footer__container'>
                <p className='Footer__title'>Start Using Galileo Today!</p>
                <div className='Footer__btn'>
                    <button className='Footer__btn-item Footer__btn-item-left'>Contact us</button>
                    <button className='Footer__btn-item Footer__btn-item-right'>Get the App  <img src="/img/arrow.png" alt="" /></button>
                </div>
                <div className='Footer__item'>
                    <div className='Footer__item-left'>
                        <img src="/img/logo.svg" alt="" className='Footer__item-left-logo' />
                        <div className='Footer__item-left-social'>
                            <Media />
                        </div>
                        <p className='Footer__item-left-company'>Galileo Capital LLC. 2025. All rights reserved</p>
                    </div>
                    <div className='Footer__item-right'>
                        <a href="#about" className='Footer__item-right-link'>About Galileo</a>
                        <a href="#Features" className='Footer__item-right-link'>Features</a>
                        <a href="#Footer" className='Footer__item-right-link'>Contact Us</a>
                        <a href="#" className='Footer__item-right-link'>Terms & Privacy</a>
                        <p className='Footer__item-right-company'>*Digital assets services are proveded by Galileo Capital LLC a US Fincen registered company</p>
                    </div>
                </div>
            </div>
            <div className='Footer_decor_wrapper'>
                <div className='Footer_decor free_img'>
                    <iframe src='https://my.spline.design/glowingplanetparticles-490baebc03e151fcf1b3dbc502c0e540/' frameborder='0' width='100%' height='100%'></iframe>
                </div>
            </div>
        </div>
    )
}