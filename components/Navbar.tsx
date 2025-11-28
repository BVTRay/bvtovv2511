import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  logoUrl?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ logoUrl }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: '首页', id: SectionId.HOME },
    { label: '企业简介', id: SectionId.ABOUT },
    { label: '资质', id: SectionId.QUALIFICATIONS },
    { label: '核心团队', id: SectionId.TEAM },
    { label: '业务体系', id: SectionId.BUSINESS },
    { label: '合作伙伴', id: SectionId.PARTNERS },
    { label: '联系我们', id: SectionId.CONTACT },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-black/50 backdrop-blur-xl border-white/10 py-4 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div 
          className="cursor-pointer flex items-center gap-3 group" 
          onClick={() => scrollToSection(SectionId.HOME)}
        >
          <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-500 group-hover:rotate-180">
             <div className="w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-red-900 absolute top-0 left-0 opacity-80"></div>
             <div className="w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent border-b-red-600 absolute top-[8px] left-[5px]"></div>
          </div>
          <h1 className="text-xl md:text-2xl font-serif font-bold tracking-widest text-white group-hover:text-red-500 transition-colors">
            不恭文化
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-xs uppercase tracking-[0.15em] text-gray-400 hover:text-white hover:scale-105 transition-all duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-red-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl z-40 transform transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-serif text-gray-200 hover:text-red-500 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <button onClick={() => setMobileMenuOpen(false)} className="absolute top-8 right-8 text-white">
            <X size={32} />
          </button>
      </div>
    </nav>
  );
};