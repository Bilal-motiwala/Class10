import React from 'react'
import Image from "next/image";
const Header = () => {
  return (
    <>
    <header className='sticky top-0 z-30 bg-main backdrop-blur-3xl print:hidden w-full h-16 bg-blue-600 flex justify-between items-center p-6'>

    <div className='mt-10'> <img src="/bmstore.png" alt="logo" className=' w-24 flex color-transparent'/></div>
    
    <div className='items-center  text-[#FAF9F6] sm:flex lg:gap-10 bis_skin_checked="1" '>
  <a href="#BM-STORE">
  <div className='menu_btns capitalize text-black py-2 text-center '>BM-STORE</div>
  </a>
  </div>

    </header>
    </>
  )
}

export default Header
