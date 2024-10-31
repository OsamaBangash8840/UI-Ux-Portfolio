'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import AboutBgLarge from '@/app/assests/AboutLg.svg';
import AboutBgSmall from '@/app/assests/About.png';
import Sections from './Sections';
import AboutUsHighlight from '@/app/assests/Highlight_04.png';

const AboutMe = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on mount to set initial state

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className="relative w-full h-[307px] md:h-[782px] lg:h-[1178px] bg-cover bg-center" 
      style={{ backgroundImage: `url(${isMobile ? AboutBgSmall.src : AboutBgLarge.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="flex justify-center pt-5 pb-4 md:pt-[78px] md:pb-[65px] lg:pt-[98px] lg:pb-[95px]">
        <h1 className="font-poppins text-[24px] md:text-[64px] font-semibold text-white">About Me</h1>
      </div>
      <div className=" z-10">
        <Sections/>
        <div className='absolute top-[90px] right-[2px] md:top-[29%] md:right-[4%]  lg:top-[25%] '>
        <Image
        src={AboutUsHighlight}
        className=' w-[36px] h-[22px] md:w-[83.92px] md:h-[51px]'
        alt='About Us Highlight'
        />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
