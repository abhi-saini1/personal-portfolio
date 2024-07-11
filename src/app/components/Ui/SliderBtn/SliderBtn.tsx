'use client'
import React from 'react'
import { useSwiper } from 'swiper/react'
import {PiCaretLeftBold,PiCaretRightBold} from 'react-icons/pi';

interface SliderBtnProps {
    containerStyles: string,
    btnStyles: string,
}
const SliderBtn: React.FC<SliderBtnProps> = ({containerStyles,btnStyles,}) => {
    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
        <button className={btnStyles} onClick={()=> swiper.slidePrev()}>
            <PiCaretLeftBold />
        </button>
        <button className={btnStyles} onClick={()=> swiper.slideNext()}>
            <PiCaretRightBold />
        </button>
    </div>
  )
}

export default SliderBtn