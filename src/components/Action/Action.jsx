import './Action.scss';
    export default () => {return (
        <div className='Action' id='Action'>
            <div className='Action__container'>
                <p className='Action__container-title'>/ Galileo in Action /</p>
                {/* херня */}
                <div class="container">
                    <div class="circle main-circle">$26M+ in transactions processed in 2024</div>
                    <div class="circle small-circle tether">tether</div>
                    <div class="circle small-circle bitgo">BitGo</div>
                    <div class="circle small-circle circle-logo">Circle</div>
                </div>
                {/* конец херни */}
                <div className='Action__container-partnes'>
                    <img src="./img/Action/skillful.svg" alt="" />
                    <img src="./img/Action/betcris.svg" alt="" />
                    <img src="./img/Action/sicsa.svg" alt="" />
                    <img src="./img/Action/sport.svg" alt="" />
                    <img src="./img/Action/anyone.svg" alt="" />
                    <img src="./img/Action/ocean.svg" alt="" />
                </div>
                <div className='Action__container-demo'>
                    <img src="./img/Action/demo.svg" alt="" className='Action__container-demo-img'/>
                    <img src="./img/Action/demoPhone.png" alt="" className='Action__container-demo-img-phone'/>
                    <button>Get the App <img src="./img/arrow.png" alt="" /></button>
                    <img src="./img/Action/phone.png" alt="" className='Action__container-demo-phone'/>
                </div>
            </div>
        </div>
    )}