import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, Zap, Gift, RefreshCw, Loader2 } from 'lucide-react';
import { siteConfig } from '../config';

export default function FinalCTA() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Будь ласка, заповніть всі поля.');
      return;
    }

    setIsLoading(true);

    const botToken = siteConfig.global.telegram.botToken;
    const chatIds = siteConfig.global.telegram.chatIds;
    const url = window.location.href;
    
    const text = `🔥 <b>Нове замовлення (Magio 1700W)!</b>\n\n👤 <b>Ім'я:</b> ${name}\n📞 <b>Телефон:</b> ${phone}\n🔗 <b>URL:</b> ${url}`;

    try {
      await Promise.all(chatIds.map(id => 
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: id,
            text: text,
            parse_mode: 'HTML'
          })
        })
      ));
      window.location.href = '/thanks.html';
    } catch (err) {
      console.error(err);
      window.location.href = '/thanks.html';
    }
  };

  return (
    <section id="final-cta" className="relative py-24 bg-magio-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-magio-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl">
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            ЗРОБІТЬ ПРАСУВАННЯ ПРОСТІШИМ <br className="hidden md:block" />
            <span className="text-gradient-gold">УЖЕ СЬОГОДНІ</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Замовте преміальний відпарювач Magio 1700W та отримайте термозахисну рукавичку у подарунок.
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            {[
              { icon: RefreshCw, text: 'Гориз. / Вертик.' },
              { icon: Zap, text: '1700 Вт' },
              { icon: ShieldCheck, text: 'Кераміка' },
              { icon: Gift, text: 'Подарунок' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                <item.icon className="w-5 h-5 text-magio-gold" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 bg-white/5 p-8 rounded-2xl border border-white/10 max-w-4xl mx-auto">
            
            {/* Price Block */}
            <div className="flex flex-col items-center justify-center lg:pr-12 lg:border-r border-white/10">
              <div className="text-5xl font-extrabold text-white mb-2">{siteConfig.global.priceCurrent} <span className="text-3xl">грн</span></div>
              <div className="text-gray-400 line-through text-2xl">{siteConfig.global.priceOld} грн</div>
              <div className="mt-4 flex items-center gap-2 bg-magio-gold/20 text-magio-gold px-4 py-1.5 rounded-full text-sm font-bold border border-magio-gold/30">
                <Gift className="w-4 h-4" /> Знижка діє сьогодні
              </div>
            </div>
            
            {/* Form Block */}
            <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-sm gap-4">
              <label htmlFor="final-name" className="sr-only">Ваше ім'я</label>
              <input 
                id="final-name"
                type="text" 
                placeholder="Ваше ім'я" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-magio-gold transition-colors text-lg"
              />
              <label htmlFor="final-phone" className="sr-only">Ваш телефон</label>
              <input 
                id="final-phone"
                type="tel" 
                placeholder="Ваш телефон" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-magio-gold transition-colors text-lg"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="group relative flex items-center justify-center gap-3 bg-gradient-gold text-magio-black px-8 py-4 rounded-xl font-bold text-xl tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 mt-2"
              >
                {isLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  <>
                    ОФОРМИТИ ЗАМОВЛЕННЯ
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>

          </div>

          <p className="mt-8 text-sm text-gray-400 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            Оплата при отриманні. Гарантія 12 місяців.
          </p>

        </div>
      </div>
    </section>
  );
}
