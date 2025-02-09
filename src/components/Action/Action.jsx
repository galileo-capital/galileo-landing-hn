import './Action.scss';
export default () => {
    return (
        <>
            <div className='Action_decorBot free_img'>
                <img src="/img/Action/bubble.webp" alt="" />
            </div>
            <div className='Action_decorTop free_img'>
                <img src="/img/Action/bubbleText.svg" alt="" />
            </div>
            <div className='Action' id='Action'>
                <div className='Action__container'>
                    <p className='Action__container-title'>/ Galileo in Action /</p>
                    {/* <img src="/img/Action/bubbles.svg" alt="" className='Action__container-img' /> */}
                    <div className='Action__decorPlace'></div>
                    <div className='Action__container-partnes'>
                        <img src="/img/Action/skillful.svg" alt="" />
                        <img src="/img/Action/betcris.svg" alt="" />
                        <img src="/img/Action/sicsa.svg" alt="" />
                        <img src="/img/Action/sport.svg" alt="" />
                        <img src="/img/Action/anyone.svg" alt="" />
                        <img src="/img/Action/ocean.svg" alt="" />
                    </div>
                    <div className='Action__container-demo'>
                        <img src="/img/Action/demo.svg" alt="" className='Action__container-demo-img' />
                        <img src="/img/Action/demoPhone.png" alt="" className='Action__container-demo-img-phone' />
                        <button>Get the App <img src="/img/arrow.png" alt="" /></button>
                        <img src="/img/Action/phone.png" alt="" className='Action__container-demo-phone' />
                    </div>
                </div>
            </div>
        </>
    )
}