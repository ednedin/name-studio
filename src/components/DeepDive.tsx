import React from 'react';
import { LeftSpecs, RightSpecsMobile } from './SpecsBlocks';

export default function DeepDive() {
  return (
    <section id="specs" className="py-24 bg-magio-black text-white relative overflow-hidden lg:hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-magio-dark to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col gap-12">
          
          <LeftSpecs />
          
          <RightSpecsMobile />

        </div>
      </div>
    </section>
  );
}
