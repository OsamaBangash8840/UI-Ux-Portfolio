// src/components/SkillCircle.tsx

import React from 'react';

interface SkillCircleProps {
  percentage: number;
  label: string;
}

const SkillCircle: React.FC<SkillCircleProps> = ({ percentage, label }) => {
  // Set radius based on screen size
  const baseRadius = 50;
  const mediumRadius = 100; // Radius for medium screens
  const isMediumScreen = typeof window !== 'undefined' && window.innerWidth >= 768;

  // Dynamically set the radius and dimensions based on screen size
  const radius = isMediumScreen ? mediumRadius : baseRadius;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <svg
        className={`${isMediumScreen ? 'w-[220px] h-[220px]' : 'w-[120px] h-[120px]'}`}
        width={isMediumScreen ? "220" : "120"}
        height={isMediumScreen ? "220" : "120"}
      >
        <circle
          cx={isMediumScreen ? "110" : "60"}
          cy={isMediumScreen ? "110" : "60"}
          r={radius}
          stroke="#E5E7EB" // light gray background stroke
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx={isMediumScreen ? "110" : "60"}
          cy={isMediumScreen ? "110" : "60"}
          r={radius}
          stroke="#6366F1" // purple color for progress
          strokeWidth="8"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
        <text
          x={isMediumScreen ? "110" : "60"}
          y={isMediumScreen ? "115" : "65"}
          textAnchor="middle"
          className={`${isMediumScreen ? 'text-[24px]' : 'text-[15px]'} text-gray-700 font-semibold font-poppins`}
        >
          {percentage}%
        </text>
      </svg>
      <p className="mt-2 text-center text-gray-600">{label}</p>
    </div>
  );
};

export default SkillCircle;
