import React from 'react'

const Natural = () => {
  return (
    <div className='py-32 flex gap-10 justify-center'>
        <div className='bg-[url(./Card1.png)] w-[682px] h-[367px] size-[40px]'>
            <h1 className='font-yellowtail text-[#FFFFFF] mt-20 ml-14'>Natural!!</h1>
            <p className='text-[#FFFFFF] font-roboto ml-14'>Get Garden Fresh Fruits</p>
        </div>

        <div className='bg-[url(./Card2.png)] w-[682px] h-[367px]'>
            <h1 className='font-yellowtail text-[#7EB693] mt-20 ml-14'>Offer!!</h1>
            <p className='text-[#274C5B] font-roboto ml-14'>Get 10% off on Vegetables</p>
        </div>
    </div>
  )
}

export default Natural
