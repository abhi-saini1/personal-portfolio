'use client';
import React, { useEffect, useState } from 'react'
import Links from './Links';
import {motion} from 'framer-motion'
import Menutoggle from './Ui/Menutoggle';



const Sidebar = () => {
  const [open,setIsOpen] = useState(false);


  const variants = {
    open:{
      clipPath: 'circle(1200px at 50px 50px)',
      transition:{
        type: 'spring',
        stiffness: 20,
      }
    },
    closed :{
      clipPath: "circle(30px at 50px 50px)",
      transition:{
        delay:0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
    }
    }
  }
  return (
    <motion.div className='absolute z-20 top-0 right-0 bottom-0' 
    initial={false} // Disable initial animation
    animate={open ? 'open' : 'closed'}>
        <motion.div variants={variants} className='fixed '>
            <Links/>
        </motion.div>
            <Menutoggle setIsOpen={()=> setIsOpen(prevState => !prevState)}/>
    </motion.div>
  )
}

export default Sidebar