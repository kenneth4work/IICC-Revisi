import React from 'react';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import aboutHotelImg from '../assets/images/regenerated_image_1790563028677.jpg';
import aboutMallImg from '../assets/images/regenerated_image_1790563026163.jpg';
import aboutAccessImg from '../assets/images/regenerated_image_1791253326378.jpg';
import aboutVenueImg from '../assets/images/regenerated_image_1790563011987.jpg';

export const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].about;

  return (
    <section id="tentang" className="py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Side-by-Side Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1E24] mb-4 text-balance">
              {t.title}
            </h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
              {t.p1}
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-stone-200/90 group">
              <img
                src={aboutVenueImg}
                alt="IPB International Convention Center"
                className="w-full h-64 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white bg-black/60 px-3 py-1 rounded backdrop-blur-sm border border-white/20">
                  {language === 'en' ? 'Iconic Convention Hall' : 'Venue Konvensi Kelas Dunia'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Grid / Key Location & Prestige Highlights */}
        <div className="w-full">
          
          {/* Main Card: Strategic Landmark & Integration */}
          <div className="rounded-xl bg-white border border-stone-200 p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300">
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#B89753]/10 border border-[#B89753]/25 text-xs font-semibold text-[#A38139] mb-4">
                <MapPin className="w-3.5 h-3.5 text-[#B89753]" />
                <span>{t.bentoTag1}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1A1E24]">
                {t.bentoTitle1}
              </h3>
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
              <p className="text-sm font-bold text-white">{t.strip1Title}</p>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden border border-stone-200 bg-white h-48 shadow-sm hover:shadow-md transition-all duration-300">
            <img
              src={aboutMallImg}
              alt="Botani Square Mall Shopping & Dining"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-5 flex flex-col justify-end">
              <p className="text-sm font-bold text-white">{t.strip2Title}</p>
            </div>
          </div>

          <div className="group relative rounded-xl overflow-hidden border border-stone-200 bg-white h-48 shadow-sm hover:shadow-md transition-all duration-300">
            <img
              src={aboutAccessImg}
              alt="Tol Jagorawi & DAMRI Shelter Akses Cepat"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent p-5 flex flex-col justify-end">
              <p className="text-sm font-bold text-white">{t.strip3Title}</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
