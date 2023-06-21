"use client";

import Logo from '@/components/Logo';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {

  const [openMobileNav, setOpenMobileNav] = useState(false);


  return (
    <>
    {/* Mobile Navbar */}
      <nav className='block lg:hidden bg-[#F7F7F7]'>
        <div className='max-w-7xl mx-auto md:px-[25px] px-[15px] py-[25px]'>

          <div className='flex items-center justify-between '>
            {/* Logo */}
            <Logo />
            <div className='flex items-center gap-7'>
              <div className='relative w-[24px] h-[22.4px]'>
                <Image 
                  src="/icons/cart.png"
                  alt="cart"
                  fill
                />
              </div>
              <div className='relative w-[24px] h-[13.71px]' onClick={() => setOpenMobileNav(prev => !prev)}>
                <Image 
                  src="/icons/menubar.png"
                  alt="menubar"
                  fill
                />
              </div>
            </div>
            
          </div>

          {/* MenuItems */}
          <div className={`${openMobileNav ? "h-[300px]" : "h-0"}  overflow-hidden flex items-center flex-col justify-center space-y-7 transition-all duration-300`}>
            <Link className='font-[400] text-[22px] text-[#737373]' href="/">Home</Link>
            <Link className='font-[400] text-[22px] text-[#737373]' href="/">Product</Link>
            <Link className='font-[400] text-[22px] text-[#737373]' href="/">Pricing</Link>
            <Link className='font-[400] text-[22px] text-[#737373]' href="/">Contact</Link>
          </div>
          
          
        </div>
      </nav>

      {/* Desktop Navbar */}
      <nav className='hidden lg:block'>
        <div className="max-w-7xl mx-auto px-[25px] md:px-[35px] py-[25px]">
          <div className='flex items-center justify-between'>
            <Logo />

            <div className={`flex items-center flex-row transition-all duration-300 space-x-5`}>
              <Link className='font-[400] text-[14px] text-[#737373]' href="/">Home</Link>
              <Link className='font-[400] text-[14px] text-[#737373]' href="/">Product</Link>
              <Link className='font-[400] text-[14px] text-[#737373]' href="/">Pricing</Link>
              <Link className='font-[400] text-[14px] text-[#737373]' href="/">Contact</Link>
            </div>

            <div className='flex items-center gap-14 text-[14px]'>
              <Link href="\login" className='text-[#23A6F0]'>Login</Link>
              <Link href="\register" className='px-7 bg-[#23A6F0] py-3 rounded-[5px] text-white'>Become a member</Link>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar