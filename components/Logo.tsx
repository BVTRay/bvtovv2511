import React from 'react';

interface LogoProps {
  className?: string;
  classNameText?: string;
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-12 h-12", showText = false, classNameText = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <svg 
        viewBox="0 0 260 220" 
        className={className} 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Approximating the geometric shard/mountain shape */}
        <path 
          d="M130 0 L260 220 H0 L130 0Z" 
          fill="none" 
        />
        {/* The solid red shape with cuts */}
        <path 
          d="M130 0 L260 220 H160 L200 150 L140 160 L160 120 L130 100 L100 120 L120 160 L60 140 L100 220 H0 L130 0Z" 
          fill="currentColor"
        />
        {/* Adding the internal white chevron/lightning detail by using a mask or just a cutout shape if needed, 
            but the path above approximates the jagged silhouette. 
            Let's refine the shape to be more "sharded" like the image.
        */}
        <path 
          d="M130 10 L20 210 H80 L90 190 L110 195 L100 170 L130 140 L160 170 L150 195 L170 190 L180 210 H240 L130 10Z" 
          fill="currentColor"
        />
      </svg>
      {showText && (
        <span className={`font-serif font-black tracking-widest ${classNameText}`}>
          不恭文化
        </span>
      )}
    </div>
  );
};

// A more precise path trying to mimic the "Raven/Mountain" look from the image
export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 85" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
     <path d="M50 2 L85 65 H65 L75 45 L50 30 L25 45 L35 65 H15 L50 2Z" fillRule="evenodd" clipRule="evenodd" style={{ display: 'none'}} />
     {/* Redrawing based on visual "Red Shards" */}
     <path d="M50 0 L100 80 H60 L75 50 L50 35 L25 50 L40 80 H0 L50 0Z" />
  </svg>
);
