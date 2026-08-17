import React, { useState } from 'react';
import logoImg from '../assets/images/logo.jpg';

// Hardcoded rates mapped to lengths based on Natalia's logic
const lengthOptions = [
  { length: 40, capsules: 450, pricePerCapsule: 30 },
  { length: 45, capsules: 400, pricePerCapsule: 30 },
  { length: 50, capsules: 340, pricePerCapsule: 30 },
  { length: 55, capsules: 300, pricePerCapsule: 30 },
  { length: 60, capsules: 270, pricePerCapsule: 30 },
  { length: 65, capsules: 240, pricePerCapsule: 30 },
  { length: 70, capsules: 210, pricePerCapsule: 30 },
  { length: 75, capsules: 180, pricePerCapsule: 30 },
  { length: 80, capsules: 150, pricePerCapsule: 30 },
];

const Calculator: React.FC = () => {
  const [weight, setWeight] = useState<number>(100);
  const [lengthIdx, setLengthIdx] = useState<number>(2); // Default to 50 cm

  const selectedOption = lengthOptions[lengthIdx];
  const totalCapsules = Math.round((weight / 100) * selectedOption.capsules);
  const totalCost = totalCapsules * selectedOption.pricePerCapsule;

  return (
    <section className="min-h-[100svh] bg-[#0a0a0a] flex flex-col items-center justify-center p-4 sm:p-6 text-white font-sans">
      <div className="w-full max-w-lg bg-[#1a1a1a] p-8 sm:p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-[#333] relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent opacity-50"></div>
        
        <div className="flex justify-center mb-8">
          <img src={logoImg} alt="Name Studio" className="h-20 object-contain rounded-lg" />
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-8 text-white tracking-wide">
          Розрахунок <span className="text-[#d4af37]">вартості</span>
        </h1>

        <div className="space-y-6">
          <div className="bg-[#111] p-4 rounded-2xl border border-[#222] focus-within:border-[#d4af37]/50 transition-colors">
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Вага волосся (грам)</label>
            <div className="flex items-center">
              <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full bg-transparent text-2xl font-medium text-white focus:outline-none" />
              <span className="text-gray-500 ml-2">г</span>
            </div>
          </div>

          <div className="bg-[#111] p-4 rounded-2xl border border-[#222] focus-within:border-[#d4af37]/50 transition-colors">
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Довжина волосся (см)</label>
            <select value={lengthIdx} onChange={(e) => setLengthIdx(Number(e.target.value))} className="w-full bg-transparent text-2xl font-medium text-white focus:outline-none appearance-none cursor-pointer">
              {lengthOptions.map((opt, idx) => (
                <option key={idx} value={idx} className="bg-[#222] text-lg">{opt.length} см</option>
              ))}
            </select>
          </div>

          <div className="bg-[#111] p-4 rounded-2xl border border-[#222] opacity-70">
            <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wider">Вартість за капсулу (фіксована)</label>
            <div className="flex items-center">
              <div className="w-full bg-transparent text-2xl font-medium text-white">{selectedOption.pricePerCapsule}</div>
              <span className="text-gray-500 ml-2">₴</span>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-[#333]">
          
          <div className="flex justify-between items-end bg-[#111] p-5 rounded-2xl border border-[#222] shadow-inner mb-4">
            <span className="text-gray-400 font-medium">Кількість капсул:</span>
            <span className="text-3xl font-bold text-white">{totalCapsules} <span className="text-lg text-gray-400 font-normal">шт</span></span>
          </div>

          <div className="flex justify-between items-end bg-[#111] p-5 rounded-2xl border border-[#d4af37]/50 shadow-[0_0_15px_rgba(212,175,55,0.15)]">
            <span className="text-gray-300 font-medium text-lg">Актуальна вартість:</span>
            <span className="text-4xl font-bold text-[#d4af37]">{totalCost.toLocaleString('uk-UA')} ₴</span>
          </div>

        </div>
        
        <p className="text-center text-gray-500 text-xs mt-6">
          *Остаточна вартість розраховується індивідуально в студії
        </p>
      </div>
    </section>
  );
};

export default Calculator;
