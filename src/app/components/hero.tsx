import React from 'react'

const Hero = () => {
  return (
    <div className='border-[1.4px] flex flex-col items-center md:flex-row py-7 gap-10 w-fit md:px-20 px-4 pt-10 m-10 mx-auto relative'>
        <div className='absolute font-bold -top-4 md:left-40 left-6 text-center text-lg opacity-100'><h1 className='bg-white px-5 opacity-80'>Sell Your Car on PakWheels and Get the Best Price</h1></div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-blue-800 font-semibold'>Post Your Ad on Pakwheels</h1>
            <p className='text-sm'><span className='text-green-600'>✓</span> Post your Ad for Free in 3 Easy Steps</p>
            <p className='text-sm'><span className='text-green-600'>✓</span> Get Genuine offers from Verified Buyers</p>
            <p className='text-sm'><span className='text-green-600'>✓</span> Sell your car Fast at the Best Price</p>
            <button className='bg-red-700 rounded-md py-2 px-4 mx-8 text-white text-[1rem] font-semibold'>Post Your Ad</button>



        </div>
        <div className='w-[2px] h-40 bg-slate-500 my-10 opacity-25 relative'><h1 className='opacity-100 font-bold absolute top-16 -left-3 bg-white z-10'>OR</h1></div>
        
        <div className='flex flex-col gap-3'>
        <h1 className='text-blue-800 font-semibold'>Try PakWheels Sell It For Me</h1>
            <p className='text-sm'><span className='text-green-600'>✓</span> Dedicated Sales Expert to Sell your Car</p>
            <p className='text-sm'><span className='text-green-600'>✓</span> We Bargain for you and share the Best Offer</p>
            <p className='text-sm'><span className='text-green-600'>✓</span> We ensure Safe & Secure Transaction</p>
            <button className='bg-blue-400 rounded-md py-2 px-4 mx-8 text-white text-[1rem] font-semibold'> Ragister Your Car</button>


        </div>
    </div>
  )
}

export default Hero