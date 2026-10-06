import React from 'react';
import { MapPin, Hotel, ShieldCheck, Building, Compass, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import aboutHotelImg from '../assets/images/regenerated_image_1790563028677.jpg';
import aboutMallImg from '../assets/images/regenerated_image_1790563026163.jpg';
import aboutAccessImg from '../assets/images/regenerated_image_1791253326378.jpg';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="tentang" className="py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89753] mb-3">
            <span>{t.eyebrow}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#2C4A3E]">{t.eyebrowSub}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1E24] mb-4 text-balance">
            {t.title}
          </h2>
          <p className="text-lg sm:text-xl text-[#B89753] font-medium italic mb-6">
            {t.quote}
          </p>
          <p className="text-base text-stone-600 leading-relaxed font-normal">
            {t.p1}
            <span className="block mt-3">
              {t.p2}
            </span>
          </p>
        </div>

        {/* Bento Grid / Key Location & Prestige Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Card: Strategic Landmark & Integration */}
          <div className="md:col-span-8 rounded-xl bg-white border border-stone-200 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
            {/* Visual Photography Background with measured scrim */}
            <div className="absolute inset-0 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                alt="Botani Square & Bogor Central Landmark"
                className="w-full h-full object-cover object-center opacity-10 group-hover:opacity-15 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/80" />
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#B89753]/10 border border-[#B89753]/25 text-xs font-semibold text-[#A38139] mb-6">
                <MapPin className="w-3.5 h-3.5 text-[#B89753]" />
                <span>{t.bentoTag1}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1E24] mb-4">
                {t.bentoTitle1}
              </h3>
              
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                {t.bentoDesc1}
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-stone-100">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#FAF8F5] border border-stone-200 text-[#2C4A3E]">
                  <Hotel className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1E24]">{t.pill1}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{t.pill1Sub}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#FAF8F5] border border-stone-200 text-[#B89753]">
                  <Building className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1E24]">{t.pill2}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{t.pill2Sub}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-[#FAF8F5] border border-stone-200 text-[#2C4A3E]">
                  <Compass className="w-5 h-5 shrink-0" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1E24]">{t.pill3}</h4>
                  <p className="text-xs text-stone-500 mt-0.5">{t.pill3Sub}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Side Card: The Legacy with Prestige Frame */}
          <div className="md:col-span-4 rounded-xl bg-gradient-to-br from-white to-[#F4F1EA] border border-[#B89753]/30 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
            {/* Visual Photography Background */}
            <div className="absolute inset-0 pointer-events-none">
              <img
                src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80"
                alt="IPB Convention Audience & Stage"
                className="w-full h-full object-cover object-center opacity-5 group-hover:opacity-10 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#B89753]">
                  {t.bentoTag2}
                </span>
                <Sparkles className="w-5 h-5 text-[#B89753]" />
              </div>

              <div className="my-4">
                <div className="text-3xl sm:text-4xl font-bold text-[#1A1E24] tracking-tight">
                  {t.bentoTitle2}
                </div>
                <div className="text-base font-semibold text-[#B89753] mt-2">
                  {t.bentoSub2}
                </div>
                <p className="text-xs text-stone-500 mt-1">{t.bentoOrg2}</p>
              </div>

              <p className="text-sm text-stone-600 leading-relaxed mt-4 font-normal">
                {t.bentoDesc2}
              </p>
            </div>

            <div className="relative z-10 pt-6 border-t border-stone-200 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#2C4A3E] shrink-0" />
              <p className="text-xs text-stone-500">
                {t.bentoFooter2}
              </p>
            </div>
          </div>

        </div>

        {/* Feature Visual Strip: 3 Integrated Hub Photos */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="group relative rounded-xl overflow-hidden border border-stone-200 bg-white h-48 shadow-sm hover:shadow-md transition-all duration-300">
            <img
              src={aboutHotelImg}
              alt="IPB Convention Hotel Terintegrasi"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-5 flex flex-col justify-end">
              <span className="text-[11px] font-semibold text-[#B89753] uppercase tracking-wider">{t.strip1Tag}</span>
              <p className="text-sm font-bold text-white">{t.strip1Title}</p>
              <p className="text-[11px] text-stone-200">{t.strip1Sub}</p>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden border border-stone-200 bg-white h-48 shadow-sm hover:shadow-md transition-all duration-300">
            <img
              src={aboutMallImg}
              alt="Botani Square Mall Shopping & Dining"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-5 flex flex-col justify-end">
              <span className="text-[11px] font-semibold text-[#B89753] uppercase tracking-wider">{t.strip2Tag}</span>
              <p className="text-sm font-bold text-white">{t.strip2Title}</p>
              <p className="text-[11px] text-stone-200">{t.strip2Sub}</p>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden border border-stone-200 bg-white h-48 shadow-sm hover:shadow-md transition-all duration-300">
            <img
              src={aboutAccessImg}
              alt="Tol Jagorawi & DAMRI Shelter Akses Cepat"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-5 flex flex-col justify-end">
              <span className="text-[11px] font-semibold text-[#B89753] uppercase tracking-wider">{t.strip3Tag}</span>
              <p className="text-sm font-bold text-white">{t.strip3Title}</p>
              <p className="text-[11px] text-stone-200">{t.strip3Sub}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
