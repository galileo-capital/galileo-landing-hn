import { useEffect } from 'react';
import loaderStore from '../../store/loaderStore';
import './Background.scss';


export default ({ bottom = false }) => {
    useEffect(() => {
        setTimeout(() => {
            loaderStore.hide()
        }, 3000);
    }, [])
    return (
        <div className={`Background_wrapper  Background_${bottom && 'bottom'}`} >
            <div className='Background free_img'>
                <div className='Background_inner' style={{
                    overflow: bottom ? 'hidden' : 'visible'
                }}>

                    <iframe src={`${bottom ? 'https://my.spline.design/glowingplanetparticles-490baebc03e151fcf1b3dbc502c0e540/' : 'https://my.spline.design/glowingplanetparticles-8cfd88de14f4ff5b0b21c20e5a1082d5/'} `} frameborder='0' width='100%' height='100%' style={{
                        top: bottom ? '200px' : '0px'
                    }}
                        onLoad={() => {
                            setTimeout(() => {
                                loaderStore.hide()
                            }, 200);
                        }}
                    />
                </div>
            </div>
            {
                !bottom && <div className='Background_shadow_wrapper'>
                    <div className='Background_shadow'></div>
                </div>
            }
        </div>
    )
}