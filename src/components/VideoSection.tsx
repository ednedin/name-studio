import React from 'react';
import { LeftSpecs, RightSpecsDesktop } from './SpecsBlocks';

export default function VideoSection() {
  return (
    <section id="specs" className="bg-magio-black py-16 md:py-24 relative border-t border-white/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-magio-dark to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mobile: Just the Video (Centered) */}
        <div className="lg:hidden flex justify-center w-full">
          <div className="w-full max-w-[320px] sm:max-w-sm">
            <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)] border border-white/10 bg-magio-dark">
              <iframe 
                className="absolute inset-0 w-full h-full pointer-events-none"
                src="https://www.youtube.com/embed/ReFqv1ZvpHU?autoplay=1&mute=1&controls=0&loop=1&playlist=ReFqv1ZvpHU&modestbranding=1&rel=0&playsinline=1" 
                title="Magio Steamer Demonstration" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Desktop: 3-Column Layout (Left Specs -> Video -> Right Steamer BG) */}
        <div className="hidden lg:grid grid-cols-3 gap-8 xl:gap-12 items-start">
          
          {/* Column 1: Left Specs */}
          <div>
            <LeftSpecs />
          </div>

          {/* Column 2: Video */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)] border border-white/10 bg-magio-dark">
              <iframe 
                className="absolute inset-0 w-full h-full pointer-events-none"
                src="https://www.youtube.com/embed/ReFqv1ZvpHU?autoplay=1&mute=1&controls=0&loop=1&playlist=ReFqv1ZvpHU&modestbranding=1&rel=0&playsinline=1" 
                title="Magio Steamer Demonstration" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Column 3: Right Steamer 1700W Block */}
          <div>
            <RightSpecsDesktop />
          </div>

        </div>
      </div>
    </section>
  );
}
