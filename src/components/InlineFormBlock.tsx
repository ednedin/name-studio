import React, { useState } from 'react';
import { ArrowRight, Gift, Loader2 } from 'lucide-react';
import { siteConfig } from '../config';

export default function InlineFormBlock({ id }: { id?: string }) {
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
      await Promise.all(chatIds.map(chatId => 
        fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
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
    <section id={id} className="w-full py-12 md:py-16 bg-white relative z-20 border-y border-gray-100">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-[#1a1a1c] border border-[#2a2a2c] p-6 md:p-4 rounded-3xl md:rounded-full shadow-2xl drop-shadow-xl relative overflow-hidden">
          {/* Ambient glow inside the dark container */}
          <div className="absolute inset-0 bg-gradient-to-r from-magio-gold/10 via-transparent to-magio-gold/10 opacity-30"></div>

          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col md:grid md:grid-cols-4 gap-4 items-center w-full">
            
            {/* 1. Price Block */}
            <div className="flex flex-col items-center justify-center w-full md:border-r border-gray-700/50 py-2 md:py-0">
              <div className="flex items-center gap-3">
                <div className="text-3xl font-extrabold text-white leading-none">{siteConfig.global.priceCurrent} <span className="text-sm font-bold text-gray-300">грн</span></div>
                <div className="text-gray-500 line-through text-xs font-medium">{siteConfig.global.priceOld} грн</div>
              </div>
              <div className="flex items-center gap-1.5 text-magio-gold mt-1.5 text-[11px] font-bold uppercase tracking-wider">
                <Gift className="w-3 h-3" /> Знижка діє сьогодні
              </div>
            </div>
            
            {/* 2. Name Input */}
            <div className="w-full">
              <label htmlFor={`${id}-name`} className="sr-only">Ваше ім'я</label>
              <input 
                id={`${id}-name`}
                type="text" 
                placeholder="Ваше ім'я" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-5 py-3 md:py-0 md:h-[48px] rounded-full bg-[#242426] border border-[#333336] text-white placeholder-gray-500 focus:outline-none focus:border-magio-gold focus:ring-1 focus:ring-magio-gold transition-all text-sm shadow-inner"
              />
            </div>

            {/* 3. Phone Input */}
            <div className="w-full">
              <label htmlFor={`${id}-phone`} className="sr-only">Ваш телефон</label>
              <input 
                id={`${id}-phone`}
                type="tel" 
                placeholder="Ваш телефон" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full px-5 py-3 md:py-0 md:h-[48px] rounded-full bg-[#242426] border border-[#333336] text-white placeholder-gray-500 focus:outline-none focus:border-magio-gold focus:ring-1 focus:ring-magio-gold transition-all text-sm shadow-inner"
              />
            </div>

            {/* 4. Submit Button */}
            <div className="w-full">
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#dcb660] to-[#b38d35] text-[#111] px-8 py-3 md:py-0 md:h-[48px] rounded-full font-extrabold tracking-wider hover:brightness-110 hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 uppercase text-sm shadow-[0_4px_14px_rgba(212,175,55,0.2)]"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>ЗАМОВИТИ</>
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
}
