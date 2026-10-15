import React from 'react';
import { MessageSquare, ArrowDown, Building, Users, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const proofs = [
    {
      icon: <Award className="w-4 h-4 text-[#B89753]" />,
      title: t.proof1Title,
      subtitle: t.proof1Subtitle,
    },
    {
      icon: <Users className="w-4 h-4 text-[#2C4A3E]" />,
      title: t.proof2Title,
      subtitle: t.proof2Subtitle,
    },
    {
      icon: <Building className="w-4 h-4 text-[#B89753]" />,
      title: t.proof3Title,
      subtitle: t.proof3Subtitle,
    },
  ];

  return (
    <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-center justify-center overflow-hidden bg-[#FAF8F5] border-b border-stone-200">
      
      {/* Visual Canvas / Bright Illuminated Architecture */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=85"
          alt="IPB International Convention Center Grand Ballroom"
          className="w-full h-full object-cover object-center opacity-15 scale-105 transform transition-transform duration-1000"
        />
        
        {/* Soft, bright gradient scrims for clean light aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-[#FAF8F5]/85 to-[#FAF8F5]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_50%_15%,rgba(184,151,83,0.12),transparent_75%)]" />
        
        {/* Subtle geometric grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem]" 
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center flex flex-col items-center">
        
        {/* H1 with sharp dark luxury typography and gold period */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#1A1E24] mb-6 max-w-4xl text-balance leading-[1.12]">
          {t.title}<span className="text-[#B89753]">.</span>
        </h1>

        {/* Sub-headline */}
        <div className="w-full max-w-3xl mb-8 px-2">
          <p className="text-stone-600 text-sm sm:text-base md:text-lg font-normal leading-relaxed text-balance">
            {t.subheadline}
          </p>
        </div>

        {/* CTA Decision Block */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-semibold tracking-wide text-white bg-[#1A1E24] hover:bg-[#B89753] active:bg-[#A38139] rounded-lg transition-all shadow-md hover:shadow-lg whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[#B89753]"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>{t.ctaConsult}</span>
          </button>

          <a
            href="#fasilitas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-stone-800 hover:text-[#1A1E24] bg-white hover:bg-stone-50 border border-stone-200 hover:border-[#B89753] rounded-lg transition-all shadow-sm whitespace-nowrap"
          >
            <span>{t.ctaFacilities}</span>
            <ArrowDown className="w-4 h-4 text-[#B89753]" />
          </a>
        </div>

        {/* 3 Proof Highlights Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-12 sm:mt-16 w-full max-w-3xl">
          {proofs.map((proof, idx) => (
            <div 
              key={idx}
              className="bg-white/90 backdrop-blur-sm border border-stone-200/90 rounded-xl p-3.5 sm:p-4 text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:border-[#B89753]/50 transition-colors"
            >
              <div className="flex items-center justify-center mb-1.5">
                {proof.icon}
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#1A1E24]">
                {proof.title}
              </div>
              <div className="text-[11px] text-stone-500 font-normal mt-0.5 leading-tight">
                {proof.subtitle}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
