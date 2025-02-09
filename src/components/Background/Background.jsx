import './Background.scss';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

export default () => {
    const app = useRef(null)

    return (

        <div className='Background_wrapper' ref={app}>
            <div className='Background free_img'>
                <div className='Background_inner'>
                    <iframe src='https://my.spline.design/glowingplanetparticles-8cfd88de14f4ff5b0b21c20e5a1082d5/' frameborder='0' width='100%' height='100%'></iframe>
                </div>
            </div>
        </div>
    )
}