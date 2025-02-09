
export default ({ small = false, img, title, content, soon = false, top }) => {


    return (
        <div
            className={`Features__bottom-item ${top ? 'top' : 'bottom'} ${small ? 'Features__bottom-item_small' : ''}`}
        >
            {
                soon ? <div className='Features__bottom-item-one'>
                    <div className={`Features__bottom-item-container ${soon ? 'soon' : ''}`}>
                        <img src={`/img/Features/${img}.svg`} alt="" />
                        <p className='Features__top-desc-title'>{title}</p>
                        <p className='Features__top-desc-description'>{content}</p>
                    </div>
                </div>
                    :
                    <div className={`Features__bottom-item-container ${soon ? 'soon' : ''}`}>
                        <img src={`/img/Features/${img}.svg`} alt="" />
                        <p className='Features__top-desc-title'>{title}</p>
                        <p className='Features__top-desc-description'>{content}</p>
                    </div>

            }
        </div>






    );
};
