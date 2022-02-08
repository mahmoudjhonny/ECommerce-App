import './Slider.css';
import { images } from '../../sliderData'
import { useEffect, useState } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Slider = () => { 
    const [current, setcurrent] = useState(0);
    const sliderLength = images.length; 

    // useEffect(() => {
    //         setInterval(() => {
    //             nextSlide();
    //         } , 5000)
    //     return () => {
    //         clearInterval(() => {
    //             nextSlide()
    //         }, 5000)
    //     }
    // }, [current])

    const nextSlide = () => {
        setcurrent(current === sliderLength - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setcurrent(current === 0 ? sliderLength - 1 : current - 1)
    }

    if(!Array.isArray(images) || sliderLength <= 0) {
        return null;
    }

    return (
        <div className='sliderContainer'>
                <ArrowLeftIcon onClick={prevSlide} className='arrowIcon prevArrow'  style={{fontSize: '3.5rem'}}/>
                <ArrowRightIcon onClick={nextSlide} className='arrowIcon nextArrow'  style={{fontSize: '3.5rem'}}/>
            {images.map((imgs, index) => {
                return (
                    <div
                      className={index === current ? 'slide active' : 'slide'}
                      key={index}
                    >
                        {index === current && (
                            <>
                                <img src={imgs.imageUrl} alt={imgs.id} className='SliderImage'/>
                                <div className='sliderInfo'>
                                    <h3 className='sliderInfoTitle'>{imgs.title}</h3>
                                </div>
                                <div className="sliderInfo_2">
                                    <h2 className='sliderInfoText'>{imgs.subTitle}</h2>
                                </div>
                                <button className='buyButton'>Shop Now</button>
                            </>
                        )}
                    </div>
            )})}
        </div>
    );
}

export default Slider;
