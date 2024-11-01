import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
    <div className='bg-blue-100 text-center flex flex-col gap-7 pt-10 h-screen'>
        <h1 className='font-bold text-lg mb-20'>Enter Your Details</h1>
        <input type="text" placeholder='Enter your Name' className='rounded-sm py-1 px-2 w-60 mx-auto' />
        <input type="text" placeholder='Enter your Email' className='rounded-sm py-1 px-2 w-60 mx-auto' />
        <input type="text" placeholder='Enter your Card number' className='rounded-sm py-1 px-2 w-60 mx-auto' />
        <input type="text" placeholder='Enter your Address' className='rounded-sm py-1 px-2 w-60 mx-auto' />
        <button className='text-white bg-blue-600 py-3 px-7 rounded-md mx-auto text-xs'><Link href="/thanks">Place your Order</Link></button>

    </div>
  )
}

export default page