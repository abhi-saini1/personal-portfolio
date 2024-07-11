import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const SocialLinks = () => {
  return (
    <div className='fixed top-4 left-5'> 
        <div className='flex items-center justify-center gap-2'>
        <Link href='/' className='w-[40px] h-[40px]' target='_blank' rel='noopener noreferrer'  >
            <Image src={'/Instagram.png'} alt='Instagram' width={40} height={40}/>
        </Link>
        <Link href='https://www.linkedin.com/in/abhishek-saini-292039310/'
         className='w-[40px] h-[40px]' target='_blank' rel='noopener noreferrer'>
            <Image src={'/Linkedin.png'} alt='LinkedIn' width={40} height={40}/>
        </Link>
        </div>
    </div>
  )
}

export default SocialLinks