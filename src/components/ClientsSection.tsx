import React, { useState } from 'react';
import { getClients, getTestimonials } from '../data/iiccData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import { ShieldCheck, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language].clients;
  const clients = getClients(language);
  const testimonials = getTestimonials(language);

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="klien" className="py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89753] mb-3">
            <ShieldCheck className="w-4 h-4 text-[#2C4A3E]" />
            <span>{t.eyebrow}</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#2C4A3E]">{t.eyebrowSub}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1A1E24] mb-4 text-balance">
            {t.title}
          </h2>
          <p className="text-base text-stone-600 font-normal leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Confirmed Clients Showcase Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-20">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white border border-stone-200 hover:border-[#B89753]/50 transition-all flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs font-bold text-[#A38139] tracking-wider">
                  {client.abbreviation}
                </span>
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2C4A3E]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-[#1A1E24] leading-snug">
                  {client.name}
                </h3>
                <p className="text-[11px] text-stone-500 mt-1 font-normal">
                  {client.category}
                </p>
              </div>
            </div>
          ))}

          {/* Prestige card */}
          <div className="p-5 rounded-xl bg-gradient-to-br from-[#FAF8F5] to-[#F4F1EA] border border-[#B89753]/30 flex flex-col justify-center text-center shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
            <span className="text-xl sm:text-2xl font-bold text-[#A38139]">
              {language === 'en' ? '500+ Official Events' : '500+ Acara Resmi'}
            </span>
            <p className="text-xs text-stone-800 font-semibold mt-1">
              {language === 'en' ? 'Annually Hosted' : 'Terselenggara Sukses'}
            </p>
            <p className="text-[10px] text-stone-500 mt-0.5">
              {language === 'en' ? 'MICE, Symposia & Royal Weddings' : 'MICE, Simposium & Wedding Megah'}
            </p>
          </div>
        </div>

        {/* Adjacent Concrete Testimonials Carousel */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-stone-200 p-8 sm:p-12 relative overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)]">
          {/* Subtle real event photography ambiance */}
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
              alt="Konferensi Resmi IICC"
              className="w-full h-full object-cover"
            />
          </div>

          <Quote className="absolute top-6 right-6 w-16 h-16 text-stone-200 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs uppercase tracking-widest text-[#B89753] font-semibold">
                {language === 'en' ? 'Client Experience' : 'Bukti Pengalaman Klien'} ({testimonials[activeTestimonial].event})
              </span>
              <span className="px-2.5 py-0.5 rounded bg-[#2C4A3E]/10 border border-[#2C4A3E]/20 text-[10px] text-[#2C4A3E] font-medium">
                Verified Event
              </span>
            </div>

            <blockquote className="text-lg sm:text-2xl font-medium text-[#1A1E24] leading-relaxed italic mb-8">
              “{testimonials[activeTestimonial].quote}”
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-stone-100">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#B89753]/15 border border-[#B89753]/30 flex items-center justify-center font-bold text-[#A38139] text-sm shrink-0">
                  {testimonials[activeTestimonial].author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <p className="font-semibold text-[#1A1E24] text-base">
                    {testimonials[activeTestimonial].author}
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {testimonials[activeTestimonial].role} · <span className="text-[#B89753] font-medium">{testimonials[activeTestimonial].institution}</span>
                  </p>
                </div>
              </div>

              {/* Navigation arrows */}
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  type="button"
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-lg bg-[#FAF8F5] hover:bg-stone-200 text-stone-700 hover:text-stone-900 border border-stone-200 transition-colors"
                  aria-label={language === 'en' ? 'Previous testimonial' : 'Testimonial sebelumnya'}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-stone-600 font-medium tabular-nums px-2">
                  {activeTestimonial + 1} / {testimonials.length}
                </span>
                <button
                  type="button"
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-lg bg-[#FAF8F5] hover:bg-stone-200 text-stone-700 hover:text-stone-900 border border-stone-200 transition-colors"
                  aria-label={language === 'en' ? 'Next testimonial' : 'Testimonial berikutnya'}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
