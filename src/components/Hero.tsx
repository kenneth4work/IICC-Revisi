import React from 'react';
import { MessageSquare, ArrowDown } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden bg-[#14171C] border-b border-stone-800">
      
      {/* Visual Canvas / Pristine Architecture with luxury dark scrim */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
          alt="IPB International Convention Center Grand Ballroom"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform transition-transform duration-1000"
        />
        
        {/* Measured dark gradient scrim for crisp contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14171C] via-[#14171C]/80 to-[#14171C]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_30%,rgba(184,151,83,0.18),transparent_75%)]" />
        
        {/* Subtle architectural grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:4rem_4rem]" 
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        
        {/* H1 with balanced typography in pure white and gold accent */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl text-balance leading-[1.15] drop-shadow-md">
          {t.title}<span className="text-[#B89753]">.</span>
        </h1>

        {/* Sub-headline: EXACTLY 1 HORIZONTAL LINE IN PURE WHITE (whitespace-nowrap) */}
        <div className="w-full max-w-4xl overflow-hidden mb-10 px-2">
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg whitespace-nowrap tracking-wide font-medium drop-shadow text-center">
            {language === 'en'
              ? 'Prestigious and exclusive MICE & Wedding Venue in the heart of Bogor City'
              : 'Pusat MICE & Wedding Venue prestisius dan eksklusif di jantung Kota Bogor'}
          </p>
        </div>

        {/* CTA Decision Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[#B89753] hover:bg-[#A38139] active:bg-[#8f6f2e] rounded-md transition-all shadow-lg hover:shadow-[#B89753]/20 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#B89753]"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>{t.ctaConsult}</span>
          </button>

          <a
            href="#fasilitas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-white hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-md transition-all backdrop-blur-sm whitespace-nowrap"
          >
            <span>{t.ctaFacilities}</span>
            <ArrowDown className="w-4 h-4 text-[#B89753]" />
          </a>
        </div>

      </div>
    </section>
  );
};
