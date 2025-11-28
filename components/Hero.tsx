
import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { ArrowDown } from 'lucide-react';
import { LogoIcon, LogoTextVector } from './Logo';

export const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 2);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section 
      id={SectionId.HOME}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* 
        SLIDE 1: Classic Brand Intro (Dark Theme)
        Uses the global background from App.tsx (transparent bg here)
      */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
          currentSlide === 0 ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
        <div className="relative z-10 flex flex-col items-center text-center px-4 animate-[fadeIn_1.5s_ease-out]">
          {/* Logo Icon */}
          <div className="mb-6 relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center text-brand-red filter drop-shadow-[0_0_50px_rgba(172,4,28,0.6)] hover:scale-105 transition-transform duration-700">
              <LogoIcon className="w-full h-full" />
          </div>

          {/* Logo Text */}
          <div className="h-16 md:h-24 w-64 md:w-96 text-white mb-6 drop-shadow-2xl">
             <LogoTextVector className="w-full h-full" />
          </div>
          
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-brand-red to-transparent mb-8"></div>
          
          <p className="text-gray-400 text-sm md:text-xl tracking-[0.6em] font-light uppercase mb-12 mix-blend-screen">
            Bugong Culture
          </p>
          
          <div className="glass-card px-6 py-3 rounded-full flex gap-4 md:gap-12 text-gray-300 text-[10px] md:text-sm tracking-widest font-light uppercase border-white/5">
            <span>Beijing</span>
            <span className="text-brand-red">•</span>
            <span>Shenzhen</span>
            <span className="text-brand-red">•</span>
            <span>Nanjing</span>
            <span className="text-brand-red">•</span>
            <span>Hainan</span>
          </div>
        </div>
      </div>

      {/* 
        SLIDE 2: 8th Anniversary Special (Warm/Golden Theme) 
        Has its own opaque background to cover the global dark theme
      */}
      <div 
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
          currentSlide === 1 ? 'opacity-100 z-10' : 'opacity-0 z-0'
        }`}
      >
         {/* Anniversary Background Layer */}
         <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-100 to-orange-200"></div>
         {/* Cloud Texture Overlay (Simulated) */}
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?q=80&w=2000&auto=format&fit=crop')] opacity-20 bg-cover bg-center mix-blend-overlay"></div>
         
         <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-5xl">
            {/* Header: Logo & Dates */}
            <div className="flex flex-col items-center mb-8 animate-[fadeIn_1s_ease-out]">
               <div className="flex items-center gap-2 mb-4">
                 <LogoIcon className="w-8 h-8 text-brand-red" />
                 <LogoTextVector className="h-5 w-20 text-[#08080c]" />
               </div>
               <div className="flex items-center gap-4 text-brand-red/80">
                  <span className="h-px w-8 md:w-16 bg-brand-red/40"></span>
                  <span className="font-serif font-bold text-xl md:text-2xl text-brand-red tracking-widest">2017-2025</span>
                  <span className="h-px w-8 md:w-16 bg-brand-red/40"></span>
               </div>
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-brand-red to-orange-700 drop-shadow-sm mb-6 animate-[fadeIn_1.5s_ease-out]">
              八载同行 步履不停
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-[#ac041c] font-serif tracking-[0.3em] md:tracking-[0.5em] mb-16 animate-[fadeIn_2s_ease-out]">
              不恭文化八周年生日快乐
            </p>

            {/* Placeholder for the Chess Visual (If you have the image, set it as bg, but here we keep layout clean) */}
            <div className="w-full h-32 md:h-48 relative mb-12 hidden md:block opacity-50">
               {/* Decorative subtle element mimicking the board plane */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 transform"></div>
            </div>

            {/* English Footer */}
            <div className="mt-4 md:mt-0 text-brand-red/80 font-sans font-medium tracking-wide text-sm md:text-lg border-l-4 border-brand-red pl-6 animate-[fadeIn_2.5s_ease-out]">
              「 Eight Years Side by Side, Onward and Upward. 」
            </div>
            
            <div className="mt-6 flex items-center gap-2 text-brand-red/60 text-xs font-bold uppercase tracking-widest">
               <LogoIcon className="w-4 h-4" />
               Bevot 8th Ani.
            </div>
         </div>
      </div>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-24 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {[0, 1].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              currentSlide === i 
                ? 'w-8 bg-brand-red' 
                : 'w-2 bg-gray-500/50 hover:bg-brand-red/50'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 cursor-pointer z-30 hover:text-white transition-colors">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};
