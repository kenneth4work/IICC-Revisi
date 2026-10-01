import React from 'react';
import { SERVICES } from '../data/iiccData';
import { Check, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="layanan" className="py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89753] mb-3">
            <span>One Stop Solution</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#2C4A3E]">Layanan Komprehensif</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide text-[#1A1E24] mb-4 text-balance">
            Solusi Terpadu Setiap Skala Acara
          </h2>
          <p className="text-base text-stone-600 font-body leading-relaxed">
            Dari rapat kenegaraan bertaraf internasional hingga pesta pernikahan akbar, IICC menghadirkan integrasi venue, katering gourmet, serta manajemen teknis dalam satu atap profesional.
          </p>
        </div>

        {/* 4 Services in an Asymmetric 2x2 Bento or List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="rounded-xl bg-white border border-stone-200 hover:border-[#B89753]/60 transition-all duration-300 flex flex-col justify-between group shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.08)] overflow-hidden"
            >
              {/* Service Visual Photo Banner */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />
              </div>

              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <h3 className="font-display text-2xl font-bold text-[#1A1E24] group-hover:text-[#B89753] transition-colors mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-xs font-semibold text-[#A38139] mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-stone-600 leading-relaxed font-body mb-6">
                    {service.description}
                  </p>

                  {/* Features checklist */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                        <Check className="w-4 h-4 text-[#2C4A3E] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <div className="pt-4 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onSelectService(service.title)}
                    className="w-full inline-flex items-center justify-between py-3 px-4 text-xs font-semibold uppercase tracking-wider text-stone-800 bg-[#FAF8F5] hover:bg-[#1A1E24] hover:text-white border border-stone-200 hover:border-[#1A1E24] rounded-lg transition-all shadow-sm"
                  >
                    <span>Konsultasi Paket {service.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#B89753]" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
