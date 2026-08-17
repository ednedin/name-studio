import React from 'react';
import { Zap, ShieldCheck, Droplets, Gift, Award, Clock, ArrowRight } from 'lucide-react';
import asset_horizontalsteamingbgmp4_1 from '../assets/images/horizontal_steaming_bg.mp4';
import asset_herobgshirtsjpg_2 from '../assets/images/hero_bg_shirts.jpg';
import asset_magiovidpariuvachheropng_3 from '../assets/images/magio-vidpariuvach-hero.png';
import asset_awardbadgetransparentpng_4 from '../assets/images/award_badge_transparent.png';
import asset_magiovidpariuvachheropng_5 from '../assets/images/magio-vidpariuvach-hero.png';
import asset_awardbadgetransparentpng_6 from '../assets/images/award_badge_transparent.png';

export default function Hero({ onOpenPopup }: { onOpenPopup: () => void }) {
  // Dual-mode visual state toggle: 'static' uses the 2-column image layout, 'video' uses a clean 1-column video background layout.
  const visualMode: 'static' | 'video' = 'video';

  return (
    <section id="hero" className={`relative min-h-[100svh] bg-magio-black pt-20 lg:pt-24 ${visualMode === 'video' ? 'pb-6 lg:pb-16' : 'pb-16'} overflow-hidden flex flex-col items-center`}>
      {/* Background Layer (Unified) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {visualMode === 'video' ? (
          <>
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            >
              <source src={asset_horizontalsteamingbgmp4_1} type="video/mp4" />
            </video>
            {/* Video Overlays */}
            <div className="absolute inset-0 bg-black/40"></div>
            <div 
              className="absolute inset-0 opacity-40" 
              style={{ backgroundImage: 'radial-gradient(#000000 2px, transparent 2px)', backgroundSize: '8px 8px' }} 
            ></div>
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-magio-black to-transparent"></div>
          </>
        ) : (
          <>
            <img 
              src={asset_herobgshirtsjpg_2} 
              alt="Фон" 
              className="w-full h-full object-cover opacity-60"
            />
            {/* Image Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-magio-black via-magio-black/80 to-transparent"></div>
          </>
        )}
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-magio-gold/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-magio-gold/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex-1 flex flex-col justify-between pt-4 lg:pt-0">
        
        <div className={`flex flex-col lg:flex-row gap-8 lg:gap-8 items-center w-full flex-1 py-8 lg:py-0 ${visualMode === 'video' ? 'lg:justify-start' : 'lg:justify-between'}`}>
          
          {/* Left Content (Text & CTA) */}
          <div className={`animate-stagger w-full flex flex-col flex-1 justify-between ${visualMode === 'video' ? 'max-w-2xl' : 'lg:w-1/2'}`}>
            
            {/* Top Text Group */}
            <div className="flex flex-col">
              <h1 className="text-[clamp(28px,7.5vw,36px)] sm:text-4xl md:text-5xl lg:text-6xl font-bold lg:font-extrabold text-white leading-[1.15] mb-2 lg:mb-4 opacity-0 animate-fade-in-up mt-2 lg:mt-0 tracking-tight">
                ВІДПАРЮВАЧ, ЯКИЙ ЗА <span className="text-gradient-gold">45 СЕКУНД</span> ЗАМІНИТЬ ПРАСКУ
              </h1>
              
              <p className="hidden md:block text-lg md:text-xl text-gray-400 mb-8 max-w-xl opacity-0 animate-fade-in-up">
                Вертикально, горизонтально, <span className="bg-magio-gold/20 text-magio-gold px-2 py-0.5 rounded-md">прасуйте постіль прямо на ліжку.</span>
              </p>
            </div>

            {/* Mobile Visual Block (Only renders in static mode on mobile to save vertical space if video is active) */}
            {visualMode === 'static' && (
              <div className="block lg:hidden w-full relative mb-2 -mt-2 flex justify-center items-center opacity-0 animate-fade-in-up z-0">
                <div className="absolute inset-0 bg-magio-gold/10 rounded-full blur-[60px] -z-10"></div>
                <div className="relative w-[50%] max-w-[180px]">
                  <img 
                    src={asset_magiovidpariuvachheropng_3} 
                    alt="Magio Steamer" 
                    className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.2)] relative z-10"
                  />
                  {/* Mobile Medal */}
                  <img 
                    src={asset_awardbadgetransparentpng_4} 
                    alt="№1 Відпарювач 2024" 
                    className="absolute -bottom-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 object-contain z-20 drop-shadow-xl"
                  />
                </div>
              </div>
            )}

            {/* Bottom CTA Group */}
            <div className="flex flex-col mt-auto w-full z-10 relative">
              
              {/* Mobile: Feature List (Moved to bottom group, right above price) */}
              <div className={`flex lg:hidden flex-col gap-[clamp(6px,1.5vh,12px)] sm:gap-2 mb-[clamp(16px,3vh,24px)] opacity-0 animate-fade-in-up relative z-10`}>
                {[
                  { icon: Zap, text: 'Потужність 1700W' },
                  { icon: ShieldCheck, text: 'Керамічна підошва' },
                  { icon: Droplets, text: 'Система "Антикрапля"' },
                  { icon: Clock, text: 'Готовий за 45 сек' },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-gray-300">
                    <feature.icon className="w-[clamp(16px,4.5vw,20px)] h-[clamp(16px,4.5vw,20px)] text-magio-gold shrink-0" />
                    <span className="text-[clamp(12px,3.5vw,15px)] sm:text-xs font-medium leading-tight drop-shadow-md">{feature.text}</span>
                  </div>
                ))}
              </div>

              <div className="mb-[clamp(12px,2vh,20px)] lg:mb-4 opacity-0 animate-fade-in-up flex items-end">
                <span className="text-gray-400 line-through text-[clamp(16px,4vw,20px)] sm:text-xl mr-3 mb-1">2 450 грн</span>
                <span className="text-[clamp(30px,8vw,36px)] sm:text-4xl font-extrabold text-white leading-none">1 695 <span className="text-[clamp(20px,5vw,24px)] sm:text-2xl">грн</span></span>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full opacity-0 animate-fade-in-up">
                <button 
                  onClick={onOpenPopup}
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-gold text-magio-black px-6 py-[clamp(12px,2vh,16px)] sm:py-4 rounded-full font-bold text-[clamp(15px,4vw,18px)] sm:text-lg tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-105 transition-all duration-300 w-full sm:w-auto shrink-0 z-20"
                >
                  ЗАМОВИТИ ЗІ ЗНИЖКОЮ
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                
                <div className="flex items-center gap-2 sm:gap-3 text-magio-gold w-full sm:w-auto justify-center sm:justify-start z-20 relative shrink-0">
                  <Gift className="w-[clamp(16px,4vw,20px)] h-[clamp(16px,4vw,20px)] sm:w-5 sm:h-5 animate-pulse-slow shrink-0" />
                  <span className="text-[clamp(11px,3vw,14px)] sm:text-sm font-bold uppercase tracking-wider">Рукавичка у подарунок</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual (Desktop Only - Only renders in static mode) */}
          {visualMode === 'static' && (
            <div className="relative lg:h-[600px] hidden lg:flex items-center justify-center opacity-0 animate-fade-in-up w-full lg:w-1/2" style={{ animationDelay: '300ms' }}>
              <div className="relative w-full max-w-md flex items-center justify-center">
                <img 
                  src={asset_magiovidpariuvachheropng_5} 
                  alt="Magio 1700W Преміальний відпарювач" 
                  className="w-full h-auto object-contain z-10 drop-shadow-[0_0_20px_rgba(212,175,55,0.15)] relative"
                />

                <img 
                  src={asset_awardbadgetransparentpng_6} 
                  alt="№1 Відпарювач 2024" 
                  className="absolute -bottom-8 -right-16 w-56 h-56 xl:w-64 xl:h-64 object-contain z-30 drop-shadow-2xl"
                />
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Desktop Feature Line (Always at the absolute bottom of the section) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-auto hidden lg:block pb-4">
        <div className="flex items-center gap-8 pt-8 border-t border-white/10 opacity-0 animate-fade-in-up">
          {[
            { icon: Zap, text: 'Потужність 1700W' },
            { icon: ShieldCheck, text: 'Керамічна підошва' },
            { icon: Droplets, text: 'Система "Антикрапля"' },
            { icon: Clock, text: 'Готовий за 45 сек' },
          ].map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2 text-gray-300 shrink-0">
              <div className="text-magio-gold">
                <feature.icon className="w-5 h-5" />
              </div>
              <span className="text-sm font-medium">{feature.text}</span>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
}
