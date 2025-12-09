import React from 'react'

const Hero = () => {
  return (
    <div className='flex items-center bg-[#F1EFF0]'>
      <div className='w-1/2 px-36'>
        <p className='font-yellowtail text-[#68A47F] text-[36px]'>100% Natural Food</p>
        <h1 className='text-[#274C5B] font-[Roboto] text-[46px]'>Choose the best healthier way of life</h1>
        <button className='bg-[#EFD372] font-[Roboto] '>Explore Now</button>
      </div>
      <div className='w-1/2'>
        <img src="Banner.png" alt="" className='' />
      </div>
    </div>
  )
}

export default Hero