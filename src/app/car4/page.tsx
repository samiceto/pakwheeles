import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-blue-100 text-center flex flex-col gap-7 pt-10 h-full'>
        <p className='text-center font-bold underline text-2xl'>Toyota Corolla 2024 Price in Pakistan, Images, Reviews & Specs</p>
        <Image src="/45.jpg" alt="/" width={500} height={500} className='mx-auto h-52 w-auto'></Image>
        <div className='flex w-fit mx-auto gap-1'>
            <button className='text-white bg-blue-600 py-2 px-6 rounded-sm text-xs'>Make Payment</button>
            <button className='text-black bg-white border-blue-600 border py-2 px-6 rounded-sm text-xs'>Make Payment</button>
            <button className='text-black bg-white border-blue-600 border py-2 px-6 rounded-sm text-xs'>Make Payment</button>
            <button className='text-black bg-white border-blue-600 border py-2 px-6 rounded-sm text-xs'>Make Payment</button>
            
            </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eos dicta cupiditate dolor ipsum excepturi minus velit amet magni! Quas, consequuntur ad? Amet nam unde rem quasi explicabo culpa et?</p>
        <p className='font-semibold text-lg'>Vehicle Description</p>
        <div className='flex w-fit mx-auto'>
        <p className='text-xs'><span className='font-bold'>Number of Doors: </span>4</p>
        <p className='text-xs'><span className='font-bold'> Engine:</span>1800 cc</p>
        <p className='text-xs'><span className='font-bold'> Condition: </span>8.5 / 10</p>
        <p className='text-xs'><span className='font-bold'> Driven: </span>1500 KM</p>
        <p className='text-xs'><span className='font-bold'> Suspension type: </span>Soft Suspension</p>
        <p className='text-xs'><span className='font-bold'> Avg: </span>13 KM pr ltr</p>
        <p className='text-xs'><span className='font-bold'> Transmission: </span>Automatic</p>
        <p className='text-xs'><span className='font-bold'> Fule Type: </span>High Octane</p>

        </div>
        <p className='text-green-500 text-lg'>PKR 50'000</p>
        <button className='text-white bg-blue-600 py-3 px-7 rounded-md mx-auto'><Link href="/form">Make Payment</Link></button>
    </div>
  )
}

export default page
