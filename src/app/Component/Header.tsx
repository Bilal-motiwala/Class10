import React from 'react'
import Image from "next/image";
const Header = () => {
  return (
    <>
    <header className='sticky top-0 z-30 bg-main backdrop-blur-3xl print:hidden w-full h-16 bg-blue-600 flex justify-between items-center p-6'>

    <div className='mt-10'> <img src="/bmstore.png" alt="logo" className=' w-24 flex color-transparent'/></div>
    <p className='text-center text-white py-2'>BM-STORE</p>
    </header>
    </>
  )
}

export default Header
