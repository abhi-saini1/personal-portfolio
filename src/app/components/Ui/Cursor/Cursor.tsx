'use client'
import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
const Cursor = () => {
    const [position,setPosition] = useState({x:0,y:0})

    useEffect(()=>{
        const mouseMove = (e:any) =>{
            setPosition({x:e.clientX,y:e.clientY})        
        }
        window.addEventListener('mousemove',mouseMove)

        return () =>{
            window.removeEventListener('mousemove',mouseMove)
        }

    },[])
  return (
    <motion.div className='xl:w-[50px] xl:h-[50px]  rounded-full border border-e-white fixed z-10 transition-all duration-75 none xl:inline lg:inline  hidden'
    animate={{x:position.x+10, y:position.y+10}}>

    </motion.div>
  )
}

export default Cursor