'use client'

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

export default function Items({ children: slides = [], autoSlide = false, autoSlideInterval = 3000 }) {
  const [curr, setCurr] = useState(0);

  const prev = useCallback(() => setCurr(curr === 0 ? slides.length - 1 : curr - 1), [curr, slides.length]);
  
  const next = useCallback(() => setCurr(curr === slides.length - 1 ? 0 : curr + 1), [curr, slides.length]);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);

  if (slides.length === 0) return null;

  return (
    <div className="overflow-hidden relative w-full mx-auto">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="flex-shrink-0 w-full">
            {slide}
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronLeft size={40} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${curr === i ? "p-2" : "bg-opacity-50"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
