import React, { useState } from 'react';
import { getServices } from '../data/iiccData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { Check, ArrowUpRight, ChevronDown } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const { language } = useLanguage();
  const t = translations[language].services;
  const services = getServices(language);

  // State to track which service card dropdown is open
  const [expandedServices, setExpandedServices] = useState<Record<string, boolean>>({
    [services[0]?.number || 'MICE']: true,
  });

  const toggleService = (id: string) => {
    setExpandedServices((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="layanan" className="py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89753] mb-3">
            <span>{t.eyebrow}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#2C4A3E]">{t.eyebrowSub}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1E24] text-balance">
            {t.title}
          </h2>
        </div>

        {/* 4 Services in a 2x2 Bento Grid with Dropdown Toggles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {services.map((service) => {
            const isExpanded = !!expandedServices[service.number];

            return (
              <div
                key={service.number}
                className="rounded-xl bg-white border border-stone-200 hover:border-[#B89753]/60 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] overflow-hidden"
              >
                {/* Service Visual Photo Banner (Clickable to toggle) */}
                <div 
                  onClick={() => toggleService(service.number)}
                  className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-900 cursor-pointer"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleService(service.number);
                    }
                  }}
                  aria-label={`Toggle details for ${service.title}`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
                  
                  {/* Subtle badge on photo */}
                  <div className="absolute top-4 right-4">
                    <span className="text-[11px] font-semibold text-white bg-black/50 px-2.5 py-1 rounded backdrop-blur-sm border border-white/20">
                      {service.badge}
                    </span>
                  </div>
                </div>

                {/* Service Card Dropdown Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    {/* Header with Title and Dropdown Toggle Button */}
                    <button
                      type="button"
                      onClick={() => toggleService(service.number)}
                      className="w-full text-left flex items-center justify-between gap-3 group/btn focus:outline-none"
                      aria-expanded={isExpanded}
                    >
                      <h3 className="text-xl sm:text-2xl font-bold text-[#1A1E24] group-hover/btn:text-[#B89753] transition-colors">
                        {service.title}
                      </h3>
                      
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#A38139] bg-[#FAF8F5] group-hover/btn:bg-[#B89753]/10 px-2.5 py-1.5 rounded-lg border border-stone-200 transition-colors shrink-0">
                        <span>
                          {isExpanded 
                            ? (language === 'en' ? 'Hide Details' : 'Tutup Detail') 
                            : (language === 'en' ? 'View Details' : 'Lihat Detail')}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#B89753] transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Collapsible Dropdown Content */}
                    {isExpanded && (
                      <div className="mt-5 pt-5 border-t border-stone-100 animate-in fade-in slide-in-from-top-2 duration-300">
                        <p className="text-sm text-stone-600 leading-relaxed font-normal mb-5">
                          {service.description}
                        </p>

                        {/* Features checklist */}
                        <ul className="space-y-2.5 mb-6">
                          {service.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                              <Check className="w-4 h-4 text-[#2C4A3E] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Action CTA Button inside dropdown */}
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => onSelectService(service.title)}
                            className="w-full inline-flex items-center justify-between py-3 px-4 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-[#FAF8F5] hover:bg-[#1A1E24] hover:text-white border border-stone-200 hover:border-[#1A1E24] rounded-lg transition-all shadow-sm"
                          >
                            <span>
                              {language === 'en' 
                                ? `Inquire ${service.title}` 
                                : `Konsultasi Paket ${service.title}`}
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-[#B89753]" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
