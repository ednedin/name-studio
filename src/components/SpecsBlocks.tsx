import React from 'react';
import { Shield, Zap, Thermometer, Droplets, Check, Sparkles, Flame, Waves } from 'lucide-react';
import asset_steamerheadpng_1 from '../assets/images/steamer-head.png';
import asset_steamer1700wbgjpg_2 from '../assets/images/steamer_1700w_bg.jpg';

export const LeftSpecs = () => (
  <div className="space-y-8 animate-fade-in-up text-center flex flex-col items-center">
    <div>
      <h3 className="text-xl md:text-2xl font-bold mb-6 leading-tight text-white uppercase tracking-wider">
        КЕРАМІЧНА ПОВЕРХНЯ — <br/>
        <span className="text-magio-gold">ДБАЙЛИВИЙ ДОГЛЯД ЗА ТКАНИНАМИ</span>
      </h3>
    </div>

    <div className="relative w-full max-w-[280px] mx-auto py-4">
       <img 
          src={asset_steamerheadpng_1} 
          alt="Керамічна підошва" 
          className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(212,175,55,0.2)]"
       />
    </div>

    <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mx-auto">
      Керамічне покриття легко ковзає по тканині, рівномірно розподіляє тепло та не пошкоджує волокна. <span className="text-white/90">Тому ваш одяг не зіпсується і не втратить вигляд.</span>
    </p>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full pt-4">
      {[
        { icon: Shield, text: 'не прилипає до тканини' },
        { icon: Sparkles, text: 'не залишає блиску' },
        { icon: Flame, text: 'не обпалює тканину' },
        { icon: Waves, text: 'підходить для делікатних речей' },
      ].map((item, idx) => (
        <div key={idx} className="flex flex-col items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-magio-gold border border-white/10 shadow-inner">
            <item.icon className="w-6 h-6" />
          </div>
          <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-tighter leading-tight">
            {item.text}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export const RightSpecsMobile = () => (
  <div className="space-y-8 animate-fade-in-up">
    <div>
      <h3 className="text-3xl font-bold mb-4 leading-tight text-white">
        ПОТУЖНІСТЬ <span className="text-magio-gold">1700Вт</span>
      </h3>
      <p className="text-gray-400">
        Професійна потужність у компактному корпусі. Справляється з найскладнішими складками швидше за звичайну праску.
      </p>
    </div>

    <ul className="space-y-5">
      {[
        { icon: Zap, title: 'Швидкий нагрів', desc: 'Готовий до роботи всього за 45 секунд' },
        { icon: Thermometer, title: 'Температура до 180°C', desc: 'Знищує 99.9% бактерій та пилових кліщів' },
        { icon: Droplets, title: 'Система "Антикрапля"', desc: 'Жодних мокрих плям на вашому одязі' },
        { icon: Check, title: 'Резервуар 300 мл', desc: 'Достатньо для відпарювання 4-5 речей' }
      ].map((item, idx) => (
        <li key={idx} className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-magio-gold/10 flex items-center justify-center shrink-0 border border-magio-gold/20">
            <item.icon className="w-5 h-5 text-magio-gold" />
          </div>
          <div>
            <h4 className="font-bold text-gray-200">{item.title}</h4>
            <p className="text-sm text-gray-400 mt-1">{item.desc}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export const RightSpecsDesktop = () => (
  <div className="relative w-full h-[640px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group animate-fade-in-up">
    <img 
      src={asset_steamer1700wbgjpg_2} 
      alt="Magio 1700W Power" 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-r from-magio-black/90 via-magio-black/50 to-transparent"></div>
    
    <div className="absolute inset-0 p-8 flex flex-col justify-center">
      <h3 className="text-3xl font-bold mb-8 leading-tight text-white">
        ПОТУЖНІСТЬ <br/>
        <span className="text-magio-gold text-5xl">1700Вт</span>
      </h3>

      <ul className="space-y-4 max-w-[60%]">
        {['Складні заломи', 'Щільні тканини', 'Пальта', 'Пуховики', 'Джинс', 'Льон', 'Сорочки', 'Плаття'].map((item, idx) => (
          <li key={idx} className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-magio-gold/20 flex items-center justify-center shrink-0 border border-magio-gold/30">
              <Check className="w-3.5 h-3.5 text-magio-gold" />
            </div>
            <span className="font-medium text-gray-200 text-sm md:text-base">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
