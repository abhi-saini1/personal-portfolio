
import {motion} from 'framer-motion'
import React from 'react'

interface MenutogglePorps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const Menutoggle: React.FC<MenutogglePorps>= ({setIsOpen}) => {
  return (
    <button onClick={()=> setIsOpen((prevState) => !prevState)} 
    className='w-[55px] h-[55px] fixed border-none flex items-center justify-center top-4 right-4 bottom-0 bg-transparent cursor-pointer  bg-white rounded-full'>
      <svg width='30' height='30' viewBox="0 0 23 23" className='absolute top-4 flex items-center justify-center'>
        <motion.path
        strokeWidth='3'
        stroke='black'
        strokeLinecap='round'
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
        />
        <motion.path strokeWidth='3' 
        stroke='black' 
        strokeLinecap='round'
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: {opacity: 1},
          open: {opacity: 0}
        }}
        />
        <motion.path 
        strokeWidth='3' 
        stroke='black' 
        strokeLinecap='round'
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
        />
      </svg>
    </button>
  )
}

export default Menutoggle