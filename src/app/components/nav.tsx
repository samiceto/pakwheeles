import React from 'react'
import Image from 'next/image'
import { Span } from 'next/dist/trace'

const Nav = () => {
  return (
    <div className='bg-black h-20 px-11 py-1'>
<div className='flex justify-between'>
    <div className='flex'>
        <Image src="/mobile.png" alt="#" width={500} height={500} className='h-[15px] w-auto'></Image>
        <p className='text-white text-[0.6rem]'>Download App Via SMS</p>
    </div>
    <div className='flex gap-2'>
    <Image src="/urdu.png" alt="#" width={500} height={500} className='h-[15px] w-auto'></Image>
    <p className='text-white text-[0.6rem] font-semibold'><span className='text-gray-500'>|</span> Sign Up</p>
    <p className='text-white text-[0.6rem] font-semibold'><span className='text-gray-500'>|</span> Sign In</p>


    </div>
</div>
<hr className='opacity-20 mt-1'></hr>
<div className='flex my-2 justify-between'>
    <div>
    <Image src="/logo.png" alt="#" width={500} height={500} className='h-[30px] w-auto pb-2 mt-1'></Image>
    </div>
    <div className='flex gap-[5vw] mt-2'>
        <div className='text-white text-[0.6rem]'>Used Cars <span className='text-[0.4rem]'>▼</span></div>
        <div className='text-white text-[0.6rem]'>New Cars <span className='text-[0.4rem]'>▼</span></div>
        <div className='text-white text-[0.6rem]'>Bikes <span className='text-[0.4rem]'>▼</span></div>
        <div className='text-white text-[0.6rem]'>Auto Store <span className='text-[0.4rem]'>▼</span></div>
        <div className='text-white text-[0.6rem]'>Video</div>
        <div className='text-white text-[0.6rem]'>Forums</div>
        <div className='text-white text-[0.6rem]'>Blog</div>
        <div className='text-white text-[0.6rem] relative'>More<span className='text-[0.4rem]'>▼</span><div className='text-[0.4rem] bg-blue-900 rounded-full absolute -top-2 left-3 px-1'>New</div></div>
    </div>
    <div>
        <button className='bg-red-600 rounded-sm py-1 px-2 text-white text-[0.6rem] font-semibold'>Post an Ad <span className='text-[0.4rem]'>▼</span></button>
    </div>
</div>

    </div>
   
  )
}

export default Nav