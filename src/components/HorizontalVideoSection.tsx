import React from 'react';
import asset_horizontalsteamingbgmp4_1 from '../assets/images/horizontal_steaming_bg.mp4';
import asset_horizontalsteamingstaticjpg_2 from '../assets/images/horizontal_steaming_static.jpg';

// Minimal, crisp SVGs matching the reference closely
const CurtainIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4h20M4 4v16a2 2 0 002 2h0a2 2 0 002-2v-8c0-2-2-4-4-4M20 4v16a2 2 0 01-2 2h0a2 2 0 01-2-2v-8c0-2 2-4 4-4"/></svg>;
const PillowIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="12" cy="12" r="1.5" /><path d="M5 7L7 9M19 7l-2 2M5 17l2-2M19 17l-2-2"/></svg>;
const MattressIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="8" width="20" height="8" rx="1" /><path d="M2 12h20M7 8v4M12 8v4M17 8v4"/></svg>;
const BlanketIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 8h16v10a2 2 0 01-2 2H6a2 2 0 01-2-2V8z" /><path d="M4 12c4 2 8-2 16 0" /><path d="M4 16c4 2 8-2 16 0" /></svg>;
const JeansIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h12l-1 16h-3.5l-1.5-8-1.5 8H7L6 4z"/><path d="M10 4v3M14 4v3"/></svg>;
const JacketIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.47a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.47a2 2 0 00-1.34-2.23z"/><path d="M12 2v20"/></svg>;

const items = [
  { icon: CurtainIcon, label: 'Штори' },
  { icon: PillowIcon, label: 'Подушки' },
  { icon: MattressIcon, label: 'Матрац' },
  { icon: BlanketIcon, label: 'Покривало' },
  { icon: JeansIcon, label: 'Джинси' },
  { icon: JacketIcon, label: 'Піджаки' },
];

export default function HorizontalVideoSection() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] flex flex-col justify-between overflow-hidden">
      {/* Background Video (Hidden) 
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={asset_horizontalsteamingbgmp4_1} type="video/mp4" />
      </video>
      */}

      {/* Static Background Image */}
      <img 
        src={asset_horizontalsteamingstaticjpg_2} 
        alt="Horizontal Steaming" 
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dotted Mask & Gradients for text visibility */}
      <div className="absolute inset-0 bg-black/20 sm:bg-black/40 z-0"></div>
      <div 
        className="absolute inset-0 z-0 opacity-40" 
        style={{ 
          backgroundImage: 'radial-gradient(#000000 2px, transparent 2px)', 
          backgroundSize: '8px 8px' 
        }} 
      ></div>
      {/* Dark gradients at top and bottom to ensure text readability without hiding the center */}
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/90 to-transparent z-0 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 to-transparent z-0 pointer-events-none"></div>

      {/* Content Top - Text */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-16">
        <div className="max-w-4xl text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4 leading-tight tracking-tight drop-shadow-2xl">
            ЄДИНИЙ РУЧНИЙ ВІДПАРЮВАЧ,<br className="hidden sm:block" />
            ЯКИЙ ПРАЦЮЄ НАВІТЬ ГОРИЗОНТАЛЬНО
          </h2>
          <p className="text-lg sm:text-2xl md:text-2xl text-magio-gold font-medium drop-shadow-xl">
            Відпарюйте постіль прямо на ліжку
          </p>
        </div>
      </div>

      {/* Content Bottom - Icons */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pb-8 md:pb-12">
        <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 max-w-5xl mx-auto md:mx-0">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group flex-1 min-w-[100px] max-w-[120px] sm:max-w-[140px]">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl flex items-center justify-center mb-3 shadow-xl group-hover:bg-magio-gold/20 group-hover:border-magio-gold/50 transition-all duration-300 text-white group-hover:text-magio-gold">
                <item.icon />
              </div>
              <span className="text-white text-sm sm:text-base font-medium tracking-wide drop-shadow-md text-center">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
