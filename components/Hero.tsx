import React from 'react';
import { SectionId } from '../types';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HOME}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 animate-[fadeIn_1.5s_ease-out]">
        {/* Logo Construction */}
        <div className="mb-12 relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center filter drop-shadow-[0_0_50px_rgba(220,20,60,0.6)] hover:scale-105 transition-transform duration-700">
            <div className="w-0 h-0 border-l-[60px] border-r-[60px] border-b-[100px] md:border-l-[80px] md:border-r-[80px] md:border-b-[140px] border-l-transparent border-r-transparent border-b-red-900 absolute top-0 opacity-90"></div>
            <div className="w-0 h-0 border-l-[40px] border-r-[40px] border-b-[70px] md:border-l-[60px] md:border-r-[60px] md:border-b-[100px] border-l-transparent border-r-transparent border-b-red-600 absolute top-[25px]"></div>
        </div>

        <h1 className="text-5xl md:text-8xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-500 tracking-[0.1em] mb-6 drop-shadow-lg">
          不恭文化
        </h1>
        
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-red-600 to-transparent mb-8"></div>
        
        <p className="text-gray-400 text-sm md:text-xl tracking-[0.6em] font-light uppercase mb-12 mix-blend-screen">
          Bugong Culture
        </p>
        
        <div className="glass-card px-6 py-3 rounded-full flex gap-4 md:gap-12 text-gray-300 text-[10px] md:text-sm tracking-widest font-light uppercase border-white/5">
          <span>Beijing</span>
          <span className="text-red-500">•</span>
          <span>Shenzhen</span>
          <span className="text-red-500">•</span>
          <span>Nanjing</span>
          <span className="text-red-500">•</span>
          <span>Hainan</span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 cursor-pointer hover:text-white transition-colors">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};