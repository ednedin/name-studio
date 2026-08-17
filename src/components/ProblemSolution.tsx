import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';
import asset_ironingboardcleanwidescreenjpg_1 from '../assets/images/ironing_board_clean_widescreen.jpg';
import asset_steamershirtwidescreenjpg_2 from '../assets/images/steamer_shirt_widescreen.jpg';

export default function ProblemSolution() {
  return (
    <section id="problem-solution" className="py-16 md:py-24 bg-white relative z-0">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Same rounded container style as Benefits.tsx */}
        <div className="bg-[#f8f9fa] rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          
          <div className="text-center pt-10 pb-4 px-6 relative z-20">
            <h2 className="text-2xl md:text-3xl font-extrabold text-magio-black mb-1 uppercase tracking-tight leading-tight">
              БІЛЬШЕ НІЯКОЇ
            </h2>
            <h2 className="text-2xl md:text-3xl font-extrabold text-magio-black uppercase tracking-tight leading-tight">
              ДОШКИ ДЛЯ ПРАСУВАННЯ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
            
            {/* The Problem (Left) */}
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-200">
              {/* Image Block */}
              <div className="w-full aspect-video md:aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={asset_ironingboardcleanwidescreenjpg_1} className="w-full h-full object-cover" alt="Old Ironing" />
              </div>
              
              {/* Text Block */}
              <div className="p-8 sm:p-10 md:p-12 flex-1 bg-white flex flex-col justify-center">
                <div className="space-y-6 max-w-sm mx-auto w-full">
                  {[
                    'Громіздка праска',
                    'Дошка займає місце',
                    'Довго нагрівається',
                    'Є ризик підпалити тканину'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-red-200 bg-red-50 flex items-center justify-center shrink-0 shadow-sm">
                        <XCircle className="w-6 h-6 text-red-500" strokeWidth={2} />
                      </div>
                      <span className="text-lg md:text-xl text-magio-black font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The Solution (Right) */}
            <div className="flex flex-col">
              {/* Image Block */}
              <div className="w-full aspect-video md:aspect-[4/3] overflow-hidden bg-gray-100">
                <img src={asset_steamershirtwidescreenjpg_2} className="w-full h-full object-cover" alt="Steaming" />
              </div>
              
              {/* Text Block */}
              <div className="p-8 sm:p-10 md:p-12 flex-1 bg-[#fcfcfc] flex flex-col justify-center">
                <div className="space-y-6 max-w-sm mx-auto w-full">
                  {[
                    'Повісили річ',
                    '45 секунд і готово',
                    'Легкий та компактний',
                    'Безпечно для всіх тканин'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full border border-green-200 bg-green-50 flex items-center justify-center shrink-0 shadow-sm">
                        <CheckCircle2 className="w-6 h-6 text-green-600" strokeWidth={2} />
                      </div>
                      <span className="text-lg md:text-xl text-magio-black font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
