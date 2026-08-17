import React from 'react';

export default function BeforeAfter() {
  const items = [
    { title: 'СОРОЧКА', img: '/before-after/shirt_split.jpg' },
    { title: 'ШОВКОВА СУКНЯ', img: '/before-after/dress_split.jpg' },
    { title: 'ДЖИНСИ', img: '/before-after/jeans_split.jpg' },
    { title: 'ПОДУШКА', img: '/before-after/pillow_split.jpg' },
    { title: 'ШТОРИ', img: '/before-after/curtains_split.jpg' },
    { title: 'ПІДЖАК', img: '/before-after/jacket_split.jpg' },
  ];

  return (
    <section id="before-after" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-magio-black mb-4 uppercase tracking-tight">До / Після</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">Ідеальний результат на будь-якій тканині за лічені секунди.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 sm:gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <h3 className="font-bold text-sm sm:text-base text-magio-black mb-4 tracking-wider text-center">{item.title}</h3>
              
              <div className="relative w-full aspect-[1/1] rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-[#f8f8f8] group transition-transform hover:scale-[1.02] duration-300">
                
                {/* Single Split-Screen Image from AI */}
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Overlaid Labels (Matches reference style) */}
                <div className="absolute bottom-4 left-0 w-1/2 text-center pointer-events-none">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter sm:tracking-normal">
                    До
                  </span>
                </div>
                <div className="absolute bottom-4 right-0 w-1/2 text-center pointer-events-none">
                  <span className="bg-magio-gold/90 text-magio-black text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full shadow-md uppercase tracking-tighter sm:tracking-normal">
                    Після
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
