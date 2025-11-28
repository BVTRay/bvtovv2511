import React, { useRef, useEffect, useState } from 'react';

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  bgImage?: string;
}

export const Section: React.FC<SectionProps> = ({ id, className = "", children, bgImage }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current); // eslint-disable-line react-hooks/exhaustive-deps
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={ref}
      className={`relative w-full overflow-hidden ${className}`}
      style={bgImage ? { backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
    >
      {/* Overlay for bg images */}
      {bgImage && <div className="absolute inset-0 bg-black/80 z-0"></div>}
      
      <div 
        className={`relative z-10 container mx-auto px-6 py-24 md:py-32 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {children}
      </div>
    </section>
  );
};