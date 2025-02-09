import './Background.scss';

import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

export default () => {
    const app = useRef(null)

    useGSAP(
        () => {
            gsap.fromTo('.Background', {
                y: 300,
                opacity: 0,
            }, {
                y: 0,
                delay: 1,
                duration: 2,
                opacity: 1
                // scrollTrigger: {
                //     trigger: '.Paper_img',
                //     scrub: 2,
                //     // markers: true,
                //     start: `70% center`,
                //     end: `bottom center`,
                // }
            })
        },
        { scope: app }
    )

    return (
        <div className='Background_wrapper' ref={app}>
            <div className='Background free_img'>
                <img src="/img/space.webp" alt="" />
            </div>
        </div>
    )
}