import React from 'react'
import SocialLinks from './Ui/SocialLinks'
import Sidebar from './Sidebar'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed z-10 w-full flex items-center justify-center'>
        <div>
        <SocialLinks/>
        </div>
        <div>
        <Sidebar/>
        </div>
    </div>
  )
}

export default Navbar