import React from 'react';

export default function Equipment() {
  const items = [
    { 
      img: '/magio-vidpariuvach-hero.png', 
      title: 'Відпарювач', 
      subtitle: 'MG-1700W',
      isTransparent: true
    },
    { 
      img: '/equipment/attachment.jpg', 
      title: 'Насадка 2в1' 
    },
    { 
      img: '/equipment/glove.jpg', 
      title: 'Рукавичка' 
    },
    { 
      img: '/equipment/cup.jpg', 
      title: 'Мірний\nстаканчик' 
    },
    { 
      img: '/equipment/manual.jpg', 
      title: 'Інструкція' 
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f8f9fa] rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm border border-gray-100">
          
          <div className="text-center mb-10 block md:hidden">
            <h2 className="text-3xl font-extrabold text-magio-black uppercase tracking-tight">
              КОМПЛЕКТАЦІЯ
            </h2>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-stretch gap-10 md:gap-8 lg:gap-12">
            
            {/* Left Column: Steamer (Hero item) */}
            <div className="w-full md:w-[35%] flex flex-col items-center justify-end shrink-0">
              <div className="relative flex items-end justify-center mb-6 w-full h-80 md:h-[400px]">
                <img 
                  src={items[0].img} 
                  alt={items[0].title} 
                  className="max-w-full max-h-full object-contain drop-shadow-2xl"
                />
              </div>
              <div className="text-center">
                <span className="block text-magio-black font-semibold text-lg md:text-xl whitespace-pre-line leading-tight">
                  {items[0].title}
                </span>
                <span className="block text-gray-500 text-sm md:text-base mt-1">
                  {items[0].subtitle}
                </span>
              </div>
            </div>

            {/* Right Column: Title (Desktop) + Accessories Grid */}
            <div className="w-full md:w-[65%] flex flex-col justify-end pb-0 md:pb-8">
              
              {/* Title positioned above the accessories row on Desktop */}
              <div className="hidden md:flex justify-center mb-12 lg:mb-16">
                <h2 className="text-4xl lg:text-5xl font-extrabold text-magio-black uppercase tracking-tight">
                  КОМПЛЕКТАЦІЯ
                </h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 lg:gap-6">
                {items.slice(1).map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center justify-end">
                    <div className="relative flex items-end justify-center mb-4 sm:mb-6 w-full h-32 sm:h-40 md:h-[180px]">
                      <img 
                        src={item.img} 
                        alt={item.title.replace('\n', ' ')} 
                        className="max-w-full max-h-full object-contain mix-blend-multiply contrast-105"
                      />
                    </div>
                    <div className="text-center h-10 flex items-center justify-center">
                      <span className="block text-magio-black font-semibold text-sm sm:text-base whitespace-pre-line leading-tight">
                        {item.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
