import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Feature = () => {
  return (
    <div className='bg-gray-100 p-14 h-[100vh] relative'>
        <div className='flex justify-between'>
            <p className='opacity-50 bg-white rounded-[300%] p-2 px-4 absolute right-[92%] top-64 shadow-sm shadow-slate-400'>❰</p>
            <p className='opacity-50 bg-white rounded-[300%] p-2 px-4 absolute left-[92%] top-64 shadow-sm shadow-slate-400'>❱</p>
        </div>
        <div className='flex justify-between'>
            <div><h1 className='font-semibold text-lg'>Featured New Cars</h1></div>
            <div><Link href="/" className='text-blue-500'>View All New Cars</Link></div>
        </div>
        <div className='flex py-5 gap-5'>
            <div><h1 className='font-bold tex-lg'>Popular</h1><div className='h-[2px] w-full bg-blue-500 my-2'></div></div>
            <h1 className='font-semibold tex-lg'>Upcoming</h1>
            <h1 className='font-semibold tex-lg'>Newly Launched</h1>
        </div>

        <div className='flex gap-4 w-fit mx-auto'>
            <div className='px-2 py-4 bg-white w-56 shadow-lg shadow-slate-300'>
                <Image src="/1.jpg" alt="" width={500} height={500} className=''></Image>
                <p className='text-center'><Link href='/car1' className='text-blue-800 font-semibold hover:text-blue-400'>Toyota Corolla</Link></p>
                <p className='text-center text-green-500'>PKR 59.7 - 75.5 lacs</p>
                <p className='text-sm text-center'><span className='text-yellow-700'>★★★☆☆ </span> <span className='opacity-65'>622 Reviews</span></p>
            </div>
            <div className='px-2 py-4 bg-white w-56 shadow-lg shadow-slate-300'>
                <Image src="/2.png" alt="" width={500} height={500} className=''></Image>
                <p className='text-center'><Link href='/car2' className='text-blue-800 font-semibold hover:text-blue-400'>Suzuki Alto</Link></p>
                <p className='text-center text-green-500'>PKR 23.3 - 30.5 lacs</p>
                <p className='text-sm text-center'><span className='text-yellow-700'>★★★☆☆ </span> <span className='opacity-65'>622 Reviews</span></p>
            </div>
            <div className='px-2 py-4 bg-white w-56 shadow-lg shadow-slate-300'>
                <Image src="/3.jpg" alt="" width={500} height={500} className=''></Image>
                <p className='text-center'><Link href='/car3' className='text-blue-800 font-semibold hover:text-blue-400'>Honda City</Link></p>
                <p className='text-center text-green-500'>PKR 46.5 - 58.5 lacs</p>
                <p className='text-sm text-center'><span className='text-yellow-700'>★★★☆☆ </span> <span className='opacity-65'>622 Reviews</span></p>
            </div>
            <div className='px-2 py-4 bg-white w-56 shadow-lg shadow-slate-300'>
                <Image src="/4.jpg" alt="" width={500} height={500} className=''></Image>
                <p className='text-center'><Link href='/car4' className='text-blue-800 font-semibold hover:text-blue-400'>Honda Civic</Link></p>
                <p className='text-center text-green-500'>PKR 86.6 - 99.0 lacs</p>
                <p className='text-sm text-center'><span className='text-yellow-700'>★★★☆☆ </span> <span className='opacity-65'>622 Reviews</span></p>
            </div>
        </div>
    </div>
  )
}

export default Feature