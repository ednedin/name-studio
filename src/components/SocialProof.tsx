import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import asset_awardbadgejpg_1 from '../assets/images/award_badge.jpg';

export default function SocialProof() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    { q: 'Чи замінить праску?', a: 'Так, завдяки потужності 1700 Вт та керамічній підошві він легко справляється зі складними тканинами швидше та безпечніше за звичайну праску.' },
    { q: 'Чи можна прасувати горизонтально?', a: 'Так, ця модель спеціально розроблена для роботи як у вертикальному, так і в горизонтальному положенні завдяки системі "Антикрапля".' },
    { q: 'Чи можна прасувати делікатні тканини?', a: 'Абсолютно. Керамічна підошва та рівномірна подача пари гарантують безпечний догляд за шовком, кашеміром та іншими делікатними тканинами.' },
    { q: 'Через скільки готовий до роботи?', a: 'Відпарювач нагрівається та повністю готовий до інтенсивної роботи всього за 45 секунд після увімкнення.' },
    { q: 'Що входить у комплект?', a: 'Відпарювач Magio 1700W, насадка-щітка 2-в-1 для ворсу, мірний стаканчик, інструкція та термозахисна рукавичка у подарунок.' },
  ];

  return (
    <section id="social-proof" className="py-24 bg-[#fcfcfc]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Left Column: Reviews & Badge */}
          <div className="bg-[#fcfcfc]">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-magio-black uppercase tracking-tight leading-tight">
                ЧОМУ ЙОГО ВЖЕ ОБРАЛИ<br/>ТИСЯЧІ ПОКУПЦІВ
              </h3>
            </div>
            
            <div className="relative">
              {/* Central Golden Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-40 md:h-40 z-10 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.4)] border-4 border-white overflow-hidden bg-white hidden sm:block">
                 <img src={asset_awardbadgejpg_1} alt="Magio Відпарювач Року" className="w-full h-full object-cover scale-110 mix-blend-multiply" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Тетяна, Київ', text: 'Заощаджує купу часу! Прасую штори, речі, навіть постіль прямо на ліжку.' },
                  { name: 'Олена, Дніпро', text: 'Потужний, компактний, зручний. Рукавичка в комплекті - супер.' },
                  { name: 'Наталія, Львів', text: 'Делікатні тканини як шовк тепер не боюсь прасувати.' },
                  { name: 'Андрій, Одеса', text: 'Горизонтальне прасування - це просто знахідка!' },
                ].map((review, idx) => (
                  <div key={idx} className={`bg-[#f4f2f0] p-6 rounded-2xl ${idx === 0 || idx === 2 ? 'sm:pr-12' : 'sm:pl-12'} flex flex-col justify-between min-h-[160px]`}>
                    <div>
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-magio-gold text-magio-gold" />
                        ))}
                      </div>
                      <p className="text-magio-black text-sm md:text-base leading-snug font-medium">
                        {review.text}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-4">{review.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: FAQ */}
          <div className="bg-[#fcfcfc] flex flex-col justify-center mt-12 lg:mt-0">
            <h3 className="text-2xl sm:text-3xl font-bold text-magio-black mb-8 uppercase tracking-tight text-center lg:text-left">
              ЧАСТІ ПИТАННЯ
            </h3>
            
            <div className="space-y-0">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-200 last:border-b-0">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between py-5 text-left group"
                  >
                    <span className="font-bold text-magio-black pr-4 group-hover:text-magio-gold transition-colors">{faq.q}</span>
                    <span className="text-gray-400 font-light text-2xl shrink-0 group-hover:text-magio-gold transition-colors leading-none">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  <div 
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="text-gray-600 text-sm leading-relaxed pr-8">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
