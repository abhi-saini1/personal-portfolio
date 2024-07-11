'use client'
import Image from 'next/image'
import React from 'react'
const Profile = () => {
  return (
    <div className='w-full h-full mt-5'>
        <div
        className='xl:w-[600px] xl:h-[600px] lg:w-[600px] lg:h-[600px] md:w-[450px] md:h-[450px] sm:w-[400px] sm:h-[400px] w-[300px] h-[300px]'
      >
        <Image src='/profileImg.png' alt='profile-img' width={500} height={500} />
      </div>
    </div>
  )
}

export default Profile