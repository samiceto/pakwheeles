import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const CCar = () => {
  return (
    <div className='px-2 py-4 bg-white w-56 shadow-lg shadow-slate-300'>
    <Image src="/1.jpg" alt="" width={500} height={500} className=''></Image>
    <p className='text-center'><Link href='/car1' className='text-blue-800 font-semibold hover:text-blue-400'>Toyota Corolla</Link></p>
    <p className='text-center text-green-500'>PKR 59.7 - 75.5 lacs</p>
    <p className='text-sm text-center'><span className='text-yellow-700'>★★★☆☆ </span> <span className='opacity-65'>622 Reviews</span></p>
</div>
  )
}

export default CCar