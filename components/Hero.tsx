import React from 'react';
import { SectionId } from '../types';
import { ArrowDown } from 'lucide-react';
import { LogoIcon, LogoTextVector } from './Logo';

export const Hero: React.FC = () => {
  return (
    <section 
      id={SectionId.HOME}
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Content */}
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

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/30 cursor-pointer hover:text-white transition-colors">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};