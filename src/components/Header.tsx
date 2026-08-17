import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import asset_magiologopng_1 from '../assets/images/magio_logo.png';

export default function Header({ onOpenPopup }: { onOpenPopup: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-dark py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer z-10" onClick={() => scrollTo('hero')}>
            <img src={asset_magiologopng_1} alt="Magio Logo" className="h-5 md:h-8 object-contain" />
          </div>

          {/* Mobile CTA (Math Center) */}
          <div className="md:hidden absolute left-1/2 -translate-x-1/2 z-10 hidden">
            <button 
              onClick={onOpenPopup}
              className="bg-gradient-gold text-magio-black px-5 py-2 rounded-full font-bold text-[11px] tracking-wider shadow-[0_0_15px_rgba(212,175,55,0.3)] active:scale-95 transition-all uppercase"
            >
              ЗАМОВИТИ
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {['Характеристики', 'Переваги', 'Застосування', 'Відгуки'].map((item, i) => (
              <button 
                key={i}
                onClick={() => scrollTo(item === 'Застосування' ? 'before-after' : item === 'Переваги' ? 'problem-solution' : item === 'Характеристики' ? 'specs' : 'social-proof')}
                className="text-sm font-medium text-gray-300 hover:text-magio-gold transition-colors"
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block z-10">
            <button 
              onClick={onOpenPopup}
              className="bg-gradient-gold text-magio-black px-6 py-2.5 rounded-full font-bold text-sm tracking-wide shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)] transition-all"
            >
              ЗАМОВИТИ
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white p-2 z-10 -mr-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-magio-black border-t border-white/10 p-4 flex flex-col gap-4 shadow-2xl">
          {['Характеристики', 'Переваги', 'Застосування', 'Відгуки'].map((item, i) => (
            <button 
              key={i}
              onClick={() => scrollTo(item === 'Застосування' ? 'before-after' : item === 'Переваги' ? 'problem-solution' : item === 'Характеристики' ? 'specs' : 'social-proof')}
              className="text-left text-lg font-medium text-gray-300 hover:text-magio-gold py-2"
            >
              {item}
            </button>
          ))}
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenPopup(); }}
            className="bg-gradient-gold text-magio-black px-6 py-3 rounded-lg font-bold text-center mt-2"
          >
            ЗАМОВИТИ
          </button>
        </div>
      )}
    </header>
  );
}
