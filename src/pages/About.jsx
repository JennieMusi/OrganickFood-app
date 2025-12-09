import React from 'react'

const About = () => {
  return (
    <div className='flex justify-between items-center w-5/6 m-auto py-5'>
      <div className=''>
        <img src="/Fruits.png" alt="" />
      </div>

        <div className='py-32 flex gap-10 justify-center'>
        <div className='w-[682px] h-[367px] size-[40px]'>
            <h1 className='font-yellowtail text-[#7EB693] mt-20 ml-14'>About us</h1>
            <p className='text-[#274C5B] font-roboto ml-14 '>We Believe in Working Accredited Farmers</p>
            <h1 className='w-[669px] text-[#525C60] h-[90px] size-[18px]'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</h1>

            <img src="1.png" alt="" />
            <img src="2 (3).png" alt="" />

            <button className='bg-[#274C5B] font-[Roboto] radius-[16px] gap-[10px]'>Explore Now</button>

            <button className='bg-[#274C5B] font-[Roboto] radius-[16px] gap-[10px]'>Explore Now</button>
        </div>
      </div>
    </div>
  );
};

export default About;