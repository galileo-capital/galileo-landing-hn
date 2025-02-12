import './Loader.scss';
import loaderStore from "../../store/loaderStore";
import { useEffect, useState } from 'react';

export default () => {
    const [loaderCounter, setloaderCounter] = useState(1);
    let loaderCounterInt = 0;

    useEffect(() => {
        loaderCounterInt = setInterval(() => {
            setloaderCounter(prev => prev + 1)
        }, 500);
        return () => {
            clearInterval(loaderCounterInt)
        }
    }, [])


    return (
        <>
            {
                loaderStore.loading && <div className='Loader'>
                    <img src="/img/loader.svg" alt="" />
                    <div className='Loader_text'>
                        Loading
                        {Array(((loaderCounter) % 4))
                            .fill(0)
                            .map((_, index) => {
                                return '.'
                            })}
                    </div>
                </div>
            }
        </>
    )
}