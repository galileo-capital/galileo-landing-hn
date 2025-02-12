import './Background.scss';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

export default ({ bottom = false }) => {
    const app = useRef(null)

    return (

        <div className={`Background_wrapper  Background_${bottom && 'bottom'}`} ref={app}>
            <div className='Background free_img'>
                <div className='Background_inner' style={{
                    overflow: bottom ? 'hidden' : 'visible'
                }}>
                    <iframe src={`${bottom ? 'https://my.spline.design/glowingplanetparticles-490baebc03e151fcf1b3dbc502c0e540/' : 'https://my.spline.design/glowingplanetparticles-8cfd88de14f4ff5b0b21c20e5a1082d5/'} `} frameborder='0' width='100%' height='100%' style={{
                        top: bottom ? '200px' : '0px'
                    }}></iframe>
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