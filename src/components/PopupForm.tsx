import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Loader2, ShieldCheck, Gift } from 'lucide-react';
import { siteConfig } from '../config';

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

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
    
    const text = `🔥 <b>Нове замовлення (Magio 1700W - Popup)!</b>\n\n👤 <b>Ім'я:</b> ${name}\n📞 <b>Телефон:</b> ${phone}\n🔗 <b>URL:</b> ${url}`;

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="relative w-full max-w-md bg-[#1a1a1a] rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/10" onClick={(e) => e.stopPropagation()}>
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-2"
        >
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-8 pt-4">
          <h3 className="text-2xl font-extrabold text-white mb-2">ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</h3>
          <p className="text-gray-400 text-sm">Залиште свої дані і ми зателефонуємо вам для підтвердження</p>
        </div>

        {/* Price Block */}
        <div className="flex flex-col items-center justify-center mb-8 border-b border-white/10 pb-6">
          <div className="text-4xl font-extrabold text-white mb-1">{siteConfig.global.priceCurrent} <span className="text-2xl">грн</span></div>
          <div className="text-gray-400 line-through text-lg">{siteConfig.global.priceOld} грн</div>
          <div className="mt-3 flex items-center gap-1.5 bg-magio-gold/20 text-magio-gold px-3 py-1 rounded-full text-xs font-bold border border-magio-gold/30">
            <Gift className="w-3.5 h-3.5" /> Знижка діє сьогодні
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label htmlFor="popup-name" className="sr-only">Ваше ім'я</label>
          <input 
            id="popup-name"
            type="text" 
            placeholder="Ваше ім'я" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-magio-gold transition-colors text-lg"
          />
          <label htmlFor="popup-phone" className="sr-only">Ваш телефон</label>
          <input 
            id="popup-phone"
            type="tel" 
            placeholder="Ваш телефон" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-magio-gold transition-colors text-lg"
          />
          <button 
            type="submit"
            disabled={isLoading}
            className="group relative flex items-center justify-center gap-3 bg-gradient-gold text-magio-black px-6 py-4 rounded-xl font-bold text-lg tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100 mt-2"
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                ПІДТВЕРДИТИ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <p className="mt-6 text-xs text-gray-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-green-500" />
          Оплата при отриманні. Гарантія 12 місяців.
        </p>
      </div>
    </div>
  );
}
