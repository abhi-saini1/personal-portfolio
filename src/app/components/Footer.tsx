'use client';
import React, { useEffect, useState } from "react";
import { FaArrowUp } from 'react-icons/fa'

const Footer = () => {
const [isVisible,setIsVisible] = useState(false);

const listenScroll = () =>{
  const heightToHide = 200;
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
  windowScroll > heightToHide ? setIsVisible(true) : setIsVisible(false);
}

useEffect(()=>{
  window.addEventListener('scroll',listenScroll);
})
const scrollToTop = () =>{
  window.scrollTo({
    top:0,
    behavior: 'smooth'
  })
}
  return (
    <>
      <footer className="pb-5">
              <div className="h-[1px] w-full bg-gray-300"></div>
            <div className="flex items-center justify-center pt-5">
              <p className="text-white text-[16px]">
                &#169; Copyright All rights reserved.
              </p>
          </div>
    </footer>

        {/* scroll to top */}
        {isVisible && (
          <div className="flex items-center justify-center w-[50px] h-[50px]
          fixed right-2 bottom-2 cursor-pointer bg-white text-center border rounded-full text-black" onClick={scrollToTop}>
            <FaArrowUp className='text-1xl'/>
          </div>
        )}
    </>
    
  );
};

export default Footer;
