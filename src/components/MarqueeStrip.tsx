import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

export const MarqueeStrip: React.FC = () => {
  const { language } = useLanguage();
  const marqueeItems = translations[language].marquee;

  // Repeat for continuous marquee effect
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div className="relative w-full overflow-hidden bg-white border-y border-[#B89753]/25 py-3.5 select-none shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
      {/* Side gradient fades for seamless appearance */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee items-center gap-8 whitespace-nowrap">
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xs md:text-sm tracking-widest uppercase font-semibold text-stone-700">
              {item}
            </span>
            <span aria-hidden="true" className="text-[#B89753] text-sm">
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
