import React from 'react';

export default function UsageGallery() {
  const items = [
    { title: 'Сорочки', img: '/before-after/shirt.jpg' },
    { title: 'Сукні', img: '/before-after/dress.jpg' },
    { title: 'Пальта', img: '/before-after/jacket.jpg' },
    { title: 'Джинси', img: '/before-after/jeans.jpg' },
    { title: 'Іграшки', img: '/usage/teddy_bear.jpg' },
    { title: 'Постіль', img: '/usage/bedding.jpg' },
    { title: 'Штори', img: '/before-after/curtains.jpg' },
    { title: 'Дитячий одяг', img: '/usage/baby_clothes.jpg' },
  ];

  return (
    <section id="usage-gallery" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-magio-black uppercase leading-tight tracking-tight">
            ОДИН ВІДПАРЮВАЧ –<br className="hidden sm:block" /> ДЛЯ ВСЬОГО ДОМУ
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="w-full aspect-square rounded-[2rem] overflow-hidden bg-gray-50 mb-5 shadow-sm border border-gray-100 group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover mix-blend-multiply opacity-95 group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <span className="font-semibold text-gray-800 text-lg md:text-xl tracking-wide">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
