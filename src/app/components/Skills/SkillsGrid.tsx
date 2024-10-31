'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';
import SkillCircle from './SkillCircle';
import Highlight from '@/app/assests/Highlight_10.png';
import SkillsBgLarge from '@/app/assests/Skills.png';
import SkillsBgSmall from '@/app/assests/SkillsBg.png';

const SkillsGrid = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div 
      className={`relative w-full ${isMobile ? 'h-auto' : 'min-h-screen'}bg-cover bg-center bg-no-repeat bg-contain`} 
      style={{ backgroundImage: `url(${isMobile ? SkillsBgSmall.src : SkillsBgLarge.src})` }}
    >
      <div className="ml-10 z-10 md:ml-[130px] lg:mt-10">
        <Image src={Highlight} alt="Highlight" className="ml-[32px] md:ml-[120px]" />
        <h1 className="font-poppins text-[24px] md:text-[64px] mt-[-30px] font-semibold text-gradient-two">Skills</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-8 z-10">
        <SkillCircle percentage={90} label="Figma / Adobe XD" />
        <SkillCircle percentage={80} label="UI Design" />
        <SkillCircle percentage={70} label="Prototyping" />
        <SkillCircle percentage={70} label="Box Model" />
        <SkillCircle percentage={70} label="Information Architecture" />
        <SkillCircle percentage={70} label="UX Design" />
        <SkillCircle percentage={100} label="Business Model Canvas" />
        <SkillCircle percentage={85} label="Design Systems" />
      </div>
    </div>
  );
};

export default SkillsGrid;
