import React from 'react';
import { Sparkles, Wind, ShieldCheck, Clock, ThumbsUp, Settings, Feather, Droplets, CigaretteOff, UtensilsCrossed, Wind as WindIcon, Shirt, Bug } from 'lucide-react';
import asset_clothessteamingbgjpg_1 from '../assets/images/clothes_steaming_bg.jpg';
import asset_clothessteamingbgjpg_2 from '../assets/images/clothes_steaming_bg.jpg';

export default function Benefits() {
  return (
    <section className="py-24 bg-magio-light">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Why Choose Magio */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-magio-black mb-4">ЧОМУ ПОКУПЦІ ОБИРАЮТЬ MAGIO?</h2>
            <div className="w-24 h-1 bg-magio-gold mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Wind, title: 'Потужна пара', desc: 'Глибоко проникає в тканину' },
              { icon: Clock, title: 'Економія часу', desc: 'Вдвічі швидше за праску' },
              { icon: ShieldCheck, title: 'Безпека', desc: 'Автовимкнення через 8 хв' },
              { icon: Feather, title: 'Легкість', desc: 'Зручно тримати в руці' },
              { icon: Settings, title: 'Універсальність', desc: 'Для будь-яких тканин' },
              { icon: Droplets, title: 'Без плям', desc: 'Захист від протікання' },
              { icon: Sparkles, title: 'Дезінфекція', desc: 'Знищує запахи та бактерії' },
              { icon: ThumbsUp, title: 'Надійність', desc: 'Гарантія якості' },
            ].map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center group">
                <div className="w-14 h-14 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-magio-gold/10 transition-colors">
                  <benefit.icon className="w-7 h-7 text-magio-dark group-hover:text-magio-gold transition-colors" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-500">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: More than ironing */}
        <div className="bg-[#f8f9fa] rounded-3xl overflow-hidden shadow-lg border border-gray-100 relative">
          
          {/* Mobile Background Image */}
          <div className="absolute inset-0 block md:hidden z-0">
             <img src={asset_clothessteamingbgjpg_1} className="w-full h-full object-cover opacity-20" alt="" />
             <div className="absolute inset-0 bg-gradient-to-b from-[#f8f9fa] via-transparent to-[#f8f9fa]"></div>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-stretch">
            
            {/* Left side text & list */}
            <div className="w-full md:w-[45%] p-6 sm:p-8 md:p-10 flex flex-col justify-center">
              
              <div className="text-center md:text-left mb-8">
                <h2 className="text-2xl md:text-3xl font-extrabold text-magio-black mb-1 uppercase tracking-tight leading-tight">
                  НЕ ЛИШЕ ПРАСУЄ,
                </h2>
                <h2 className="text-2xl md:text-3xl font-extrabold text-magio-black uppercase tracking-tight leading-tight">
                  А ЩЕ Й ОСВІЖАЄ РЕЧІ ПАРОЮ
                </h2>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  { icon: CigaretteOff, text: 'Прибирає запах сигарет' },
                  { icon: UtensilsCrossed, text: 'Запах їжі' },
                  { icon: WindIcon, text: 'Запах тіла' },
                  { icon: Shirt, text: 'Освіжає без прання' },
                  { icon: Bug, text: 'Гаряча пара допомагає знищувати до 99.99% бактерій*' },
                ].map((point, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#e0c6a8] flex items-center justify-center shrink-0 bg-white shadow-sm text-magio-black">
                      <point.icon className="w-5 h-5 stroke-[1.5]" />
                    </div>
                    <span className={`text-magio-black font-medium leading-snug ${idx === 4 ? 'text-xs sm:text-sm' : 'text-sm sm:text-base'}`}>
                      {point.text}
                    </span>
                  </div>
                ))}
                <div className="pt-2">
                  <span className="text-[10px] text-gray-500">*При обробці парою відповідно до досліджень виробника</span>
                </div>
              </div>
            </div>

            {/* Right side image (Desktop only) */}
            <div className="hidden md:block w-[55%] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] via-[#f8f9fa]/50 to-transparent w-24 z-10"></div>
              <img 
                src={asset_clothessteamingbgjpg_2} 
                alt="Освіжає речі парою" 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
