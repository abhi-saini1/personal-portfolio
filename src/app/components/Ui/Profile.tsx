'use client'
import Image from 'next/image'
import React from 'react'
const Profile = () => {
  return (
    <div className='w-full h-full'>
        <div
        className='xl:w-[600px] xl:h-[600px] w-[400px] h-[400px]'
      >
        <Image src='/profileImg.png' alt='profile-img' width={500} height={500} />
      </div>
    </div>
  )
}

export default Profile