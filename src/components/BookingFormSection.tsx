import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin, Building2, HelpCircle, ArrowUpRight } from 'lucide-react';
import { getFaqs } from '../data/iiccData';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';

interface BookingFormSectionProps {
  initialFacility?: string;
  initialService?: string;
}

export const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  initialFacility,
  initialService,
}) => {
  const { language } = useLanguage();
  const t = translations[language].booking;
  const faqs = getFaqs(language);

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const getWaMessage = () => {
    if (initialFacility) {
      return language === 'en'
        ? `Hello IICC, I would like to consult and request an inquiry for ${initialFacility}.`
        : `Halo IICC, saya ingin berkonsultasi mengenai ketersediaan dan penawaran untuk ${initialFacility}.`;
    }
    if (initialService) {
      return language === 'en'
        ? `Hello IICC, I would like to consult regarding ${initialService}.`
        : `Halo IICC, saya ingin berkonsultasi mengenai layanan ${initialService}.`;
    }
    return language === 'en'
      ? 'Hello IICC, I would like to consult regarding an event reservation at IPB International Convention Center.'
      : 'Halo IICC, saya ingin berkonsultasi mengenai rencana acara di IPB International Convention Center.';
  };

  const waUrl = `https://wa.me/628111330659?text=${encodeURIComponent(getWaMessage())}`;

  return (
    <section id="kontak" className="py-24 bg-[#FAF8F5] text-stone-900 border-b border-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89753] mb-3">
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

        {/* 2-Column Layout: Official Info & FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl">
          
          {/* Official Profile & Contacts Box */}
          <div className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              {/* Venue Photographic Banner */}
              <div className="relative h-48 w-full overflow-hidden bg-stone-900">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
                  alt="IICC Sales & Concierge Office"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-white bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm border border-white/20">
                    {language === 'en' ? 'Sales & Event Concierge Office' : 'Kantor Sales & Event Concierge'}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-1">
                    IPB International Convention Center
                  </h4>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4 text-xs sm:text-sm text-stone-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#B89753] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">
                      {language === 'en' ? 'Building Address:' : 'Alamat Gedung:'}
                    </strong>
                    <span>Botani Square Mall Lt.2, Jl. Pajajaran, Bogor Tengah (Depan Tugu Kujang)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-[#2C4A3E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">
                      {language === 'en' ? 'Official WhatsApp:' : 'WhatsApp Resmi:'}
                    </strong>
                    <a 
                      href={waUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#A38139] hover:underline font-mono font-semibold"
                    >
                      0811 1330 659
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#B89753] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">
                      {language === 'en' ? 'Office Telephone:' : 'Telepon Kantor:'}
                    </strong>
                    <a href="tel:02518400659" className="text-stone-700 hover:text-stone-900 font-mono">
                      0251 8400 659
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#B89753] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">
                      {language === 'en' ? 'Official Email:' : 'Email Resmi:'}
                    </strong>
                    <a href="mailto:sm@ipbicc.com" className="text-stone-700 hover:text-stone-900 font-mono">
                      sm@ipbicc.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-[#2C4A3E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-stone-900 block font-semibold">
                      {language === 'en' ? 'Entity Status:' : 'Status Entitas:'}
                    </strong>
                    <span>
                      {language === 'en'
                        ? 'Strategic Business Unit of BLST (PT Bogor Life Science and Technology - IPB University Holding)'
                        : 'Unit Bisnis Strategis BLST (PT Bogor Life Science and Technology - Holding IPB University)'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-0">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 text-xs font-semibold uppercase tracking-wider text-white bg-[#1A1E24] hover:bg-[#B89753] active:bg-[#A38139] rounded-lg transition-all shadow-sm"
              >
                <span>{language === 'en' ? 'Chat Official WhatsApp' : 'Hubungi WhatsApp Resmi'}</span>
                <ArrowUpRight className="w-4 h-4 text-[#B89753]" />
              </a>
            </div>
          </div>

          {/* Quick FAQ Accordion */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-[0_4px_24px_rgba(0,0,0,0.04)] flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B89753] mb-6">
                <HelpCircle className="w-4 h-4 text-[#2C4A3E]" />
                <span>{t.faqTitle}</span>
              </div>

              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-stone-100 pb-4 last:border-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                      className="w-full text-left text-sm font-semibold text-[#1A1E24] hover:text-[#B89753] transition-colors flex justify-between items-center gap-2"
                    >
                      <span>{faq.question}</span>
                      <span className="text-[#B89753] font-mono text-base font-bold">
                        {expandedFaq === idx ? '−' : '+'}
                      </span>
                    </button>
                    {expandedFaq === idx && (
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100 mt-6">
              <p className="text-xs text-stone-500">
                {language === 'en'
                  ? 'Office hours: Mon – Sun: 08:00 – 17:00 WIB'
                  : 'Jam operasional kantor: Senin – Minggu: 08.00 – 17.00 WIB'}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
