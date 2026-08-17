import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import asset_terkalogopng_1 from '../assets/images/terka_logo.png';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gray-500" />
              </div>
              <a href="tel:+380972081758" className="text-gray-600 text-lg font-medium hover:text-magio-gold transition-colors">
                (097) 208-17-58
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-gray-500" />
              </div>
              <a href="mailto:info@terka.com.ua" className="text-gray-600 text-lg font-medium hover:text-magio-gold transition-colors">
                info@terka.com.ua
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gray-500" />
              </div>
              <span className="text-gray-600 text-lg font-medium">м. Київ, вул. Дегтярівська 8-А</span>
            </div>
          </div>
          
          {/* Right Column: Logo, Copyright, Payments */}
          <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto">
            <img src={asset_terkalogopng_1} alt="TERKA Logo" className="h-16 object-contain mb-8 mix-blend-multiply" />
            
            <p className="text-gray-500 text-sm max-w-md mb-8">
              © Онлайн-магазин "TERKA"™ 2017-2026 ТМ використовується на підставі сертифікату правовласника.
            </p>

            <div className="flex flex-col items-start md:items-end gap-3">
              <span className="text-gray-500 text-sm">Приймаємо до оплати</span>
              <div className="flex gap-4">
                {/* Visual placeholder for Visa/Mastercard, standard implementation */}
                <div className="flex items-center gap-1 font-bold text-blue-800 text-xl italic tracking-tighter">
                  VISA
                </div>
                <div className="flex">
                  <div className="w-6 h-6 rounded-full bg-red-600 opacity-90 relative z-10"></div>
                  <div className="w-6 h-6 rounded-full bg-yellow-500 opacity-90 -ml-2 z-0 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  );
}
