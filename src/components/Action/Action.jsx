import { useGSAP } from '@gsap/react';
import './Action.scss';
import gsap from 'gsap';
import { useRef } from 'react';

const partners = ['skillful', 'betcris', 'sicsa', 'sport', 'anyone', 'ocean']
const partnersx3 = [...partners, ...partners, ...partners, ...partners,]

export default () => {
    const app = useRef(null); // Создаем массив ссылок на элементы

    useGSAP(
        () => {
            gsap.to(`.Action_decor1`,
                {
                    y: -100,
                    x: -100,
                    ease: "linear",
                    scrollTrigger: {
                        trigger: `.Action_decorTop`,
                        scrub: 1,
                        // markers: true,
                        start: `0px 80%`,
                        end: `${window.innerHeight}px 80%`,
                    }
                }
            );
            gsap.to(`.Action_decor2`,
                {
                    y: -100,
                    x: 300,
                    ease: "linear",
                    scrollTrigger: {
                        trigger: `.Action_decorTop`,
                        scrub: 1,
                        // markers: true,
                        start: `0px 80%`,
                        end: `${window.innerHeight}px 80%`,
                    }
                }
            );
            gsap.to(`.Action_decor3`,
                {
                    y: 100,
                    x: 30,
                    ease: "linear",
                    scrollTrigger: {
                        trigger: `.Action_decorTop`,
                        scrub: 1,
                        // markers: true,
                        start: `0px 80%`,
                        end: `${window.innerHeight}px 80%`,
                    }
                }
            );
        },
        { scope: app }
    )
    return (
        <div className='Action_wrapper' ref={app}>
            <div className='Action_decorTop  free_img'>
                <img src="/img/Action/bubble0.webp" alt="" />
            </div>
            <div className='Action_decorTop Action_decor1 free_img'>
                <img src="/img/Action/bubble1.webp" alt="" />
            </div>
            <div className='Action_decorTop Action_decor2 free_img'>
                <img src="/img/Action/bubble2.webp" alt="" />
            </div>
            <div className='Action_decorTop Action_decor3 free_img'>
                <img src="/img/Action/bubble3.webp" alt="" />
            </div>
            <div className='Action' id='Action'>
                <div className='Action__container'>
                    <p className='Action__container-title'>/ Galileo in Action /</p>
                    {/* <img src="/img/Action/bubbles.svg" alt="" className='Action__container-img' /> */}
                    <div className='Action__decorPlace' id='Partners'></div>
                    <p className='Action__container-title Action_partners_header'>/ Partners /</p>

                    <div className='Action__container-partnes' >
                        {
                            partnersx3.map((partner) => {
                                return <img src={`/img/Action/${partner}.svg`} alt="" />
                            })
                        }
                    </div>
                    <div className='Action__container-demo'>
                        <img src="/img/Action/demo.svg" alt="" className='Action__container-demo-img' />
                        <img src="/img/Action/demoPhone.png" alt="" className='Action__container-demo-img-phone' />
                        <a href='#' target='_blank'>Get the App <img src="/img/arrow.png" alt="" /></a>
                        <img src="/img/Action/phone.png" alt="" className='Action__container-demo-phone' />
                    </div>
                </div>
            </div>
        </div>
    )
}